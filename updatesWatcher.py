import os, sys
import re

import requests
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import shutil
import jsbeautifier
import time
import sys
import traceback


def soupfindAllnSave(pagefolder, url, soup, tag2find='img', inner='src'):
    if not os.path.exists(pagefolder):  # create only once
        os.mkdir(pagefolder)
    for res in soup.findAll(tag2find):  # images, css, etc..
        try:
            filename = os.path.basename(res[inner])
            if "css" in filename:
                continue
            fileurl = urljoin(url, res.get(inner))
            # rename to saved file path
            # res[inner] # may or may not exist
            filepath = os.path.join(pagefolder, filename)
            res[inner] = os.path.join(os.path.basename(pagefolder), filename)
            with open(filepath, 'wb') as file:
                filebin = session.get(fileurl)
                file.write(filebin.content)
        except Exception as exc:
            print(exc, file=sys.stderr)
    return soup


def savePage(response, pagefilename='page'):
    url = response.url
    soup = BeautifulSoup(response.text, features='lxml')
    pagefolder = pagefilename + '_files'  # page contents
    # soup = soupfindAllnSave(pagefolder, url, soup, 'img', inner='src')
    soup = soupfindAllnSave(pagefolder, url, soup, 'link', inner='href')
    soup = soupfindAllnSave(pagefolder, url, soup, 'script', inner='src')
    with open(pagefolder + "/" + pagefilename + '.html', 'w') as file:
        file.write(soup.prettify())
    return soup


while True:
    try:
        session = requests.Session()
        response = session.get('https://sunflower-land.com/play/')
        urls = re.findall("(https?://[^ \"]*)", response.text)
        try:
            shutil.rmtree("sunflower_files")
        except:
            pass
        os.mkdir("sunflower_files")
        print("\n".join(urls))
        for url in urls:
            print("Checking:", url)
            original_url = url
            url = url.split('?')[0]
            url = url.split("/")[-1]
            r = requests.get(original_url)
            if "text/css" in r.headers['content-type']:
                print("Skipping CSS:", url)
                continue
            if "javascript" in r.headers['content-type']:
                if not url.endswith(".js"):
                    url = url + ".js"
            with open(f"sunflower_files/{url}", 'w') as file:
                file.write(r.text)
        print("Saving page...")
        savePage(response, 'sunflower')
        print("Prettifying JS files...")
        for filename in os.listdir("sunflower_files"):
            if filename.endswith(".js"):
                print("Prettifying:", filename)
                with open(f"sunflower_files/{filename}", 'r') as file:
                    js = file.read()
                js = jsbeautifier.beautify(js)
                print("Prettified:", filename)
                with open(f"sunflower_files/{filename}", 'w') as file:
                    file.write(js)
                print("Written:", filename)
        # commit and push to GitHub
        print("Committing and pushing to github...")
        os.system("git add .")
        os.system("git commit -m 'sunflower'")
        os.system("git push")
        print("Done!")
    except Exception as exc:
        print(exc, file=sys.stderr)
        traceback.print_exc()
    print("Sleeping...")
    time.sleep(60)
