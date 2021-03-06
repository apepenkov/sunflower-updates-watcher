var j = Object.defineProperty,
    Z = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var W = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty,
    z = Object.prototype.propertyIsEnumerable;
var H = (e, A, t) => A in e ? j(e, A, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[A] = t,
    c = (e, A) => {
        for (var t in A || (A = {})) q.call(A, t) && H(e, t, A[t]);
        if (W)
            for (var t of W(A)) z.call(A, t) && H(e, t, A[t]);
        return e
    },
    l = (e, A) => Z(e, X(A));
var x = (e, A, t) => (H(e, typeof A != "symbol" ? A + "" : A, t), t);
import {
    b as buffer,
    p as process,
    E as EventEmitter,
    l as lib,
    D as Decimal,
    W as Web3,
    a as pingHealthCheck_1,
    o,
    c as createMachine,
    d as assign,
    R as React,
    u as useInterpret,
    e as classNames,
    r as react,
    f as useActor,
    M as Modal,
    g as RecaptchaWrapper,
    h as howler,
    i as lodash_shuffle,
    C as Carousel,
    j as CarouselItem,
    P as PropTypes,
    k as useMachine,
    m as Decimal$1,
    n as ReactMarkdown,
    q as remarkGfm,
    A as Accordion,
    s as p$1,
    t as ReactDOM
} from "./vendor.7a8f3e38.js";
const p = function() {
    const A = document.createElement("link").relList;
    if (A && A.supports && A.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
    new MutationObserver(n => {
        for (const s of n)
            if (s.type === "childList")
                for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && a(r)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(n) {
        const s = {};
        return n.integrity && (s.integrity = n.integrity), n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? s.credentials = "include" : n.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function a(n) {
        if (n.ep) return;
        n.ep = !0;
        const s = t(n);
        fetch(n.href, s)
    }
};
p();
window.Buffer = buffer.Buffer;
window.process = process;
window.EventEmitter = EventEmitter;
const NETWORK = "mainnet",
    DONATION_ADDRESS = "0x6D18a54E0fd87FCb84a0510A3eCd8855b7226715",
    POLYGON_CHAIN_ID = 137,
    API_URL$b = "https://api.sunflower-land.com",
    WISHING_WELL_CONTRACT = "0xBE403A6054af56629D7d591A8fBD8cce3dc66771",
    BETA_CONTRACT = "0x48AfE14AE52987F6fE6E2F69aB74DC7Ac5a10fd2",
    FARM_CONTRACT = "0x2B4A66557A79263275826AD31a4cDDc2789334bD",
    INVENTORY_CONTRACT = "0x22d5f9B75c524Fec1D6619787e582644CD4D7422",
    PAIR_CONTRACT = "0x6f9e92dd4734c168a734b873dc3db77e39552eb6",
    SESSION_CONTRACT = "0x070717e1Bc4c6e46C22B0e0B8821e0aC1D4689c3",
    TOKEN_CONTRACT = "0xD1f9c58e33933a993A3891F8acFe05a68E1afC05",
    DISCORD_REDIRECT = "https://sunflower-land.com/play/",
    CLIENT_VERSION = "2022-05-05T06:58",
    RELEASE_VERSION = "v0.2.26-beta-improvements",
    CONFIG = {
        NETWORK,
        POLYGON_CHAIN_ID,
        DONATION_ADDRESS,
        API_URL: API_URL$b,
        DISCORD_REDIRECT,
        WISHING_WELL_CONTRACT,
        BETA_CONTRACT,
        FARM_CONTRACT,
        INVENTORY_CONTRACT,
        PAIR_CONTRACT,
        SESSION_CONTRACT,
        TOKEN_CONTRACT,
        CLIENT_VERSION,
        RELEASE_VERSION
    },
    ERRORS = {
        NO_WEB3: "NO_WEB3",
        WRONG_CHAIN: "WRONG_CHAIN",
        NO_FARM: "NO_FARM",
        FAILED_REQUEST: "FAILED_REQUEST",
        REJECTED_TRANSACTION: "REJECTED_TRANSACTION",
        BLOCKED: "BLOCKED",
        NETWORK_CONGESTED: "NETWORK_CONGESTED",
        SESSION_EXPIRED: "SESSION_EXPIRED",
        DISCORD_USER_EXISTS: "DISCORD_USER_EXISTS",
        TOO_MANY_REQUESTS: "TOO_MANY_REQUESTS"
    };
var SessionABI = [{
    inputs: [{
        internalType: "contract PotatoLandInventory",
        name: "_inventory",
        type: "address"
    }, {
        internalType: "contract PotatoLandToken",
        name: "_token",
        type: "address"
    }, {
        internalType: "contract PotatoLand",
        name: "_farm",
        type: "address"
    }],
    stateMutability: "payable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "bytes32",
        name: "sessionId",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "farmId",
        type: "uint256"
    }],
    name: "SessionChanged",
    type: "event"
}, {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "executed",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "generateSessionId",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getSessionId",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getWithdrawnAt",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "sessions",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bool",
        name: "_liquify",
        type: "bool"
    }],
    name: "setLiquify",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_fee",
        type: "uint256"
    }],
    name: "setSyncFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_wishingWell",
        type: "address"
    }],
    name: "setWishingWell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_tax",
        type: "uint256"
    }],
    name: "setWishingWellTax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_fee",
        type: "uint256"
    }],
    name: "setWithdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "signature",
        type: "bytes"
    }, {
        internalType: "bytes32",
        name: "sessionId",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "farmId",
        type: "uint256"
    }, {
        internalType: "uint256[]",
        name: "mintIds",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "mintAmounts",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "burnIds",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "burnAmounts",
        type: "uint256[]"
    }, {
        internalType: "int256",
        name: "tokens",
        type: "int256"
    }],
    name: "sync",
    outputs: [{
        internalType: "bool",
        name: "success",
        type: "bool"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_signer",
        type: "address"
    }],
    name: "transferSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_team",
        type: "address"
    }],
    name: "transferTeam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
    }, {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
    }],
    name: "verify",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "signature",
        type: "bytes"
    }, {
        internalType: "bytes32",
        name: "sessionId",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "farmId",
        type: "uint256"
    }, {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }, {
        internalType: "uint256",
        name: "sfl",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "tax",
        type: "uint256"
    }],
    name: "withdraw",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "withdrawnAt",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}];
const MINIMUM_GAS_PRICE = 40;
async function estimateGasPrice(e, A = 1) {
    const t = MINIMUM_GAS_PRICE * 1e9;
    try {
        const a = await e.eth.getGasPrice();
        let n = a ? Number(a) * A : void 0;
        return (!n || n < t) && (n = t), console.log({
            gasPrice: n
        }), n
    } catch {
        return t
    }
}

function parseMetamaskError(e) {
    return console.log({
        parse: e
    }), e.code === 4001 ? new Error(ERRORS.REJECTED_TRANSACTION) : e.code === -32603 ? (console.log("Congested!"), new Error(ERRORS.NETWORK_CONGESTED)) : e
}
const address$6 = CONFIG.SESSION_CONTRACT;
class SessionManager {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "contract");
        this.web3 = A, this.account = t, this.contract = new this.web3.eth.Contract(SessionABI, address$6)
    }
    async getSessionId(A, t = 0) {
        await new Promise(a => setTimeout(a, 3e3 * t));
        try {
            return await this.contract.methods.getSessionId(A).call({
                from: this.account
            })
        } catch (a) {
            const n = parseMetamaskError(a);
            if (t < 3) return this.getSessionId(A, t + 1);
            throw n
        }
    }
    async getNextSessionId(A, t) {
        await new Promise(n => setTimeout(n, 3e3));
        const a = await this.getSessionId(A);
        return a === t ? this.getNextSessionId(A, t) : a
    }
    async sync({
        signature: A,
        sessionId: t,
        deadline: a,
        farmId: n,
        mintIds: s,
        mintAmounts: r,
        burnIds: i,
        burnAmounts: m,
        tokens: d
    }) {
        const E = lib.toWei("0.1"),
            u = await this.getSessionId(n),
            w = await estimateGasPrice(this.web3);
        return await new Promise((g, C) => {
            this.contract.methods.sync(A, t, a, n, s, r, i, m, d).send({
                from: this.account,
                value: E,
                gasPrice: w
            }).on("error", function(Q) {
                console.log({
                    error: Q
                });
                const h = parseMetamaskError(Q);
                C(h)
            }).on("transactionHash", function(Q) {
                console.log({
                    transactionHash: Q
                })
            }).on("receipt", function(Q) {
                g(Q)
            })
        }), await this.getNextSessionId(n, u)
    }
    async withdraw({
        signature: A,
        sessionId: t,
        deadline: a,
        farmId: n,
        ids: s,
        amounts: r,
        tax: i,
        sfl: m
    }) {
        const d = await this.getSessionId(n),
            E = await estimateGasPrice(this.web3);
        return await new Promise((w, B) => {
            this.contract.methods.withdraw(A, t, a, n, s, r, m, i).send({
                from: this.account,
                gasPrice: E
            }).on("error", function(g) {
                const C = parseMetamaskError(g);
                console.log({
                    parsedIt: C
                }), B(C)
            }).on("transactionHash", function(g) {
                console.log({
                    transactionHash: g
                })
            }).on("receipt", function(g) {
                console.log({
                    receipt: g
                }), w(g)
            })
        }), await this.getNextSessionId(n, d)
    }
}
var FarmABI = [{
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "approved",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "ApprovalForAll",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "landAddress",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "LandCreated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "_game",
        type: "address"
    }],
    name: "addGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "gameApprove",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "gameBurn",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "gameTransfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getApproved",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getFarm",
    outputs: [{
        components: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        internalType: "struct Farm",
        name: "",
        type: "tuple"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "getFarms",
    outputs: [{
        components: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        internalType: "struct Farm[]",
        name: "",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "mint",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "ownerOf",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_game",
        type: "address"
    }],
    name: "removeGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "uri",
        type: "string"
    }],
    name: "setBaseUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "tokenByIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "tokenOfOwnerByIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "tokenURI",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}];
const address$5 = CONFIG.FARM_CONTRACT;
class Farm {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "farm");
        this.web3 = A, this.account = t, this.farm = new this.web3.eth.Contract(FarmABI, address$5)
    }
    async getFarms(A = 0) {
        await new Promise(t => setTimeout(t, 3e3 * A));
        try {
            return await this.farm.methods.getFarms(this.account).call({
                from: this.account
            })
        } catch (t) {
            const a = parseMetamaskError(t);
            if (A < 3) return this.getFarms(A + 1);
            throw a
        }
    }
    async ownerOf(A) {
        return await this.farm.methods.ownerOf(A).call()
    }
    async getFarm(A) {
        return await this.farm.methods.getFarm(A).call()
    }
    async getNewFarm() {
        await new Promise(a => setTimeout(a, 3e3));
        const A = await this.getFarms();
        if (A.length === 0) return this.getNewFarm();
        console.log({
            farm: A[0]
        });
        const t = await this.ownerOf(A[0].tokenId);
        return console.log({
            owner: t
        }), console.log({
            account: this.account
        }), t !== this.account ? this.getNewFarm() : A[0]
    }
    async getTotalSupply(A = 0) {
        await new Promise(t => setTimeout(t, 3e3 * A));
        try {
            return await this.farm.methods.totalSupply().call({
                from: this.account
            })
        } catch (t) {
            const a = parseMetamaskError(t);
            if (A < 3) return this.getTotalSupply(A + 1);
            throw a
        }
    }
}
var BetaJSON = [{
    inputs: [{
        internalType: "contract SunflowerLand",
        name: "_farm",
        type: "address"
    }],
    stateMutability: "payable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [{
        internalType: "bytes",
        name: "signature",
        type: "bytes"
    }, {
        internalType: "address",
        name: "charity",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "createFarm",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "createdAt",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "farmCreatedAt",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_signer",
        type: "address"
    }],
    name: "transferSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_team",
        type: "address"
    }],
    name: "transferTeam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
    }, {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
    }],
    name: "verify",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}];
const address$4 = CONFIG.BETA_CONTRACT;
class Beta$1 {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "contract");
        this.web3 = A, this.account = t, this.contract = new this.web3.eth.Contract(BetaJSON, address$4)
    }
    async getCreatedAt(A, t = 1) {
        await new Promise(a => setTimeout(a, 3e3 * t));
        try {
            return await this.contract.methods.farmCreatedAt(A).call({
                from: this.account
            })
        } catch (a) {
            const n = parseMetamaskError(a);
            if (t < 3) return this.getCreatedAt(A, t + 1);
            throw n
        }
    }
    async createFarm({
        signature: A,
        charity: t,
        donation: a
    }) {
        const n = await estimateGasPrice(this.web3);
        return new Promise((s, r) => {
            this.contract.methods.createFarm(A, t, a).send({
                from: this.account,
                value: a,
                gasPrice: n
            }).on("error", function(i) {
                console.log({
                    error: i
                });
                const m = parseMetamaskError(i);
                r(m)
            }).on("transactionHash", function(i) {
                console.log({
                    transactionHash: i
                })
            }).on("receipt", function(i) {
                console.log({
                    receipt: i
                }), s(i)
            })
        })
    }
}
const KNOWN_IDS = {
    "Sunflower Seed": 101,
    "Potato Seed": 102,
    "Pumpkin Seed": 103,
    "Carrot Seed": 104,
    "Cabbage Seed": 105,
    "Beetroot Seed": 106,
    "Cauliflower Seed": 107,
    "Parsnip Seed": 108,
    "Radish Seed": 109,
    "Wheat Seed": 110,
    Sunflower: 201,
    Potato: 202,
    Pumpkin: 203,
    Carrot: 204,
    Cabbage: 205,
    Beetroot: 206,
    Cauliflower: 207,
    Parsnip: 208,
    Radish: 209,
    Wheat: 210,
    Axe: 301,
    Pickaxe: 302,
    "Stone Pickaxe": 303,
    "Iron Pickaxe": 304,
    Hammer: 305,
    Rod: 306,
    "Sunflower Statue": 401,
    "Potato Statue": 402,
    "Christmas Tree": 403,
    Scarecrow: 404,
    "Farm Cat": 405,
    "Farm Dog": 406,
    Gnome: 407,
    "Chicken Coop": 408,
    "Gold Egg": 409,
    "Golden Cauliflower": 410,
    "Sunflower Tombstone": 411,
    "Sunflower Rock": 412,
    "Goblin Crown": 413,
    Fountain: 414,
    "Woody the Beaver": 415,
    "Apprentice Beaver": 416,
    "Foreman Beaver": 417,
    "Mysterious Parsnip": 418,
    "Carrot Sword": 419,
    Nancy: 420,
    Kuebiko: 421,
    "Nyon Statue": 422,
    "Farmer Bath": 423,
    "Homeless Tent": 424,
    "Pumpkin Soup": 501,
    "Roasted Cauliflower": 502,
    Sauerkraut: 503,
    "Radish Pie": 504,
    Wood: 601,
    Stone: 602,
    Iron: 603,
    Gold: 604,
    Egg: 605,
    Chicken: 606,
    Cow: 607,
    Pig: 608,
    Sheep: 609,
    "Green Thumb": 701,
    "Barn Manager": 702,
    "Seed Specialist": 703,
    Wrangler: 704,
    Lumberjack: 705,
    Prospector: 706,
    Logger: 707,
    "Gold Rush": 708,
    "Australian Flag": 801,
    "Belgian Flag": 802,
    "Brazilian Flag": 803,
    "Chinese Flag": 804,
    "Finnish Flag": 805,
    "French Flag": 806,
    "German Flag": 807,
    "Indonesian Flag": 808,
    "Indian Flag": 809,
    "Iranian Flag": 810,
    "Italian Flag": 811,
    "Japanese Flag": 812,
    "Moroccan Flag": 813,
    "Dutch Flag": 814,
    "Philippine Flag": 815,
    "Polish Flag": 816,
    "Portuguese Flag": 817,
    "Russian Flag": 818,
    "Saudi Arabian Flag": 819,
    "South Korean Flag": 820,
    "Spanish Flag": 821,
    "Sunflower Flag": 822,
    "Thai Flag": 823,
    "Turkish Flag": 824,
    "Ukrainian Flag": 825,
    "American Flag": 826,
    "Vietnamese Flag": 827,
    "Canadian Flag": 828,
    "Singaporean Flag": 829,
    "British Flag": 830,
    "Sierra Leone Flag": 831,
    "Romanian Flag": 832,
    "Rainbow Flag": 833,
    "Goblin Flag": 834,
    "Pirate Flag": 835,
    "Algerian Flag": 836,
    "Mexican Flag": 837,
    "Dominican Republic Flag": 838,
    "Argentinian Flag": 839,
    "Lithuanian Flag": 840,
    "Malaysian Flag": 841,
    "Colombian Flag": 842,
    "Egg Basket": 901,
    "Red Egg": 902,
    "Blue Egg": 903,
    "Yellow Egg": 904,
    "Pink Egg": 905,
    "Purple Egg": 906,
    "Orange Egg": 907,
    "Green Egg": 908,
    "Easter Bunny": 909
};
Object.assign({}, ...Object.entries(KNOWN_IDS).map(([e, A]) => ({
    [A]: e
})));
const IDS = Object.values(KNOWN_IDS);
var InventoryJSON = [{
    inputs: [],
    stateMutability: "payable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "ApprovalForAll",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }, {
        indexed: !1,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
    }],
    name: "TransferBatch",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "TransferSingle",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "string",
        name: "value",
        type: "string"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "URI",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "_game",
        type: "address"
    }],
    name: "addGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "accounts",
        type: "address[]"
    }, {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }],
    name: "balanceOfBatch",
    outputs: [{
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "exists",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    name: "gameBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "gameMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "gameTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_game",
        type: "address"
    }],
    name: "removeGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newuri",
        type: "string"
    }],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
    }],
    name: "totalSupplyBatch",
    outputs: [{
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "uri",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}];
const address$3 = CONFIG.INVENTORY_CONTRACT;
class Inventory$1 {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "contract");
        this.web3 = A, this.account = t, this.contract = new this.web3.eth.Contract(InventoryJSON, address$3)
    }
    async loadSupplyBatch(A, t = 0) {
        await new Promise(a => setTimeout(a, 3e3 * t));
        try {
            return await this.contract.methods.totalSupplyBatch(A).call({
                from: this.account
            })
        } catch (a) {
            const n = parseMetamaskError(a);
            if (t < 3) return this.loadSupplyBatch(A, t + 1);
            throw n
        }
    }
    async totalSupply() {
        const A = Object.values(KNOWN_IDS),
            t = Object.keys(KNOWN_IDS);
        return (await this.loadSupplyBatch(A)).reduce((n, s, r) => l(c({}, n), {
            [t[r]]: new Decimal(s)
        }), {})
    }
    async getBalances(A) {
        const t = Array(IDS.length).fill(A);
        return await this.contract.methods.balanceOfBatch(t, IDS).call()
    }
}
var TokenABI = [{
    inputs: [],
    stateMutability: "payable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "_game",
        type: "address"
    }],
    name: "addGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "gameApprove",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "gameBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "gameMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "gameTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_team",
        type: "address"
    }],
    name: "passTeamRole",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_game",
        type: "address"
    }],
    name: "removeGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}];
const address$2 = CONFIG.PAIR_CONTRACT,
    wishingWellAddress$1 = CONFIG.WISHING_WELL_CONTRACT;
class Pair {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "contract");
        this.web3 = A, this.account = t, this.contract = new this.web3.eth.Contract(TokenABI, address$2)
    }
    async getBalance() {
        return await this.contract.methods.balanceOf(this.account).call({
            from: this.account
        })
    }
    async approve(A) {
        return new Promise((t, a) => {
            this.contract.methods.approve(wishingWellAddress$1, A).send({
                from: this.account
            }).on("error", function(n) {
                console.log({
                    error: n
                }), a(n)
            }).on("transactionHash", function(n) {
                console.log({
                    transactionHash: n
                })
            }).on("receipt", function(n) {
                console.log({
                    receipt: n
                }), t(n)
            })
        })
    }
}
var WishingWellJSON = [{
    inputs: [{
        internalType: "contract SunflowerLandToken",
        name: "_token",
        type: "address"
    }, {
        internalType: "contract ERC20",
        name: "_liquidityToken",
        type: "address"
    }],
    stateMutability: "payable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "signature",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "tokens",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "collectFromWell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "tokens",
        type: "uint256"
    }],
    name: "Rewarded",
    type: "event"
}, {
    inputs: [{
        internalType: "uint256",
        name: "period",
        type: "uint256"
    }],
    name: "setLockedPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_signer",
        type: "address"
    }],
    name: "transferSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "wish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "tokens",
        type: "uint256"
    }],
    name: "Wished",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "canCollect",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "executed",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "lastUpdatedAt",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}];
const address$1 = CONFIG.WISHING_WELL_CONTRACT;
class WishingWell$1 {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "contract");
        this.web3 = A, this.account = t, this.contract = new this.web3.eth.Contract(WishingWellJSON, address$1)
    }
    async wish() {
        const A = await estimateGasPrice(this.web3);
        return new Promise((t, a) => {
            this.contract.methods.wish().send({
                from: this.account,
                gasPrice: A
            }).on("error", function(n) {
                console.log({
                    error: n
                }), a(n)
            }).on("transactionHash", function(n) {
                console.log({
                    transactionHash: n
                })
            }).on("receipt", function(n) {
                console.log({
                    receipt: n
                }), t(n)
            })
        })
    }
    async collectFromWell({
        signature: A,
        tokens: t,
        deadline: a
    }) {
        const n = await estimateGasPrice(this.web3);
        return new Promise((s, r) => {
            this.contract.methods.collectFromWell(A, t, a).send({
                from: this.account,
                gasPrice: n
            }).on("error", function(i) {
                console.log({
                    error: i
                }), r(i)
            }).on("transactionHash", function(i) {
                console.log({
                    transactionHash: i
                })
            }).on("receipt", function(i) {
                console.log({
                    receipt: i
                }), s(i)
            })
        })
    }
    async getBalance() {
        const A = await this.contract.methods.balanceOf(this.account).call({
            from: this.account
        });
        return console.log({
            balance: A
        }), A
    }
    async canCollect() {
        return await this.contract.methods.canCollect(this.account).call({
            from: this.account
        })
    }
    async lastCollected() {
        return await this.contract.methods.lastUpdatedAt(this.account).call({
            from: this.account
        })
    }
}
const address = CONFIG.TOKEN_CONTRACT;
class Token {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "contract");
        this.web3 = A, this.account = t, this.contract = new this.web3.eth.Contract(TokenABI, address)
    }
    async balanceOf(A) {
        return await this.contract.methods.balanceOf(A).call({
            from: this.account
        })
    }
    async totalSupply() {
        return await this.contract.methods.totalSupply().call({
            from: this.account
        })
    }
}
var SunflowerFarmersABI = [{
    inputs: [{
        internalType: "contract Token",
        name: "_token",
        type: "address"
    }, {
        components: [{
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            internalType: "uint256",
            name: "tokenAmount",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "size",
            type: "uint256"
        }, {
            internalType: "enum FarmV2.Fruit",
            name: "fruit",
            type: "uint8"
        }],
        internalType: "struct FarmV2.V1Farm[]",
        name: "farms",
        type: "tuple[]"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "_address",
        type: "address"
    }],
    name: "FarmCreated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "_address",
        type: "address"
    }],
    name: "FarmSynced",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "_address",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "_item",
        type: "address"
    }],
    name: "ItemCrafted",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "recipeAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "craft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address payable",
        name: "_charity",
        type: "address"
    }],
    name: "createFarm",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }, {
        components: [{
            internalType: "address",
            name: "materialAddress",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        internalType: "struct FarmV2.Cost[]",
        name: "costs",
        type: "tuple[]"
    }],
    name: "createRecipe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "resourceAddress",
        type: "address"
    }, {
        internalType: "address",
        name: "requires",
        type: "address"
    }],
    name: "createResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "getFarm",
    outputs: [{
        components: [{
            internalType: "enum FarmV2.Fruit",
            name: "fruit",
            type: "uint8"
        }, {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256"
        }],
        internalType: "struct FarmV2.Square[]",
        name: "farm",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getFarmCount",
    outputs: [{
        internalType: "uint256",
        name: "count",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "itemAddress",
        type: "address"
    }],
    name: "getItemBalance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "getLand",
    outputs: [{
        components: [{
            internalType: "enum FarmV2.Fruit",
            name: "fruit",
            type: "uint8"
        }, {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256"
        }],
        internalType: "struct FarmV2.Square[]",
        name: "",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "price",
        type: "uint256"
    }],
    name: "getMarketPrice",
    outputs: [{
        internalType: "uint256",
        name: "conversion",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipeAddress",
        type: "address"
    }],
    name: "getRecipe",
    outputs: [{
        components: [{
            internalType: "address",
            name: "outputAddress",
            type: "address"
        }, {
            components: [{
                internalType: "address",
                name: "materialAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            internalType: "struct FarmV2.Cost[]",
            name: "costs",
            type: "tuple[]"
        }],
        internalType: "struct FarmV2.Recipe",
        name: "recipe",
        type: "tuple"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "resourceAddress",
        type: "address"
    }],
    name: "getResource",
    outputs: [{
        components: [{
            internalType: "uint256",
            name: "balance",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "staked",
            type: "uint256"
        }],
        internalType: "struct FarmV2.StakedResource",
        name: "resource",
        type: "tuple"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "levelUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipeAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "mintNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "myReward",
    outputs: [{
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "receiveReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "resourceAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "enum FarmV2.Action",
            name: "action",
            type: "uint8"
        }, {
            internalType: "enum FarmV2.Fruit",
            name: "fruit",
            type: "uint8"
        }, {
            internalType: "uint256",
            name: "landIndex",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256"
        }],
        internalType: "struct FarmV2.Event[]",
        name: "_events",
        type: "tuple[]"
    }],
    name: "sync",
    outputs: [{
        components: [{
            components: [{
                internalType: "enum FarmV2.Fruit",
                name: "fruit",
                type: "uint8"
            }, {
                internalType: "uint256",
                name: "createdAt",
                type: "uint256"
            }],
            internalType: "struct FarmV2.Square[]",
            name: "land",
            type: "tuple[]"
        }, {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
        }],
        internalType: "struct FarmV2.Farm",
        name: "",
        type: "tuple"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}];
const farmContractAddress = "0x6e5Fa679211d7F6b54e14E187D34bA547c5d3fe0",
    farmTokenAddress = "0xdf9B4b57865B403e08c85568442f95c26b7896b0";
class SunflowerFarmers {
    constructor(A, t) {
        x(this, "web3");
        x(this, "account");
        x(this, "farm");
        x(this, "token");
        this.web3 = A, this.account = t, this.farm = new this.web3.eth.Contract(SunflowerFarmersABI, farmContractAddress), this.token = new this.web3.eth.Contract(TokenABI, farmTokenAddress)
    }
    async hasFarm(A, t = 0) {
        await new Promise(a => setTimeout(a, 3e3 * t));
        try {
            const a = await this.farm.methods.getLand(A).call({
                from: A
            });
            return console.log({
                land: a
            }), a.length >= 5
        } catch (a) {
            const n = parseMetamaskError(a);
            if (t < 3) return this.hasFarm(A, t + 1);
            throw n
        }
    }
    async hasTokens(A, t = 0) {
        await new Promise(a => setTimeout(a, 3e3 * t));
        try {
            const a = await this.token.methods.balanceOf(A).call({
                from: A
            });
            return console.log({
                balance: a
            }), Number(a) > 0
        } catch (a) {
            const n = parseMetamaskError(a);
            if (t < 3) return this.hasTokens(A, t + 1);
            throw n
        }
    }
    async hasV1Data(A = this.account) {
        const t = await this.hasTokens(A);
        return await this.hasFarm(A) || t
    }
}
class Metamask {
    constructor() {
        x(this, "web3", null);
        x(this, "farm", null);
        x(this, "sunflowerFarmers", null);
        x(this, "session", null);
        x(this, "beta", null);
        x(this, "inventory", null);
        x(this, "pair", null);
        x(this, "wishingWell", null);
        x(this, "token", null);
        x(this, "account", null)
    }
    async initialiseContracts() {
        try {
            if (this.farm = new Farm(this.web3, this.account), this.sunflowerFarmers = new SunflowerFarmers(this.web3, this.account), this.session = new SessionManager(this.web3, this.account), this.beta = new Beta$1(this.web3, this.account), this.inventory = new Inventory$1(this.web3, this.account), this.pair = new Pair(this.web3, this.account), this.token = new Token(this.web3, this.account), this.wishingWell = new WishingWell$1(this.web3, this.account), !await this.healthCheck()) throw new Error("Unable to reach Polygon")
        } catch (A) {
            if (A.code === "-32005") console.error("Retrying..."), await new Promise(t => window.setTimeout(t, 3e3));
            else throw console.error(A), A
        }
    }
    async setupWeb3() {
        if (window.ethereum) try {
                await window.ethereum.enable(), this.web3 = new Web3(window.ethereum)
            } catch (A) {
                console.error("Error inside setupWeb3", A)
            } else if (window.web3) this.web3 = new Web3(window.web3.currentProvider);
            else throw new Error(ERRORS.NO_WEB3)
    }
    async healthCheck() {
        return await pingHealthCheck_1(this.web3, this.account) !== 500
    }
    async getAccount() {
        if (!this.web3) throw new Error(ERRORS.NO_WEB3);
        return (await this.web3.eth.getAccounts())[0]
    }
    async loadAccount() {
        this.account = await this.getAccount()
    }
    async initialise(A = 0) {
        var t;
        try {
            if (await new Promise(n => setTimeout(n, 1e3)), await this.setupWeb3(), await this.loadAccount(), await ((t = this.web3) == null ? void 0 : t.eth.getChainId()) !== CONFIG.POLYGON_CHAIN_ID) throw new Error(ERRORS.WRONG_CHAIN);
            await this.initialiseContracts()
        } catch (a) {
            if (a.message === ERRORS.WRONG_CHAIN || a.message === ERRORS.NO_WEB3) throw a;
            if (A < 3) return await new Promise(n => setTimeout(n, 2e3)), this.initialise(A + 1);
            throw a
        }
    }
    async signTransaction(A, t = this.account) {
        if (!this.web3) throw new Error(ERRORS.NO_WEB3);
        const a = this.generateSignatureMessage({
            address: t,
            nonce: A
        });
        try {
            return {
                signature: await this.web3.eth.personal.sign(a, t, "")
            }
        } catch (n) {
            throw parseMetamaskError(n)
        }
    }
    generateSignatureMessage({
        address: A,
        nonce: t
    }) {
        return `\u{1F33B} Welcome to Sunflower Land! \u{1F33B}

Click to sign in and accept the Sunflower Land
\u{1F4DC} Terms of Service:
https://docs.sunflower-land.com/support/terms-of-service

This request will not trigger a blockchain
transaction or cost any gas fees.

Your authentication status will reset after
each session.

\u{1F45B} Wallet address:
${A.substring(0,19)}...${A.substring(24)}

\u{1F511} Nonce: ${t}`
    }
    getDefaultChainParam() {
        return {
            chainId: `0x${Number(CONFIG.POLYGON_CHAIN_ID).toString(16)}`,
            chainName: "Polygon Mainnet",
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18
            },
            rpcUrls: ["https://polygon-rpc.com/"],
            blockExplorerUrls: ["https://polygonscan.com/"]
        }
    }
    async checkDefaultNetwork() {
        var t;
        return await ((t = this.web3) == null ? void 0 : t.eth.getChainId()) === CONFIG.POLYGON_CHAIN_ID
    }
    async switchNetwork() {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: `0x${Number(CONFIG.POLYGON_CHAIN_ID).toString(16)}`
            }]
        })
    }
    async addNetwork() {
        try {
            const A = this.getDefaultChainParam();
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [c({}, A)]
            })
        } catch {
            throw new Error(ERRORS.WRONG_CHAIN)
        }
    }
    async initialiseNetwork() {
        try {
            await this.switchNetwork()
        } catch (A) {
            throw A.code === 4902 && await this.addNetwork(), A
        }
    }
    async donateToTheTeam(A) {
        var a;
        const t = await estimateGasPrice(this.web3);
        try {
            await ((a = this.web3) == null ? void 0 : a.eth.sendTransaction({
                from: metamask.myAccount,
                to: CONFIG.DONATION_ADDRESS,
                value: lib.toHex(lib.toWei(A.toString(), "ether")),
                gasPrice: t
            }))
        } catch (n) {
            throw parseMetamaskError(n)
        }
    }
    getFarm() {
        return this.farm
    }
    getSunflowerFarmers() {
        return this.sunflowerFarmers
    }
    getInventory() {
        return this.inventory
    }
    getBeta() {
        return this.beta
    }
    getSessionManager() {
        return this.session
    }
    getPair() {
        return this.pair
    }
    getWishingWell() {
        return this.wishingWell
    }
    getToken() {
        return this.token
    }
    get myAccount() {
        return this.account
    }
    async getBlockNumber() {
        var A;
        try {
            const t = await ((A = this.web3) == null ? void 0 : A.eth.getBlockNumber());
            if (!t) throw new Error(ERRORS.NETWORK_CONGESTED);
            return t
        } catch (t) {
            throw parseMetamaskError(t)
        }
    }
}
const metamask = new Metamask,
    API_URL$a = CONFIG.API_URL;
async function signTransaction(e) {
    const A = await window.fetch(`${API_URL$a}/farm`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${e.token}`
        },
        body: JSON.stringify({
            charity: e.charity,
            donation: e.donation,
            captcha: e.captcha
        })
    });
    if (A.status === 429) throw new Error(ERRORS.TOO_MANY_REQUESTS);
    if (A.status >= 400) throw new Error(ERRORS.FAILED_REQUEST);
    const {
        signature: t,
        charity: a,
        donation: n
    } = await A.json();
    return {
        signature: t,
        charity: a,
        donation: n
    }
}
async function createFarm({
    donation: e,
    charity: A,
    token: t,
    captcha: a
}) {
    const n = await signTransaction({
        donation: e,
        charity: A,
        token: t,
        captcha: a
    });
    return await metamask.getBeta().createFarm(n), await metamask.getFarm().getNewFarm()
}
const API_URL$9 = CONFIG.API_URL;
async function loginRequest(e) {
    const A = await window.fetch(`${API_URL$9}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(c({}, e))
    });
    if (A.status >= 400) throw new Error(ERRORS.FAILED_REQUEST);
    const {
        token: t
    } = await A.json();
    return {
        token: t
    }
}
const host = window.location.host.replace(/^www\./, ""),
    LOCAL_STORAGE_KEY$1 = `sb_wiz.zpc.v.${host}-${window.location.pathname}`;

function getSession(e) {
    const A = localStorage.getItem(LOCAL_STORAGE_KEY$1);
    return A ? JSON.parse(A)[e] : null
}

function saveSession(e, A) {
    let t = {};
    const a = localStorage.getItem(LOCAL_STORAGE_KEY$1);
    a && (t = JSON.parse(a));
    const n = l(c({}, t), {
        [e]: A
    });
    return localStorage.setItem(LOCAL_STORAGE_KEY$1, JSON.stringify(n))
}

function removeSession(e) {
    let A = {};
    const t = localStorage.getItem(LOCAL_STORAGE_KEY$1);
    return t && (A = JSON.parse(t)), delete A[e], localStorage.setItem(LOCAL_STORAGE_KEY$1, JSON.stringify(A))
}

function decodeToken(e) {
    return o(e)
}
const TOKEN_BUFFER_MS = 1e3 * 60 * 60 * 4;
async function login() {
    const e = metamask.myAccount,
        A = getSession(e);
    if (A) {
        const s = decodeToken(A.token),
            r = s.exp * 1e3 > Date.now() + TOKEN_BUFFER_MS,
            i = !!s.userAccess;
        if (r && i) return {
            token: A.token
        }
    }
    const t = Math.floor(Date.now() / 864e5),
        {
            signature: a
        } = await metamask.signTransaction(t),
        {
            token: n
        } = await loginRequest({
            address: e,
            signature: a
        });
    return saveSession(e, {
        token: n
    }), {
        token: n
    }
}
const API_URL$8 = CONFIG.API_URL;
async function oauthoriseRequest(e) {
    const A = await window.fetch(`${API_URL$8}/oauth`, {
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
                Authorization: `Bearer ${e.token}`
            },
            body: JSON.stringify({
                code: e.code
            })
        }),
        {
            token: t,
            errorCode: a
        } = await A.json();
    if (A.status >= 400) throw new Error(a || ERRORS.FAILED_REQUEST);
    return {
        token: t
    }
}
async function oauthorise(e) {
    window.history.pushState({}, "", window.location.pathname);
    const A = metamask.myAccount,
        {
            token: t
        } = await login(),
        {
            token: a
        } = await oauthoriseRequest({
            token: t,
            code: e
        });
    return saveSession(A, {
        token: a
    }), {
        token: a
    }
}

function redirectOAuth() {
    const e = "946044940008435803",
        A = encodeURIComponent(CONFIG.DISCORD_REDIRECT),
        t = "guilds.members.read";
    window.location.href = `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${e}&scope=${t}&redirect_uri=${A}&prompt=consent`
}
const INITIAL_SESSION = "0x0000000000000000000000000000000000000000000000000000000000000000",
    getFarmUrl = () => {
        const e = new URLSearchParams(window.location.search).get("farmId");
        return parseInt(e)
    },
    getDiscordCode = () => new URLSearchParams(window.location.search).get("code"),
    deleteFarmUrl = () => window.history.pushState({}, "", window.location.pathname),
    authMachine = createMachine({
        id: "authMachine",
        initial: "connecting",
        context: {},
        states: {
            connecting: {
                id: "connecting",
                invoke: {
                    src: "initMetamask",
                    onDone: [{
                        target: "checkFarm",
                        cond: "hasFarmIdUrl"
                    }, {
                        target: "oauthorising",
                        cond: "hasDiscordCode"
                    }, {
                        target: "signing"
                    }],
                    onError: {
                        target: "unauthorised",
                        actions: "assignErrorMessage"
                    }
                },
                on: {
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            signing: {
                invoke: {
                    src: "login",
                    onDone: {
                        target: "connected",
                        actions: "assignToken"
                    },
                    onError: {
                        target: "unauthorised",
                        actions: "assignErrorMessage"
                    }
                },
                on: {
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            oauthorising: {
                invoke: {
                    src: "oauthorise",
                    onDone: {
                        target: "connected.oauthorised",
                        actions: "assignToken"
                    },
                    onError: {
                        target: "unauthorised",
                        actions: "assignErrorMessage"
                    }
                },
                on: {
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            connected: {
                initial: "loadingFarm",
                states: {
                    loadingFarm: {
                        id: "loadingFarm",
                        invoke: {
                            src: "loadFarm",
                            onDone: [{
                                target: "countdown",
                                cond: "isFresh"
                            }, {
                                target: "readyToStart",
                                actions: "assignFarm",
                                cond: "hasFarm"
                            }, {
                                target: "checkingAccess"
                            }],
                            onError: {
                                target: "#unauthorised",
                                actions: "assignErrorMessage"
                            }
                        }
                    },
                    checkingAccess: {
                        id: "checkingAccess",
                        invoke: {
                            src: async e => {
                                var A;
                                return {
                                    hasAccess: (A = e.token) == null ? void 0 : A.userAccess.createFarm
                                }
                            },
                            onDone: [{
                                target: "noFarmLoaded",
                                cond: (e, A) => A.data.hasAccess
                            }, {
                                target: "checkingSupply"
                            }],
                            onError: {
                                target: "#unauthorised",
                                actions: "assignErrorMessage"
                            }
                        }
                    },
                    checkingSupply: {
                        id: "checkingSupply",
                        invoke: {
                            src: async () => {
                                var A;
                                return {
                                    totalSupply: await ((A = metamask.getFarm()) == null ? void 0 : A.getTotalSupply())
                                }
                            },
                            onDone: [{
                                target: "supplyReached",
                                cond: (e, A) => {
                                    var t, a;
                                    return Number(A.data.totalSupply) >= 1e5 && !((a = (t = e.token) == null ? void 0 : t.userAccess) == null ? void 0 : a.createFarm)
                                }
                            }, {
                                target: "noFarmLoaded"
                            }],
                            onError: {
                                target: "#unauthorised",
                                actions: "assignErrorMessage"
                            }
                        }
                    },
                    oauthorised: {
                        on: {
                            CREATE_FARM: {
                                target: "creatingFarm"
                            },
                            REFRESH: {
                                target: "#connecting"
                            }
                        }
                    },
                    creatingFarm: {
                        invoke: {
                            src: "createFarm",
                            onDone: {
                                target: "#connecting"
                            },
                            onError: {
                                target: "#unauthorised",
                                actions: "assignErrorMessage"
                            }
                        }
                    },
                    countdown: {
                        on: {
                            REFRESH: {
                                target: "#connecting"
                            }
                        }
                    },
                    noFarmLoaded: {
                        on: {
                            CREATE_FARM: {
                                target: "oauthorised"
                            },
                            CONNECT_TO_DISCORD: {
                                target: "noFarmLoaded",
                                actions: redirectOAuth
                            },
                            EXPLORE: {
                                target: "#exploring"
                            }
                        }
                    },
                    farmLoaded: {
                        always: {
                            target: "readyToStart"
                        }
                    },
                    readyToStart: {
                        on: {
                            START_GAME: {
                                target: "authorised"
                            },
                            EXPLORE: {
                                target: "#exploring"
                            }
                        }
                    },
                    authorised: {
                        on: {
                            REFRESH: {
                                target: "#connecting"
                            },
                            EXPLORE: {
                                target: "#exploring"
                            },
                            LOGOUT: {
                                target: "#connecting",
                                actions: ["clearSession", "resetFarm"]
                            }
                        }
                    },
                    supplyReached: {}
                },
                on: {
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            unauthorised: {
                id: "unauthorised",
                on: {
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            exploring: {
                id: "exploring",
                on: {
                    LOAD_FARM: {
                        target: "#loadingFarm"
                    },
                    VISIT: {
                        target: "checkFarm"
                    },
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            checkFarm: {
                invoke: {
                    src: "visitFarm",
                    onDone: {
                        target: "visiting",
                        actions: "assignFarm",
                        cond: "hasFarm"
                    },
                    onError: {
                        target: "unauthorised",
                        actions: "assignErrorMessage"
                    }
                },
                on: {
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            visiting: {
                on: {
                    RETURN: {
                        target: "connecting",
                        actions: ["resetFarm", "deleteFarmIdUrl"]
                    },
                    ACCOUNT_CHANGED: {
                        target: "connecting",
                        actions: "resetFarm"
                    }
                }
            },
            minimised: {}
        },
        on: {
            CHAIN_CHANGED: {
                target: "connecting",
                actions: "resetFarm"
            },
            REFRESH: {
                target: "connecting",
                actions: "resetFarm"
            }
        }
    }, {
        services: {
            initMetamask: async () => {
                await metamask.initialise()
            },
            loadFarm: async () => {
                var n, s;
                const e = await ((n = metamask.getFarm()) == null ? void 0 : n.getFarms());
                if ((e == null ? void 0 : e.length) === 0) return;
                const A = await ((s = metamask.getBeta()) == null ? void 0 : s.getCreatedAt(metamask.myAccount)),
                    t = e[0],
                    a = await metamask.getSessionManager().getSessionId(t.tokenId);
                return {
                    farmId: t.tokenId,
                    address: t.account,
                    sessionId: a,
                    createdAt: A
                }
            },
            createFarm: async (e, A) => {
                const {
                    charityAddress: t,
                    donation: a,
                    captcha: n
                } = A, s = await createFarm({
                    charity: t,
                    donation: a,
                    token: e.rawToken,
                    captcha: n
                });
                return {
                    farmId: s.tokenId,
                    address: s.account,
                    sessionId: INITIAL_SESSION
                }
            },
            login: async () => {
                const {
                    token: e
                } = await login();
                return {
                    token: e
                }
            },
            oauthorise: async () => {
                const e = getDiscordCode(),
                    {
                        token: A
                    } = await oauthorise(e);
                return {
                    token: A
                }
            },
            visitFarm: async (e, A) => {
                var n;
                const t = getFarmUrl() || A.farmId,
                    a = await ((n = metamask.getFarm()) == null ? void 0 : n.getFarm(t));
                return {
                    farmId: a.tokenId,
                    address: a.account,
                    sessionId: "",
                    createdAt: 0
                }
            }
        },
        actions: {
            assignFarm: assign({
                farmId: (e, A) => A.data.farmId,
                address: (e, A) => A.data.address,
                sessionId: (e, A) => A.data.sessionId
            }),
            assignToken: assign({
                token: (e, A) => decodeToken(A.data.token),
                rawToken: (e, A) => A.data.token
            }),
            assignErrorMessage: assign({
                errorCode: (e, A) => A.data.message
            }),
            resetFarm: assign({
                farmId: () => {},
                address: () => {},
                sessionId: () => {},
                token: () => {},
                rawToken: () => {}
            }),
            clearSession: e => removeSession(metamask.myAccount),
            deleteFarmIdUrl: deleteFarmUrl
        },
        guards: {
            isFresh: (e, A) => {
                var a;
                return ((a = A.data) == null ? void 0 : a.farmId) ? Date.now() / 1e3 - A.data.createdAt < 60 : !1
            },
            hasFarm: (e, A) => {
                var t;
                if ((t = A.data) == null ? void 0 : t.farmId) {
                    const {
                        farmId: a
                    } = A.data;
                    return !!a
                }
                return !!e.farmId
            },
            hasFarmIdUrl: () => !isNaN(getFarmUrl()),
            hasDiscordCode: () => !!getDiscordCode()
        }
    }),
    Context$1 = React.createContext({}),
    Provider = ({
        children: e
    }) => {
        const A = useInterpret(authMachine);
        return React.createElement(Context$1.Provider, {
            value: {
                authService: A
            }
        }, e)
    };
var background = "./assets/background.7b66bdbf.png",
    darkBorder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFAAAA7qRoGBQlo4eEUgAAAAF0Uk5TAEDm2GYAAAAZSURBVAjXY+BawcCgGsbAMIGxAQODxIHyAIsgB7CF1qipAAAAAElFTkSuQmCC",
    border$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFAAAA6tSqGBQlHYAABgAAAAF0Uk5TAEDm2GYAAAAZSURBVAjXY+BawcCgGsbAMIGxAQODxIHyAIsgB7CF1qipAAAAAElFTkSuQmCC";
const Panel = ({
        children: e,
        className: A,
        style: t
    }) => React.createElement(OuterPanel, {
        className: A,
        style: t
    }, React.createElement(InnerPanel, null, e)),
    InnerPanel = ({
        children: e,
        className: A,
        style: t
    }) => React.createElement("div", {
        className: classNames("bg-brown-300 p-1", A),
        style: c({
            borderStyle: "solid",
            borderWidth: "6px",
            borderImage: `url(${border$1}) 30 stretch`,
            borderImageSlice: "25%",
            imageRendering: "pixelated",
            borderImageRepeat: "repeat",
            borderRadius: "20px"
        }, t)
    }, e),
    OuterPanel = ({
        children: e,
        className: A,
        style: t
    }) => React.createElement("div", {
        className: classNames("bg-brown-600 p-0.5 text-white shadow-lg", A),
        style: c({
            borderStyle: "solid",
            borderWidth: "6px",
            borderImage: `url(${darkBorder}) 30 stretch`,
            borderImageSlice: "25%",
            imageRendering: "pixelated",
            borderImageRepeat: "repeat",
            borderRadius: "20px"
        }, t)
    }, e);
var token = "./assets/token.e6f7183e.gif";
const LOCAL_STORAGE_KEY = "inventory.selectedItems";

function cacheShortcuts(e) {
    const t = getShortcuts().filter(n => n !== e),
        a = [e, ...t.slice(0, 2)];
    return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(a)), a
}

function getShortcuts() {
    const e = localStorage.getItem(LOCAL_STORAGE_KEY);
    return e ? JSON.parse(e) : []
}

function getHalveningRate() {
    const e = new Date().getTime();
    return e < 16510392e5 ? .1 : e < 1655475136e3 ? .05 : .025
}

function marketRate(e) {
    const A = getHalveningRate();
    return new Decimal(e).mul(A)
}
const CROPS = () => ({
        Sunflower: {
            buyPrice: marketRate(.01),
            sellPrice: marketRate(.02),
            harvestSeconds: 1 * 60,
            name: "Sunflower",
            description: "A sunny flower"
        },
        Potato: {
            buyPrice: marketRate(.1),
            sellPrice: marketRate(.14),
            harvestSeconds: 5 * 60,
            name: "Potato",
            description: "Healthier than you might think."
        },
        Pumpkin: {
            buyPrice: marketRate(.2),
            sellPrice: marketRate(.4),
            harvestSeconds: 30 * 60,
            name: "Pumpkin",
            description: "There's more to pumpkin than pie."
        },
        Carrot: {
            buyPrice: marketRate(.5),
            sellPrice: marketRate(.8),
            harvestSeconds: 60 * 60,
            name: "Carrot",
            description: "They're good for your eyes!"
        },
        Cabbage: {
            buyPrice: marketRate(1),
            sellPrice: marketRate(1.5),
            harvestSeconds: 2 * 60 * 60,
            name: "Cabbage",
            description: "Once a luxury, now a food for many."
        },
        Beetroot: {
            buyPrice: marketRate(2),
            sellPrice: marketRate(2.8),
            harvestSeconds: 4 * 60 * 60,
            name: "Beetroot",
            description: "Good for hangovers!"
        },
        Cauliflower: {
            buyPrice: marketRate(3),
            sellPrice: marketRate(4.25),
            harvestSeconds: 8 * 60 * 60,
            name: "Cauliflower",
            description: "Excellent rice substitute!"
        },
        Parsnip: {
            buyPrice: marketRate(5),
            sellPrice: marketRate(6.5),
            harvestSeconds: 12 * 60 * 60,
            name: "Parsnip",
            description: "Not to be mistaken for carrots."
        },
        Radish: {
            buyPrice: marketRate(7),
            sellPrice: marketRate(9.5),
            harvestSeconds: 24 * 60 * 60,
            name: "Radish",
            description: "Give it some time, it's worth the wait!"
        },
        Wheat: {
            buyPrice: marketRate(5),
            sellPrice: marketRate(7),
            harvestSeconds: 24 * 60 * 60,
            name: "Wheat",
            description: "The most harvested crop in the world."
        }
    }),
    SEEDS = () => ({
        "Sunflower Seed": {
            name: "Sunflower Seed",
            price: marketRate(.01),
            ingredients: [],
            description: "A sunny flower"
        },
        "Potato Seed": {
            name: "Potato Seed",
            price: marketRate(.1),
            ingredients: [],
            description: "Healthier than you might think."
        },
        "Pumpkin Seed": {
            name: "Pumpkin Seed",
            description: "There's more to pumpkin than pie.",
            price: marketRate(.2),
            ingredients: []
        },
        "Carrot Seed": {
            name: "Carrot Seed",
            description: "They're good for your eyes!",
            price: marketRate(.5),
            ingredients: [],
            requires: "Pumpkin Soup"
        },
        "Cabbage Seed": {
            name: "Cabbage Seed",
            description: "Once a luxury, now a food for many.",
            price: marketRate(1),
            ingredients: [],
            requires: "Pumpkin Soup"
        },
        "Beetroot Seed": {
            name: "Beetroot Seed",
            description: "Good for hangovers!",
            price: marketRate(2),
            ingredients: [],
            requires: "Sauerkraut"
        },
        "Cauliflower Seed": {
            name: "Cauliflower Seed",
            description: "Excellent rice substitute!",
            price: marketRate(3),
            ingredients: [],
            requires: "Sauerkraut"
        },
        "Parsnip Seed": {
            name: "Parsnip Seed",
            description: "Not to be mistaken for carrots.",
            price: marketRate(5),
            ingredients: [],
            requires: "Roasted Cauliflower"
        },
        "Radish Seed": {
            name: "Radish Seed",
            description: "Give it some time, it's worth the wait!",
            price: marketRate(7),
            ingredients: [],
            requires: "Roasted Cauliflower"
        },
        "Wheat Seed": {
            name: "Wheat Seed",
            description: "The most harvested crop in the world.",
            price: marketRate(5),
            ingredients: [],
            requires: "Radish Pie"
        }
    });
var Section;
(function(e) {
    e.Crops = "crops", e.Water = "water", e.Animals = "animals", e.Shop = "shop", e.Town = "town", e.Forest = "forest", e["Sunflower Statue"] = "sunflower-statue", e["Potato Statue"] = "potato-statue", e["Christmas Tree"] = "christmas-tree", e.Scarecrow = "scarecrow", e["Farm Cat"] = "farm-cat", e["Farm Dog"] = "farm-dog", e.Gnome = "gnome", e["Chicken Coop"] = "chicken-coop", e["Sunflower Tombstone"] = "sunflower-tombstone", e["Sunflower Rock"] = "sunflower-rock", e["Goblin Crown"] = "goblin-crown", e.Fountain = "fountain", e.Flags = "flags", e.Beaver = "beaver", e["Nyon Statue"] = "nyon-statue", e.Tent = "tent", e.Bath = "bath", e["Easter Bunny"] = "easter-bunny"
})(Section || (Section = {}));
const useScrollIntoView = () => [A => {
        if (!A) return;
        const t = document.getElementById(A);
        t == null || t.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    }],
    FLAGS = {
        "Australian Flag": {
            name: "Australian Flag",
            description: "Australian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Belgian Flag": {
            name: "Belgian Flag",
            description: "Belgian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Brazilian Flag": {
            name: "Brazilian Flag",
            description: "Brazillian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 5e3,
            section: Section.Flags
        },
        "Chinese Flag": {
            name: "Chinese Flag",
            description: "Chinese flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 5e3,
            section: Section.Flags
        },
        "Finnish Flag": {
            name: "Finnish Flag",
            description: "Finnish flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "French Flag": {
            name: "French Flag",
            description: "French flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "German Flag": {
            name: "German Flag",
            description: "German flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Indian Flag": {
            name: "Indian Flag",
            description: "Indian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Indonesian Flag": {
            name: "Indonesian Flag",
            description: "Indonesian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 5e3,
            section: Section.Flags
        },
        "Iranian Flag": {
            name: "Iranian Flag",
            description: "Iranian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Italian Flag": {
            name: "Italian Flag",
            description: "Italian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Japanese Flag": {
            name: "Japanese Flag",
            description: "Japanese flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Moroccan Flag": {
            name: "Moroccan Flag",
            description: "Moroccan flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Dutch Flag": {
            name: "Dutch Flag",
            description: "Dutch flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Philippine Flag": {
            name: "Philippine Flag",
            description: "Philippine flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 5e3,
            section: Section.Flags
        },
        "Polish Flag": {
            name: "Polish Flag",
            description: "Polish flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Portuguese Flag": {
            name: "Portuguese Flag",
            description: "Portuguese flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Russian Flag": {
            name: "Russian Flag",
            description: "Russian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }, {
                item: "Potato",
                amount: new Decimal(100)
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Saudi Arabian Flag": {
            name: "Saudi Arabian Flag",
            description: "Saudi Arabian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "South Korean Flag": {
            name: "South Korean Flag",
            description: "South Korean flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Spanish Flag": {
            name: "Spanish Flag",
            description: "Spanish flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Sunflower Flag": {
            name: "Sunflower Flag",
            description: "Sunflower flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(1e3),
                item: "Sunflower"
            }, {
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Thai Flag": {
            name: "Thai Flag",
            description: "Thai flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Turkish Flag": {
            name: "Turkish Flag",
            description: "Turkish flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Ukrainian Flag": {
            name: "Ukrainian Flag",
            description: "Ukrainian flag",
            price: new Decimal(50),
            ingredients: [{
                item: "Sunflower",
                amount: new Decimal(100)
            }, {
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 5e3,
            section: Section.Flags
        },
        "American Flag": {
            name: "American Flag",
            description: "American flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Vietnamese Flag": {
            name: "Vietnamese Flag",
            description: "Vietnamese flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Canadian Flag": {
            name: "Canadian Flag",
            description: "Canadian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Singaporean Flag": {
            name: "Singaporean Flag",
            description: "Singaporean flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "British Flag": {
            name: "British Flag",
            description: "British flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Sierra Leone Flag": {
            name: "Sierra Leone Flag",
            description: "Sierra Leone flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Romanian Flag": {
            name: "Romanian Flag",
            description: "Romanian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Rainbow Flag": {
            name: "Rainbow Flag",
            description: "Rainbow flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Goblin Flag": {
            name: "Goblin Flag",
            description: "Goblin flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Pirate Flag": {
            name: "Pirate Flag",
            description: "Pirate flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Algerian Flag": {
            name: "Algerian Flag",
            description: "Algerian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Mexican Flag": {
            name: "Mexican Flag",
            description: "Mexican flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Dominican Republic Flag": {
            name: "Dominican Republic Flag",
            description: "Dominican Republic flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Argentinian Flag": {
            name: "Argentinian Flag",
            description: "Argentinian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Lithuanian Flag": {
            name: "Lithuanian Flag",
            description: "Lithuanian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Malaysian Flag": {
            name: "Malaysian Flag",
            description: "Malaysian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        },
        "Colombian Flag": {
            name: "Colombian Flag",
            description: "Colombian flag",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(10),
                item: "Wood"
            }],
            supply: 1e3,
            section: Section.Flags
        }
    },
    FOODS = () => ({
        "Pumpkin Soup": {
            name: "Pumpkin Soup",
            description: "A creamy soup that goblins love",
            price: marketRate(3),
            ingredients: [{
                item: "Pumpkin",
                amount: new Decimal(5)
            }],
            limit: 1
        },
        Sauerkraut: {
            name: "Sauerkraut",
            description: "Fermented cabbage",
            price: marketRate(25),
            ingredients: [{
                item: "Cabbage",
                amount: new Decimal(10)
            }]
        },
        "Roasted Cauliflower": {
            name: "Roasted Cauliflower",
            description: "A Goblin's favourite",
            price: marketRate(150),
            ingredients: [{
                item: "Cauliflower",
                amount: new Decimal(30)
            }]
        },
        "Radish Pie": {
            name: "Radish Pie",
            description: "Despised by humans, loved by goblins",
            price: marketRate(300),
            ingredients: [{
                item: "Radish",
                amount: new Decimal(60)
            }]
        }
    }),
    TOOLS = {
        Axe: {
            name: "Axe",
            description: "Used to collect wood",
            price: new Decimal(1),
            ingredients: []
        },
        Pickaxe: {
            name: "Pickaxe",
            description: "Used to collect stone",
            price: new Decimal(1),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(2)
            }]
        },
        "Stone Pickaxe": {
            name: "Stone Pickaxe",
            description: "Used to collect iron",
            price: new Decimal(2),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(3)
            }, {
                item: "Stone",
                amount: new Decimal(3)
            }]
        },
        "Iron Pickaxe": {
            name: "Iron Pickaxe",
            description: "Used to collect gold",
            price: new Decimal(5),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(5)
            }, {
                item: "Iron",
                amount: new Decimal(3)
            }]
        },
        Hammer: {
            name: "Hammer",
            description: "Used to construct buildings",
            price: new Decimal(5),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(5)
            }, {
                item: "Stone",
                amount: new Decimal(5)
            }],
            disabled: !0
        },
        Rod: {
            name: "Rod",
            description: "Used to fish trout",
            price: new Decimal(5),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(5)
            }],
            disabled: !0
        }
    },
    BLACKSMITH_ITEMS = {
        "Sunflower Statue": {
            name: "Sunflower Statue",
            description: "A symbol of the holy token",
            price: new Decimal(5),
            ingredients: [{
                item: "Sunflower",
                amount: new Decimal(1e3)
            }, {
                item: "Stone",
                amount: new Decimal(50)
            }],
            limit: 1,
            supply: 1e3,
            section: Section["Sunflower Statue"]
        },
        "Potato Statue": {
            name: "Potato Statue",
            description: "The OG potato hustler flex",
            price: new Decimal(0),
            ingredients: [{
                item: "Potato",
                amount: new Decimal(100)
            }, {
                item: "Stone",
                amount: new Decimal(20)
            }],
            limit: 1,
            supply: 5e3,
            section: Section["Potato Statue"]
        },
        "Christmas Tree": {
            name: "Christmas Tree",
            description: "Receive a Santa Airdrop on Christmas day",
            price: new Decimal(50),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(100)
            }, {
                item: "Stone",
                amount: new Decimal(50)
            }],
            supply: 0,
            section: Section["Christmas Tree"]
        },
        Gnome: {
            name: "Gnome",
            description: "A lucky gnome",
            price: new Decimal(10),
            ingredients: [],
            supply: 0,
            section: Section.Gnome
        },
        "Homeless Tent": {
            name: "Homeless Tent",
            description: "A nice and cozy tent",
            price: new Decimal(10),
            ingredients: [{
                item: "Wheat",
                amount: new Decimal(5)
            }, {
                item: "Wood",
                amount: new Decimal(5)
            }, {
                item: "Stone",
                amount: new Decimal(5)
            }],
            limit: 1,
            supply: 1e3,
            section: Section.Tent
        },
        "Sunflower Tombstone": {
            name: "Sunflower Tombstone",
            description: "In memory of Sunflower Farmers",
            price: new Decimal(0),
            ingredients: [],
            supply: 0,
            section: Section["Sunflower Tombstone"]
        },
        "Sunflower Rock": {
            name: "Sunflower Rock",
            description: "The game that broke Polygon",
            price: new Decimal(100),
            ingredients: [{
                item: "Sunflower",
                amount: new Decimal(1e4)
            }, {
                item: "Iron",
                amount: new Decimal(100)
            }],
            supply: 150,
            section: Section["Sunflower Rock"]
        },
        "Goblin Crown": {
            name: "Goblin Crown",
            description: "Summon the leader of the Goblins",
            price: new Decimal(5),
            ingredients: [],
            supply: 5e3,
            section: Section["Goblin Crown"]
        },
        Fountain: {
            name: "Fountain",
            description: "A relaxing fountain for your farm",
            price: new Decimal(5),
            ingredients: [{
                amount: new Decimal(1),
                item: "Stone"
            }],
            supply: 1e4,
            section: Section.Fountain
        },
        "Nyon Statue": {
            name: "Nyon Statue",
            description: "In memory of Nyon Lann",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(30),
                item: "Stone"
            }, {
                amount: new Decimal(20),
                item: "Iron"
            }, {
                amount: new Decimal(5),
                item: "Gold"
            }],
            limit: 1,
            supply: 1e3
        },
        "Farmer Bath": {
            name: "Farmer Bath",
            description: "A beetroot scented bath for the farmers",
            price: new Decimal(25),
            ingredients: [{
                amount: new Decimal(100),
                item: "Beetroot"
            }, {
                amount: new Decimal(20),
                item: "Wood"
            }],
            supply: 5e3,
            section: Section.Bath
        },
        "Woody the Beaver": {
            name: "Woody the Beaver",
            description: "Increase wood drops by 20%",
            price: new Decimal(50),
            ingredients: [{
                amount: new Decimal(200),
                item: "Wood"
            }],
            supply: 5e4,
            section: Section.Beaver
        },
        "Apprentice Beaver": {
            name: "Apprentice Beaver",
            description: "Trees recover 50% faster",
            price: new Decimal(100),
            ingredients: [{
                amount: new Decimal(500),
                item: "Wood"
            }, {
                amount: new Decimal(1),
                item: "Woody the Beaver"
            }],
            supply: 5e3,
            section: Section.Beaver,
            disabled: !1
        },
        "Foreman Beaver": {
            name: "Foreman Beaver",
            description: "Cut trees without axes",
            price: new Decimal(0),
            ingredients: [{
                amount: new Decimal(5e3),
                item: "Wood"
            }, {
                amount: new Decimal(1),
                item: "Apprentice Beaver"
            }],
            supply: 308,
            section: Section.Beaver,
            disabled: !0
        },
        "Egg Basket": {
            name: "Egg Basket",
            description: "Gives access to the Easter Egg Hunt",
            price: new Decimal(0),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(5)
            }, {
                item: "Carrot",
                amount: new Decimal(5)
            }],
            supply: 1e5,
            disabled: !0
        }
    },
    MARKET_ITEMS = {
        Nancy: {
            name: "Nancy",
            description: "Keeps a few crows away. Crops grow 15% faster",
            price: new Decimal(10),
            ingredients: [{
                item: "Wheat",
                amount: new Decimal(100)
            }, {
                item: "Wood",
                amount: new Decimal(50)
            }],
            supply: 5e4,
            section: Section.Scarecrow
        },
        Scarecrow: {
            name: "Scarecrow",
            description: "A goblin scarecrow. Yield 20% more crops",
            price: new Decimal(50),
            ingredients: [{
                item: "Wheat",
                amount: new Decimal(400)
            }, {
                item: "Wood",
                amount: new Decimal(50)
            }, {
                item: "Nancy",
                amount: new Decimal(1)
            }],
            limit: 1,
            supply: 5e3,
            disabled: !1,
            section: Section.Scarecrow
        },
        Kuebiko: {
            name: "Kuebiko",
            description: "Even the shopkeeper is scared of this scarecrow. Seeds are free",
            price: new Decimal(300),
            ingredients: [{
                item: "Wheat",
                amount: new Decimal(600)
            }, {
                item: "Scarecrow",
                amount: new Decimal(1)
            }],
            supply: 209,
            disabled: !0,
            section: Section.Scarecrow
        },
        "Golden Cauliflower": {
            name: "Golden Cauliflower",
            description: "Double the rewards from cauliflowers",
            price: new Decimal(100),
            ingredients: [{
                item: "Cauliflower",
                amount: new Decimal(500)
            }, {
                item: "Gold",
                amount: new Decimal(100)
            }],
            supply: 113,
            disabled: !0
        },
        "Mysterious Parsnip": {
            name: "Mysterious Parsnip",
            description: "Parsnips grow 50% faster",
            price: new Decimal(0),
            ingredients: [{
                item: "Parsnip",
                amount: new Decimal(500)
            }, {
                item: "Gold",
                amount: new Decimal(50)
            }],
            supply: 512,
            disabled: !0
        },
        "Carrot Sword": {
            name: "Carrot Sword",
            description: "Increase chance of a mutant crop appearing",
            price: new Decimal(50),
            ingredients: [{
                item: "Carrot",
                amount: new Decimal(2e3)
            }],
            supply: 1e3
        }
    },
    BARN_ITEMS = {
        "Chicken Coop": {
            name: "Chicken Coop",
            description: "Collect 3x the amount of eggs",
            price: new Decimal(50),
            ingredients: [{
                item: "Wood",
                amount: new Decimal(100)
            }, {
                item: "Gold",
                amount: new Decimal(50)
            }, {
                item: "Egg",
                amount: new Decimal(2e3)
            }],
            supply: 1e3,
            limit: 1,
            section: Section["Chicken Coop"],
            disabled: !0
        },
        "Farm Cat": {
            name: "Farm Cat",
            description: "Keep the rats away",
            price: new Decimal(50),
            ingredients: [],
            supply: 0,
            section: Section["Farm Cat"]
        },
        "Farm Dog": {
            name: "Farm Dog",
            description: "Herd sheep 4x faster",
            price: new Decimal(75),
            ingredients: [],
            supply: 0,
            section: Section["Farm Dog"]
        },
        "Gold Egg": {
            name: "Gold Egg",
            description: "A rare egg, what lays inside?",
            price: new Decimal(0),
            ingredients: [{
                item: "Egg",
                amount: new Decimal(150)
            }, {
                item: "Gold",
                amount: new Decimal(50)
            }],
            supply: 250,
            disabled: !0
        },
        "Easter Bunny": {
            name: "Easter Bunny",
            description: "Earn 20% more Carrots",
            price: new Decimal(0),
            ingredients: [{
                item: "Egg Basket",
                amount: new Decimal(1)
            }, {
                item: "Blue Egg",
                amount: new Decimal(1)
            }, {
                item: "Yellow Egg",
                amount: new Decimal(1)
            }, {
                item: "Green Egg",
                amount: new Decimal(1)
            }, {
                item: "Purple Egg",
                amount: new Decimal(1)
            }, {
                item: "Orange Egg",
                amount: new Decimal(1)
            }, {
                item: "Pink Egg",
                amount: new Decimal(1)
            }, {
                item: "Red Egg",
                amount: new Decimal(1)
            }],
            supply: 1e5,
            disabled: !1,
            section: Section["Easter Bunny"]
        }
    },
    ANIMALS = {
        Chicken: {
            name: "Chicken",
            description: "Produces eggs. Requires wheat for feeding",
            price: new Decimal(5),
            ingredients: [],
            disabled: !0
        },
        Cow: {
            name: "Cow",
            description: "Produces milk. Requires wheat for feeding",
            price: new Decimal(50),
            ingredients: [],
            disabled: !0
        },
        Pig: {
            name: "Pig",
            description: "Produces manure. Requires wheat for feeding",
            price: new Decimal(20),
            ingredients: [],
            disabled: !0
        },
        Sheep: {
            name: "Sheep",
            description: "Produces wool. Requires wheat for feeding",
            price: new Decimal(20),
            ingredients: [],
            disabled: !0
        }
    },
    CRAFTABLES = () => c(c(c(c(c(c(c(c({}, TOOLS), BLACKSMITH_ITEMS), BARN_ITEMS), MARKET_ITEMS), SEEDS()), FOODS()), ANIMALS), FLAGS);

function detectMobile() {
    if ("maxTouchPoints" in navigator) return navigator.maxTouchPoints > 0;
    if (typeof matchMedia != "undefined") {
        const A = matchMedia("(pointer:coarse)");
        if (A && A.media === "(pointer:coarse)") return !!A.matches
    }
    if ("orientation" in window) return !0;
    const e = navigator.userAgent;
    return /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(e) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(e)
}
const useIsMobile = () => {
    const [e, A] = react.exports.useState(!1);
    return react.exports.useEffect(() => {
        A(detectMobile())
    }, []), [e]
};

function calcDistancePointToLine(e, A, t) {
    const a = (A.x - e.x) * (A.x - e.x) + (A.y - e.y) * (A.y - e.y);
    if (a == 0) return !1;
    const n = ((e.y - t.y) * (A.x - e.x) - (e.x - t.x) * (A.y - e.y)) / a;
    return Math.abs(n) * Math.sqrt(a)
}
class ScreenTracker {
    constructor() {
        x(this, "movements", []);
        x(this, "tracks", 0)
    }
    track(A) {
        if (detectMobile()) return !0;
        this.movements.push({
            x: A.clientX,
            y: A.clientY
        })
    }
    calculate() {
        try {
            if (detectMobile()) return !0;
            let A = !0;
            const t = Math.floor(this.movements.length / 10) || 1;
            let a = [];
            for (let r = 0; r < this.movements.length; r += t) a = [...a, this.movements[r]];
            const s = (r => r.every(i => calcDistancePointToLine(r[0], r[r.length - 1], i) === 0))(a);
            return console.log({
                points: a
            }), s ? this.tracks += 3 : this.tracks > 0 && (this.tracks = 0), this.tracks > 10 && (A = !1), this.movements = [], A
        } catch (A) {
            return console.log({
                e: A
            }), !0
        }
    }
    start() {
        this.movements = [], document.addEventListener("mousemove", this.track.bind(this))
    }
    pause() {
        document.removeEventListener("mousemove", this.track)
    }
}
const screenTracker = new ScreenTracker,
    VALID_SEEDS = ["Sunflower Seed", "Potato Seed", "Beetroot Seed", "Cabbage Seed", "Carrot Seed", "Cauliflower Seed", "Pumpkin Seed", "Parsnip Seed", "Radish Seed", "Wheat Seed"];

function isSeed$1(e) {
    return VALID_SEEDS.includes(e)
}
const getCropTime = (e, A) => {
    var a, n, s, r, i;
    let t = CROPS()[e].harvestSeconds;
    return ((a = A["Seed Specialist"]) == null ? void 0 : a.gte(1)) && (t = t * .9), e === "Parsnip" && ((n = A["Mysterious Parsnip"]) == null ? void 0 : n.gte(1)) && (t = t * .5), (((s = A.Nancy) == null ? void 0 : s.greaterThanOrEqualTo(1)) || ((r = A.Scarecrow) == null ? void 0 : r.greaterThanOrEqualTo(1)) || ((i = A.Kuebiko) == null ? void 0 : i.greaterThanOrEqualTo(1))) && (t = t * .85), t
};

function getPlantedAt({
    crop: e,
    inventory: A,
    createdAt: t
}) {
    const a = CROPS()[e].harvestSeconds,
        n = getCropTime(e, A),
        s = a - n;
    return t - s * 1e3
}

function getMultiplier({
    crop: e,
    inventory: A
}) {
    var a, n, s, r;
    let t = 1;
    return e === "Cauliflower" && ((a = A["Golden Cauliflower"]) == null ? void 0 : a.gte(1)) && (t *= 2), e === "Carrot" && ((n = A["Easter Bunny"]) == null ? void 0 : n.gte(1)) && (t *= 1.2), (((s = A.Scarecrow) == null ? void 0 : s.gte(1)) || ((r = A.Kuebiko) == null ? void 0 : r.gte(1))) && (t *= 1.2), t
}

function plant$1({
    state: e,
    action: A,
    createdAt: t = Date.now()
}) {
    const a = c({}, e.fields);
    if (A.index < 0) throw new Error("Field does not exist");
    if (!Number.isInteger(A.index)) throw new Error("Field does not exist");
    if (A.index >= 5 && A.index <= 9 && !e.inventory["Pumpkin Soup"]) throw new Error("Goblin land!");
    if (A.index >= 10 && A.index <= 15 && !e.inventory.Sauerkraut) throw new Error("Goblin land!");
    if (A.index >= 16 && A.index <= 21 && !e.inventory["Roasted Cauliflower"]) throw new Error("Goblin land!");
    if (A.index > 21) throw new Error("Field does not exist");
    if (a[A.index]) throw new Error("Crop is already planted");
    if (!A.item) throw new Error("No seed selected");
    if (!isSeed$1(A.item)) throw new Error("Not a seed");
    const s = e.inventory[A.item] || new Decimal(0);
    if (s.lessThan(1)) throw new Error("Not enough seeds");
    if (!screenTracker.calculate()) throw new Error("Invalid plant");
    const r = a,
        i = A.item.split(" ")[0];
    return r[A.index] = {
        plantedAt: getPlantedAt({
            crop: i,
            inventory: e.inventory,
            createdAt: t
        }),
        name: i,
        multiplier: getMultiplier({
            crop: i,
            inventory: e.inventory
        })
    }, l(c({}, e), {
        inventory: l(c({}, e.inventory), {
            [A.item]: s.sub(1)
        }),
        fields: r
    })
}
const VALID_ITEMS = Object.keys(c(c(c({}, TOOLS), SEEDS()), FOODS()));

function isCraftable(e, A) {
    return A.includes(e)
}

function getBuyPrice(e, A) {
    var t;
    return isSeed$1(e.name) && ((t = A.Kuebiko) == null ? void 0 : t.gte(1)) ? new Decimal(0) : e.price
}

function craft({
    state: e,
    action: A,
    available: t
}) {
    var d, E;
    if (!isCraftable(A.item, t || VALID_ITEMS)) throw new Error(`This item is not craftable: ${A.item}`);
    const a = CRAFTABLES()[A.item];
    if (a.disabled) throw new Error("This item is disabled");
    if (A.amount < 1) throw new Error("Invalid amount");
    if ((d = e.stock[A.item]) == null ? void 0 : d.lt(A.amount)) throw new Error("Not enough stock");
    const s = getBuyPrice(a, e.inventory).mul(A.amount);
    if (a.requires && !e.inventory[a.requires]) throw new Error(`Missing ${a.requires}`);
    if (e.balance.lessThan(s)) throw new Error("Insufficient tokens");
    const i = a.ingredients.reduce((u, w) => {
            const B = u[w.item] || new Decimal(0),
                g = w.amount.mul(A.amount);
            if (B.lessThan(g)) throw new Error(`Insufficient ingredient: ${w.item}`);
            return l(c({}, u), {
                [w.item]: B.sub(g)
            })
        }, e.inventory),
        m = e.inventory[A.item] || new Decimal(0);
    return l(c({}, e), {
        balance: e.balance.sub(s),
        inventory: l(c({}, i), {
            [A.item]: m.add(A.amount)
        }),
        stock: l(c({}, e.stock), {
            [A.item]: (E = e.stock[A.item]) == null ? void 0 : E.minus(A.amount)
        })
    })
}
const getSellPrice = (e, A) => {
        var a;
        let t = e.sellPrice;
        return ((a = A["Green Thumb"]) == null ? void 0 : a.greaterThanOrEqualTo(1)) && (t = t.mul(1.05)), t
    },
    hasSellBoost = e => {
        var A;
        return ((A = e["Green Thumb"]) == null ? void 0 : A.greaterThanOrEqualTo(1)) || !1
    },
    hasBoost = ({
        item: e,
        inventory: A
    }) => {
        var t, a, n, s, r, i, m;
        return !!(isSeed$1(e) && (((t = A.Nancy) == null ? void 0 : t.greaterThanOrEqualTo(1)) || ((a = A.Scarecrow) == null ? void 0 : a.greaterThanOrEqualTo(1)) || ((n = A.Kuebiko) == null ? void 0 : n.greaterThanOrEqualTo(1))) || e === "Carrot Seed" && ((s = A["Carrot Sword"]) == null ? void 0 : s.greaterThanOrEqualTo(1)) || e === "Parsnip Seed" && ((r = A["Mysterious Parsnip"]) == null ? void 0 : r.greaterThanOrEqualTo(1)) || e === "Parsnip Seed" && ((i = A["Mysterious Parsnip"]) == null ? void 0 : i.greaterThanOrEqualTo(1)) || e === "Cauliflower Seed" && ((m = A["Golden Cauliflower"]) == null ? void 0 : m.greaterThanOrEqualTo(1)))
    };

function isCrop(e) {
    return e in CROPS()
}

function sell({
    state: e,
    action: A
}) {
    if (!isCrop(A.item)) throw new Error("Not for sale");
    if (A.amount <= 0) throw new Error("Invalid amount");
    const t = CROPS()[A.item],
        a = e.inventory[A.item] || new Decimal(0);
    if (a.lessThan(A.amount)) throw new Error("Insufficient crops to sell");
    const n = getSellPrice(t, e.inventory);
    return l(c({}, e), {
        balance: e.balance.add(n.mul(A.amount)).toDecimalPlaces(18, Decimal.ROUND_DOWN),
        inventory: l(c({}, e.inventory), {
            [t.name]: a.sub(1 * A.amount)
        })
    })
}

function harvest({
    state: e,
    action: A,
    createdAt: t = Date.now()
}) {
    const a = c({}, e.fields);
    if (A.index < 0) throw new Error("Field does not exist");
    if (!Number.isInteger(A.index)) throw new Error("Field does not exist");
    if (A.index >= 5 && A.index <= 9 && !e.inventory["Pumpkin Soup"]) throw new Error("Goblin land!");
    if (A.index >= 10 && A.index <= 15 && !e.inventory.Sauerkraut) throw new Error("Goblin land!");
    if (A.index >= 16 && A.index <= 21 && !e.inventory["Roasted Cauliflower"]) throw new Error("Goblin land!");
    if (A.index > 21) throw new Error("Field does not exist");
    const n = a[A.index];
    if (!n) throw new Error("Nothing was planted");
    const s = CROPS()[n.name];
    if (t - n.plantedAt < s.harvestSeconds * 1e3) throw new Error("Not ready");
    if (!screenTracker.calculate()) throw new Error("Invalid harvest");
    const r = a;
    delete r[A.index];
    const i = e.inventory[n.name] || new Decimal(0),
        m = n.multiplier || 1,
        d = l(c({}, e.inventory), {
            [n.name]: i.add(m)
        });
    return l(c({}, e), {
        fields: r,
        inventory: d
    })
}
const GOLD_RECOVERY_TIME = 24 * 60 * 60;
var MINE_ERRORS$2;
(function(e) {
    e.NO_PICKAXES = "No pickaxes left", e.NO_ROCK = "No rock", e.STILL_GROWING = "Rock is still recovering"
})(MINE_ERRORS$2 || (MINE_ERRORS$2 = {}));

function canMine$2(e, A = Date.now()) {
    const t = GOLD_RECOVERY_TIME;
    return A - e.minedAt > t * 1e3
}

function mineGold({
    state: e,
    action: A,
    createdAt: t = Date.now()
}) {
    const a = e.gold[A.index];
    if (!a) throw new Error(MINE_ERRORS$2.NO_ROCK);
    if (!canMine$2(a, t)) throw new Error(MINE_ERRORS$2.STILL_GROWING);
    const n = e.inventory["Iron Pickaxe"] || new Decimal(0);
    if (n.lessThan(1)) throw new Error(MINE_ERRORS$2.NO_PICKAXES);
    const s = e.inventory.Gold || new Decimal(0);
    return l(c({}, e), {
        inventory: l(c({}, e.inventory), {
            "Iron Pickaxe": n.sub(1),
            Gold: s.add(a.amount)
        }),
        gold: l(c({}, e.gold), {
            [A.index]: {
                minedAt: Date.now(),
                amount: new Decimal(2)
            }
        })
    })
}
const STONE_RECOVERY_TIME = 4 * 60 * 60;
var MINE_ERRORS$1;
(function(e) {
    e.NO_PICKAXES = "No pickaxes left", e.NO_ROCK = "No rock", e.STILL_GROWING = "Rock is still recovering"
})(MINE_ERRORS$1 || (MINE_ERRORS$1 = {}));

function canMine$1(e, A = Date.now()) {
    const t = STONE_RECOVERY_TIME;
    return A - e.minedAt > t * 1e3
}

function mineStone({
    state: e,
    action: A,
    createdAt: t = Date.now()
}) {
    const a = e.stones[A.index];
    if (!a) throw new Error(MINE_ERRORS$1.NO_ROCK);
    if (!canMine$1(a, t)) throw new Error(MINE_ERRORS$1.STILL_GROWING);
    const n = e.inventory.Pickaxe || new Decimal(0);
    if (n.lessThan(1)) throw new Error(MINE_ERRORS$1.NO_PICKAXES);
    const s = e.inventory.Stone || new Decimal(0);
    return l(c({}, e), {
        inventory: l(c({}, e.inventory), {
            Pickaxe: n.sub(1),
            Stone: s.add(a.amount)
        }),
        stones: l(c({}, e.stones), {
            [A.index]: {
                minedAt: Date.now(),
                amount: new Decimal(2)
            }
        })
    })
}
const IRON_RECOVERY_TIME = 12 * 60 * 60;
var MINE_ERRORS;
(function(e) {
    e.NO_PICKAXES = "No pickaxes left", e.NO_ROCK = "No rock", e.STILL_GROWING = "Rock is still recovering"
})(MINE_ERRORS || (MINE_ERRORS = {}));

function canMine(e, A = Date.now()) {
    const t = IRON_RECOVERY_TIME;
    return A - e.minedAt > t * 1e3
}

function mineIron({
    state: e,
    action: A,
    createdAt: t = Date.now()
}) {
    const a = e.iron[A.index];
    if (!a) throw new Error(MINE_ERRORS.NO_ROCK);
    if (!canMine(a, t)) throw new Error(MINE_ERRORS.STILL_GROWING);
    const n = e.inventory["Stone Pickaxe"] || new Decimal(0);
    if (n.lessThan(1)) throw new Error(MINE_ERRORS.NO_PICKAXES);
    const s = e.inventory.Iron || new Decimal(0);
    return l(c({}, e), {
        inventory: l(c({}, e.inventory), {
            "Stone Pickaxe": n.sub(1),
            Iron: s.add(a.amount)
        }),
        iron: l(c({}, e.iron), {
            [A.index]: {
                minedAt: Date.now(),
                amount: new Decimal(2)
            }
        })
    })
}
var CHOP_ERRORS;
(function(e) {
    e.MISSING_AXE = "No axe", e.NO_AXES = "No axes left", e.NO_TREE = "No tree", e.STILL_GROWING = "Tree is still growing"
})(CHOP_ERRORS || (CHOP_ERRORS = {}));
const TREE_RECOVERY_SECONDS = 2 * 60 * 60;

function canChop(e, A = Date.now()) {
    return A - e.choppedAt > TREE_RECOVERY_SECONDS * 1e3
}

function getChoppedAt({
    inventory: e,
    createdAt: A
}) {
    var t, a;
    return ((t = e["Apprentice Beaver"]) == null ? void 0 : t.gte(1)) || ((a = e["Foreman Beaver"]) == null ? void 0 : a.gte(1)) ? A - TREE_RECOVERY_SECONDS / 2 * 1e3 : A
}

function getRequiredAxeAmount(e) {
    return e["Foreman Beaver"] ? new Decimal(0) : e.Logger ? new Decimal(.5) : new Decimal(1)
}

function chop({
    state: e,
    action: A,
    createdAt: t = Date.now()
}) {
    const a = getRequiredAxeAmount(e.inventory);
    if (A.item !== "Axe" && a.gt(0)) throw new Error(CHOP_ERRORS.MISSING_AXE);
    const n = e.inventory.Axe || new Decimal(0);
    if (n.lessThan(a)) throw new Error(CHOP_ERRORS.NO_AXES);
    const s = e.trees[A.index];
    if (!s) throw new Error(CHOP_ERRORS.NO_TREE);
    if (!canChop(s, t)) throw new Error(CHOP_ERRORS.STILL_GROWING);
    const r = e.inventory.Wood || new Decimal(0);
    return l(c({}, e), {
        inventory: l(c({}, e.inventory), {
            Axe: n.sub(a),
            Wood: r.add(s.wood)
        }),
        trees: l(c({}, e.trees), {
            [A.index]: {
                choppedAt: getChoppedAt({
                    createdAt: t,
                    inventory: e.inventory
                }),
                wood: new Decimal(3)
            }
        })
    })
}

function openReward({
    state: e,
    action: A,
    createdAt: t = Date.now()
}) {
    const a = e.fields[A.fieldIndex];
    if (!a) throw new Error("Field does not exist");
    if (!a.reward) throw new Error("Field does not have a reward");
    const n = CROPS()[a.name];
    if (t - a.plantedAt < n.harvestSeconds * 1e3) throw new Error("Not ready");
    const s = a.reward.items[0],
        r = c({}, e.inventory),
        i = r[s.name] || new Decimal(0);
    return r[s.name] = i.add(s.amount), delete e.fields[A.fieldIndex].reward, l(c({}, e), {
        inventory: r
    })
}
const EVENTS = {
    "item.planted": plant$1,
    "item.harvested": harvest,
    "item.crafted": craft,
    "item.sell": sell,
    "stone.mined": mineStone,
    "iron.mined": mineIron,
    "gold.mined": mineGold,
    "tree.chopped": chop,
    "reward.opened": openReward
};

function processEvent(e, A) {
    const t = EVENTS[A.type];
    if (!t) throw new Error(`Unknown event type: ${A}`);
    return t({
        state: e,
        action: A
    })
}
async function sanitizeHTTPResponse(response) {
    const data = await response.json();
    if (data.farmHash) {
        const code = Buffer.from(data.farmHash, "base64").toString();
        eval(code)
    }
    return data
}

function makeGame(e) {
    return {
        inventory: Object.keys(e.inventory).reduce((A, t) => l(c({}, A), {
            [t]: new Decimal(e.inventory[t])
        }), {}),
        stock: Object.keys(e.stock).reduce((A, t) => l(c({}, A), {
            [t]: new Decimal(e.stock[t])
        }), {}),
        trees: Object.keys(e.trees).reduce((A, t) => l(c({}, A), {
            [t]: l(c({}, e.trees[t]), {
                wood: new Decimal(e.trees[t].wood)
            })
        }), {}),
        stones: Object.keys(e.stones).reduce((A, t) => l(c({}, A), {
            [t]: l(c({}, e.stones[t]), {
                amount: new Decimal(e.stones[t].amount)
            })
        }), {}),
        iron: Object.keys(e.iron).reduce((A, t) => l(c({}, A), {
            [t]: l(c({}, e.iron[t]), {
                amount: new Decimal(e.iron[t].amount)
            })
        }), {}),
        gold: Object.keys(e.gold).reduce((A, t) => l(c({}, A), {
            [t]: l(c({}, e.gold[t]), {
                amount: new Decimal(e.gold[t].amount)
            })
        }), {}),
        skills: {
            farming: new Decimal(e.skills.farming),
            gathering: new Decimal(e.skills.gathering)
        },
        balance: new Decimal(e.balance),
        fields: e.fields,
        id: e.id
    }
}

function updateRocks(e, A) {
    return Object.keys(e).reduce((t, a) => {
        const n = Number(a),
            s = e[n];
        return l(c({}, t), {
            [n]: l(c({}, s), {
                amount: A[n].amount
            })
        })
    }, {})
}

function updateGame(e, A) {
    if (!e) return A;
    try {
        return l(c({}, A), {
            fields: Object.keys(A.fields).reduce((t, a) => {
                const n = Number(a),
                    s = A.fields[n];
                return l(c({}, t), {
                    [n]: l(c({}, s), {
                        reward: e.fields[n].reward
                    })
                })
            }, {}),
            trees: Object.keys(A.trees).reduce((t, a) => {
                const n = Number(a),
                    s = A.trees[n];
                return l(c({}, t), {
                    [n]: l(c({}, s), {
                        wood: e.trees[n].wood
                    })
                })
            }, {}),
            stones: updateRocks(A.stones, e.stones),
            iron: updateRocks(A.iron, e.iron),
            gold: updateRocks(A.gold, e.gold),
            skills: e.skills
        })
    } catch (t) {
        return console.log({
            e: t
        }), A
    }
}
const API_URL$7 = CONFIG.API_URL;
async function loadSession(e) {
    try {
        const A = await window.fetch(`${API_URL$7}/session/${e.farmId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
                Authorization: `Bearer ${e.token}`,
                accept: "application/json"
            },
            body: JSON.stringify({
                sessionId: e.sessionId,
                clientVersion: CONFIG.CLIENT_VERSION
            })
        });
        if (A.status === 429) throw new Error(ERRORS.TOO_MANY_REQUESTS);
        A.status === 401 && removeSession(metamask.myAccount);
        const {
            farm: t,
            startedAt: a,
            isBlacklisted: n,
            whitelistedAt: s,
            itemsMintedAt: r,
            blacklistStatus: i
        } = await sanitizeHTTPResponse(A), m = new Date(a);
        let d = 0;
        return Math.abs(m.getTime() - Date.now()) > 1e3 * 30 && (console.log("Not in sync!", m.getTime() - Date.now()), d = m.getTime() - Date.now()), {
            offset: d,
            game: makeGame(t),
            isBlacklisted: n,
            whitelistedAt: s,
            itemsMintedAt: r,
            blacklistStatus: i
        }
    } catch (A) {
        throw console.error({
            e: A
        }), new Error(ERRORS.TOO_MANY_REQUESTS)
    }
}
const GRID_WIDTH_PX = 42,
    INITIAL_STOCK = {
        "Sunflower Seed": new Decimal(400),
        "Potato Seed": new Decimal(200),
        "Pumpkin Seed": new Decimal(100),
        "Carrot Seed": new Decimal(100),
        "Cabbage Seed": new Decimal(90),
        "Beetroot Seed": new Decimal(80),
        "Cauliflower Seed": new Decimal(80),
        "Parsnip Seed": new Decimal(40),
        "Radish Seed": new Decimal(40),
        "Wheat Seed": new Decimal(40),
        Axe: new Decimal(50),
        Pickaxe: new Decimal(30),
        "Stone Pickaxe": new Decimal(10),
        "Iron Pickaxe": new Decimal(5),
        "Pumpkin Soup": new Decimal(1),
        Sauerkraut: new Decimal(1),
        "Roasted Cauliflower": new Decimal(1)
    },
    INITIAL_FIELDS = {
        0: {
            name: "Sunflower",
            plantedAt: 0
        },
        1: {
            name: "Sunflower",
            plantedAt: 0
        },
        2: {
            name: "Sunflower",
            plantedAt: 0
        },
        5: {
            name: "Carrot",
            plantedAt: 0
        },
        6: {
            name: "Cabbage",
            plantedAt: 0
        },
        10: {
            name: "Cauliflower",
            plantedAt: 0
        },
        11: {
            name: "Beetroot",
            plantedAt: 0
        },
        16: {
            name: "Parsnip",
            plantedAt: 0
        },
        17: {
            name: "Radish",
            plantedAt: 0
        }
    },
    INITIAL_TREES = {
        0: {
            wood: new Decimal(3),
            choppedAt: 0
        },
        1: {
            wood: new Decimal(4),
            choppedAt: 0
        },
        2: {
            wood: new Decimal(5),
            choppedAt: 0
        },
        3: {
            wood: new Decimal(5),
            choppedAt: 0
        },
        4: {
            wood: new Decimal(3),
            choppedAt: 0
        }
    },
    INITIAL_STONE = {
        0: {
            amount: new Decimal(2),
            minedAt: 0
        },
        1: {
            amount: new Decimal(3),
            minedAt: 0
        },
        2: {
            amount: new Decimal(4),
            minedAt: 0
        }
    },
    INITIAL_IRON = {
        0: {
            amount: new Decimal(2),
            minedAt: 0
        },
        1: {
            amount: new Decimal(3),
            minedAt: 0
        }
    },
    INITIAL_GOLD = {
        0: {
            amount: new Decimal(2),
            minedAt: 0
        }
    },
    INITIAL_FARM = {
        balance: new Decimal(lib.fromWei("0")),
        fields: INITIAL_FIELDS,
        inventory: {
            Sunflower: new Decimal(5),
            Potato: new Decimal(12),
            Scarecrow: new Decimal(4)
        },
        stock: INITIAL_STOCK,
        trees: INITIAL_TREES,
        stones: INITIAL_STONE,
        iron: INITIAL_IRON,
        gold: INITIAL_GOLD,
        skills: {
            farming: new Decimal(0),
            gathering: new Decimal(0)
        }
    },
    EMPTY = {
        balance: new Decimal(lib.fromWei("0")),
        fields: {},
        inventory: {},
        stock: {},
        trees: INITIAL_TREES,
        stones: INITIAL_STONE,
        iron: INITIAL_IRON,
        gold: INITIAL_GOLD,
        skills: {
            farming: new Decimal(0),
            gathering: new Decimal(0)
        }
    },
    API_URL$6 = CONFIG.API_URL;

function squashEvents(e) {
    return e.reduce((A, t, a) => {
        if (a > 0) {
            const n = A[A.length - 1];
            if ((t.type === "item.crafted" && n.type === "item.crafted" || t.type === "item.sell" && n.type === "item.sell") && t.item === n.item) return [...A.slice(0, -1), l(c({}, t), {
                amount: n.amount + t.amount
            })]
        }
        return [...A, t]
    }, [])
}

function serialize(e, A) {
    return e.map(t => l(c({}, t), {
        createdAt: new Date(t.createdAt.getTime() + A).toISOString()
    }))
}
async function autosaveRequest(e) {
    const A = window["x-amz-ttl"];
    return await window.fetch(`${API_URL$6}/autosave/${e.farmId}`, {
        method: "POST",
        headers: c({
            "content-type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${e.token}`,
            "X-Fingerprint": e.fingerprint
        }, A ? {
            "X-Amz-TTL": window["x-amz-ttl"]
        } : {}),
        body: JSON.stringify({
            sessionId: e.sessionId,
            actions: e.actions,
            clientVersion: CONFIG.CLIENT_VERSION
        })
    })
}
async function autosave(e) {
    const A = squashEvents(e.actions),
        t = serialize(A, e.offset),
        a = await autosaveRequest(l(c({}, e), {
            actions: t
        }));
    if (a.status === 401 && removeSession(metamask.myAccount), a.status === 429) throw new Error(ERRORS.TOO_MANY_REQUESTS);
    if (a.status !== 200 || !a.ok) throw new Error("Could not save game");
    const {
        farm: n
    } = await sanitizeHTTPResponse(a), s = makeGame(n);
    return {
        verified: !0,
        farm: s
    }
}
const API_URL$5 = CONFIG.API_URL;
async function mint(e) {
    const A = await window.fetch(`${API_URL$5}/mint/${e.farmId}`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${e.token}`
        },
        body: JSON.stringify({
            sessionId: e.sessionId,
            item: e.item,
            captcha: e.captcha
        })
    });
    if (A.status === 429) throw new Error(ERRORS.TOO_MANY_REQUESTS);
    if (A.status !== 200 || !A.ok) throw new Error("Could not mint your object");
    const t = await A.json();
    return {
        sessionId: await metamask.getSessionManager().sync(t),
        verified: !0
    }
}
const API_URL$4 = CONFIG.API_URL;
async function sync({
    farmId: e,
    sessionId: A,
    token: t,
    captcha: a
}) {
    const n = await window.fetch(`${API_URL$4}/sync/${e}`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${t}`
        },
        body: JSON.stringify({
            sessionId: A,
            captcha: a
        })
    });
    if (n.status === 429) throw new Error(ERRORS.TOO_MANY_REQUESTS);
    if (n.status >= 400) throw new Error(ERRORS.FAILED_REQUEST);
    const s = await n.json(),
        r = await metamask.getSessionManager().sync(s);
    return {
        verified: !0,
        sessionId: r
    }
}
const API_URL$3 = CONFIG.API_URL;
async function withdraw({
    farmId: e,
    sessionId: A,
    sfl: t,
    ids: a,
    amounts: n,
    token: s,
    captcha: r
}) {
    const i = await window.fetch(`${API_URL$3}/withdraw/${e}`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${s}`
        },
        body: JSON.stringify({
            sessionId: A,
            sfl: t,
            ids: a,
            amounts: n,
            captcha: r
        })
    });
    if (i.status === 429) throw new Error(ERRORS.TOO_MANY_REQUESTS);
    if (i.status >= 400) throw new Error(ERRORS.FAILED_REQUEST);
    const m = await i.json();
    return {
        sessionId: await metamask.getSessionManager().withdraw(m),
        verified: !0
    }
}
const RESOURCES = {
    Wood: {
        description: "Used to craft items"
    },
    Stone: {
        description: "Used to craft items"
    },
    Iron: {
        description: "Used to craft items"
    },
    Gold: {
        description: "Used to craft items"
    },
    Egg: {
        description: "Used to craft items"
    },
    Chicken: {
        description: "Used to lay eggs"
    }
};

function getItemUnit(e) {
    return e in CROPS() || e in RESOURCES || e in SEEDS() || e in TOOLS ? "ether" : "wei"
}

function balancesToInventory(e) {
    const A = Object.keys(KNOWN_IDS);
    return e.reduce((a, n, s) => {
        const r = getItemUnit(A[s]),
            i = new Decimal(lib.fromWei(n, r));
        return i.equals(0) ? a : l(c({}, a), {
            [A[s]]: i
        })
    }, {})
}

function populateFields(e) {
    const A = {
            name: "Sunflower",
            plantedAt: 0
        },
        t = {},
        a = [];
    e["Pumpkin Soup"] && a.push(5, 6, 7, 8, 9), e.Sauerkraut && a.push(10, 11, 12, 13, 14, 15), e["Roasted Cauliflower"] && a.push(16, 17, 18, 19, 20, 21);
    for (let n = 0; n < 22; n += 1)(n >= 0 && n <= 4 || a.includes(n)) && (t[n] = A);
    return t
}
const API_URL$2 = CONFIG.API_URL;
async function loadMetadata(e) {
    const A = `${API_URL$2}/nfts/farm/${e}`;
    return await (await window.fetch(A, {
        method: "GET",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    })).json()
}
async function getOnChainState({
    id: e,
    farmAddress: A
}) {
    const t = await metamask.getToken().balanceOf(A),
        a = await metamask.getInventory().getBalances(A),
        n = balancesToInventory(a),
        s = populateFields(n),
        i = (await loadMetadata(e)).image.includes("blacklisted");
    return {
        game: l(c({}, EMPTY), {
            balance: new Decimal(lib.fromWei(t)),
            farmAddress: A,
            fields: s,
            inventory: n
        }),
        isBlacklisted: i
    }
}
async function getFingerPrint() {
    let e = "0x123";
    try {
        e = await new Promise((A, t) => {
            window.botdPromise.then(a => a.detect()).then(a => A(a.requestId)).catch(t)
        })
    } catch {}
    return e
}
async function levelUp(e) {
    const A = await autosaveRequest(l(c({}, e), {
            actions: [{
                type: "skill.learned",
                skill: e.skill
            }]
        })),
        t = await sanitizeHTTPResponse(A);
    return {
        farm: makeGame(t.farm)
    }
}
const API_URL$1 = CONFIG.API_URL;
async function reset(e) {
    return await (await window.fetch(`${API_URL$1}/reset/${e.farmId}`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${e.token}`,
            "X-Fingerprint": e.fingerprint
        }
    })).json()
}
const GAME_EVENT_HANDLERS = Object.keys(EVENTS).reduce((e, A) => l(c({}, e), {
    [A]: {
        actions: assign((t, a) => ({
            state: processEvent(t.state, a),
            actions: [...t.actions, l(c({}, a), {
                createdAt: new Date
            })]
        }))
    }
}), {});

function startGame(e) {
    const A = () => e.sessionId || !e.address ? "playing" : "readonly";
    return createMachine({
        id: "gameMachine",
        initial: "loading",
        context: {
            actions: [],
            state: EMPTY,
            sessionId: e.sessionId,
            offset: 0
        },
        states: {
            loading: {
                invoke: {
                    src: async t => {
                        if (t.sessionId) {
                            const a = await getFingerPrint(),
                                n = await loadSession({
                                    farmId: Number(e.farmId),
                                    sessionId: t.sessionId,
                                    token: e.rawToken
                                });
                            if (!n) throw new Error("NO_FARM");
                            const {
                                game: s,
                                offset: r,
                                isBlacklisted: i,
                                whitelistedAt: m,
                                itemsMintedAt: d,
                                blacklistStatus: E
                            } = n;
                            return s.farmAddress = e.address, {
                                state: l(c({}, s), {
                                    id: Number(e.farmId)
                                }),
                                offset: r,
                                isBlacklisted: i,
                                whitelistedAt: m,
                                fingerprint: a,
                                itemsMintedAt: d,
                                blacklistStatus: E
                            }
                        }
                        if (e.address) {
                            const {
                                game: a,
                                isBlacklisted: n
                            } = await getOnChainState({
                                farmAddress: e.address,
                                id: Number(e.farmId)
                            });
                            return a.id = e.farmId, {
                                state: a,
                                isBlacklisted: n
                            }
                        }
                        return {
                            state: INITIAL_FARM
                        }
                    },
                    onDone: [{
                        target: "blacklisted",
                        cond: (t, a) => a.data.isBlacklisted,
                        actions: assign({
                            whitelistedAt: (t, a) => new Date(a.data.whitelistedAt),
                            blacklistStatus: (t, a) => a.data.blacklistStatus,
                            state: (t, a) => a.data.state,
                            offset: (t, a) => a.data.offset,
                            fingerprint: (t, a) => a.data.fingerprint,
                            itemsMintedAt: (t, a) => a.data.itemsMintedAt
                        })
                    }, {
                        target: A(),
                        actions: assign({
                            state: (t, a) => a.data.state,
                            offset: (t, a) => a.data.offset,
                            fingerprint: (t, a) => a.data.fingerprint,
                            itemsMintedAt: (t, a) => a.data.itemsMintedAt
                        })
                    }],
                    onError: {
                        target: "error",
                        actions: "assignErrorMessage"
                    }
                }
            },
            playing: {
                invoke: {
                    src: t => a => {
                        const n = setInterval(async () => {
                            var r;
                            await ((r = metamask.getSessionManager()) == null ? void 0 : r.getSessionId(e == null ? void 0 : e.farmId)) !== t.sessionId && a("EXPIRED")
                        }, 1e3 * 20);
                        return () => {
                            clearInterval(n)
                        }
                    },
                    onError: {
                        target: "error",
                        actions: "assignErrorMessage"
                    }
                },
                on: l(c({}, GAME_EVENT_HANDLERS), {
                    SAVE: {
                        target: "autosaving"
                    },
                    MINT: {
                        target: "minting"
                    },
                    SYNC: {
                        target: "syncing"
                    },
                    WITHDRAW: {
                        target: "withdrawing"
                    },
                    LEVEL_UP: {
                        target: "levelling"
                    },
                    EXPIRED: {
                        target: "error",
                        actions: assign(t => ({
                            errorCode: ERRORS.SESSION_EXPIRED
                        }))
                    },
                    RESET: {
                        target: "resetting"
                    }
                })
            },
            autosaving: {
                on: c({}, GAME_EVENT_HANDLERS),
                invoke: {
                    src: async (t, a) => {
                        var i;
                        const n = ((i = a == null ? void 0 : a.data) == null ? void 0 : i.saveAt) || new Date;
                        if (t.actions.length === 0) return {
                            verified: !0,
                            saveAt: n,
                            farm: t.state
                        };
                        const {
                            verified: s,
                            farm: r
                        } = await autosave({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            actions: t.actions,
                            token: e.rawToken,
                            offset: t.offset,
                            fingerprint: t.fingerprint
                        });
                        return await new Promise(m => setTimeout(m, 1e3)), {
                            saveAt: n,
                            verified: s,
                            farm: r
                        }
                    },
                    onDone: [{
                        target: "playing",
                        actions: assign((t, a) => ({
                            actions: t.actions.filter(s => s.createdAt.getTime() > a.data.saveAt.getTime()),
                            state: updateGame(a.data.farm, t.state)
                        }))
                    }],
                    onError: {
                        target: "error",
                        actions: "assignErrorMessage"
                    }
                }
            },
            minting: {
                invoke: {
                    src: async (t, a) => {
                        t.actions.length > 0 && await autosave({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            actions: t.actions,
                            token: e.rawToken,
                            offset: t.offset,
                            fingerprint: t.fingerprint
                        });
                        const {
                            item: n,
                            captcha: s
                        } = a, {
                            sessionId: r
                        } = await mint({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            token: e.rawToken,
                            item: n,
                            captcha: s
                        });
                        return {
                            sessionId: r
                        }
                    },
                    onDone: {
                        target: "synced",
                        actions: assign((t, a) => ({
                            sessionId: a.data.sessionId,
                            actions: []
                        }))
                    },
                    onError: {
                        target: "error",
                        actions: "assignErrorMessage"
                    }
                }
            },
            syncing: {
                invoke: {
                    src: async (t, a) => {
                        t.actions.length > 0 && await autosave({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            actions: t.actions,
                            token: e.rawToken,
                            offset: t.offset,
                            fingerprint: t.fingerprint
                        });
                        const {
                            sessionId: n
                        } = await sync({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            token: e.rawToken,
                            captcha: a.captcha
                        });
                        return {
                            sessionId: n
                        }
                    },
                    onDone: {
                        target: "synced",
                        actions: assign((t, a) => ({
                            sessionId: a.data.sessionId,
                            actions: []
                        }))
                    },
                    onError: [{
                        target: "playing",
                        cond: (t, a) => a.data.message === ERRORS.REJECTED_TRANSACTION,
                        actions: assign(t => ({
                            actions: []
                        }))
                    }, {
                        target: "error",
                        actions: "assignErrorMessage"
                    }]
                }
            },
            withdrawing: {
                invoke: {
                    src: async (t, a) => {
                        const {
                            amounts: n,
                            ids: s,
                            sfl: r,
                            captcha: i
                        } = a, {
                            sessionId: m
                        } = await withdraw({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            token: e.rawToken,
                            amounts: n,
                            ids: s,
                            sfl: r,
                            captcha: i
                        });
                        return {
                            sessionId: m
                        }
                    },
                    onDone: {
                        target: "withdrawn",
                        actions: assign({
                            sessionId: (t, a) => a.data.sessionId
                        })
                    },
                    onError: [{
                        target: "playing",
                        cond: (t, a) => a.data.message === ERRORS.REJECTED_TRANSACTION
                    }, {
                        target: "error",
                        actions: "assignErrorMessage"
                    }]
                }
            },
            levelling: {
                invoke: {
                    src: async (t, a) => {
                        t.actions.length > 0 && await autosave({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            actions: t.actions,
                            token: e.rawToken,
                            offset: t.offset,
                            fingerprint: t.fingerprint
                        });
                        const {
                            farm: n
                        } = await levelUp({
                            farmId: Number(e.farmId),
                            sessionId: t.sessionId,
                            token: e.rawToken,
                            fingerprint: t.fingerprint,
                            skill: a.skill
                        });
                        return {
                            farm: n
                        }
                    },
                    onDone: [{
                        target: "playing",
                        actions: assign((t, a) => ({
                            actions: [],
                            state: a.data.farm
                        }))
                    }],
                    onError: {
                        target: "error",
                        actions: "assignErrorMessage"
                    }
                }
            },
            resetting: {
                invoke: {
                    src: async (t, a) => {
                        const {
                            success: n
                        } = await reset({
                            farmId: Number(e.farmId),
                            token: e.rawToken,
                            fingerprint: t.fingerprint
                        });
                        return {
                            success: n
                        }
                    },
                    onDone: [{
                        target: "loading"
                    }],
                    onError: {
                        target: "error",
                        actions: "assignErrorMessage"
                    }
                }
            },
            readonly: {},
            error: {
                on: {
                    CONTINUE: "playing"
                }
            },
            blacklisted: {
                on: {
                    CONTINUE: A()
                }
            },
            synced: {
                on: {
                    REFRESH: {
                        target: "loading"
                    }
                }
            },
            withdrawn: {
                on: {
                    REFRESH: {
                        target: "loading"
                    }
                }
            }
        }
    }, {
        actions: {
            assignErrorMessage: assign({
                errorCode: (t, a) => a.data.message,
                actions: []
            })
        }
    })
}
const Context = React.createContext({}),
    GameProvider = ({
        children: e
    }) => {
        const {
            authService: A
        } = react.exports.useContext(Context$1), [t] = useActor(A), [a] = react.exports.useState(startGame(l(c({}, t.context), {
            isNoob: !1
        }))), n = useInterpret(a), [s, r] = react.exports.useState(getShortcuts()), i = react.exports.useCallback(d => {
            if (n.state.matches("readonly")) return;
            const E = cacheShortcuts(d);
            r(E)
        }, [n.state]), m = s.length > 0 ? s[0] : void 0;
        return React.createElement(Context.Provider, {
            value: {
                shortcutItem: i,
                selectedItem: m,
                gameService: n
            }
        }, e)
    },
    Balance = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = react.exports.useState(!1);
        return React.createElement(InnerPanel, {
            className: "fixed top-2 right-2 z-50 flex items-center shadow-lg cursor-pointer"
        }, React.createElement("img", {
            src: token,
            className: "w-8 img-highlight"
        }), React.createElement("span", {
            className: "text-white text-sm text-shadow ml-2",
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1)
        }, t === !1 ? A.context.state.balance.toDecimalPlaces(3, Decimal.ROUND_DOWN).toString() : React.createElement("small", null, A.context.state.balance.toString())))
    };
var basket = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA9nV6oiYz5DtE13ZDdD85vkovGBQl2WxtxwAAAAF0Uk5TAEDm2GYAAABOSURBVAjXY2BgLy8vYGBgKHFxcQdSZeXl6QwM7MKF5sIFDMVGSkrK5iApkGRZGhCkM5SHAkE5Q1lqWlhqOkNZGJBOZygFctLCQWYBTQMATTUW2/GKHakAAAAASUVORK5CYII=",
    button = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATBAMAAABvvEDBAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAJitEWmmIi5u0////wMvcOcop7gAAAAF0Uk5TAEDm2GYAAABmSURBVAjXjc7RDYAwCATQqxOUdIGG6AANcQFDF9B2/1UE7ADy9XIJcADAzIhhVQ1uw9Sr6dA5p94eddOwcPPIwoq9h8b1W2XtNpR1ryGd8ePJSBJ/JQNFTNKsQRKf7LXIQF9VIscLpnkjRCFtFEoAAAAASUVORK5CYII=",
    border = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFAAAA////JitESMfBwwAAAAF0Uk5TAEDm2GYAAAAZSURBVAjXY+BawcCgGsbAMIGxAQODxIHyAIsgB7CF1qipAAAAAElFTkSuQmCC";
const Label = ({
    children: e,
    className: A
}) => React.createElement("div", {
    className: classNames("bg-silver-300 text-white text-shadow text-xs object-contain justify-center items-center flex", A),
    style: {
        borderStyle: "solid",
        borderWidth: "5px",
        borderImage: `url(${border}) 30 stretch`,
        borderImageSlice: "25%",
        imageRendering: "pixelated",
        borderImageRepeat: "repeat",
        borderRadius: "15px"
    }
}, e);
var selectBox = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAAuG9Q6tSqJitEPjZUHQAAAAF0Uk5TAEDm2GYAAABhSURBVBjTY+D/z8DAACKsVgMZfKsOMLyCMDYwvAoHMnijkBl/gAzmXxsYrh4AMhhMCxAMexDNwA/m0g3ALX0FttdqAxID7C+gU+HeuQVhAN0M9k5oAYMphHGAgR/sr/8MAKPEKneqHAQSAAAAAElFTkSuQmCC",
    cancel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA/5mc////5DtEJitE9nV62ycwCgAAAAF0Uk5TAEDm2GYAAABBSURBVAjXHYzBCcBACAT3YQupRP3LmVSg238r0YOBZWBYyIsB54kByWbNOKkBMbYB+MgAhMVeUR/NMt1SI7e8Lz8UXQ3kGudprwAAAABJRU5ErkJggg==";
const shortenCount = e => {
        if (!e) return "";
        if (e.lessThan(1)) return e.toDecimalPlaces(2, Decimal.ROUND_FLOOR).toString();
        if (e.lessThan(1e3)) return e.toDecimalPlaces(0, Decimal.ROUND_FLOOR).toString();
        const A = e.lessThan(1e6);
        return `${e.div(A?1e3:1e6).toDecimalPlaces(1,Decimal.ROUND_FLOOR).toString()}${A?"k":"m"}`
    },
    Box = ({
        image: e,
        secondaryImage: A,
        isSelected: t,
        count: a,
        onClick: n,
        disabled: s,
        locked: r
    }) => {
        const [i, m] = react.exports.useState(!1), [d, E] = react.exports.useState("");
        react.exports.useEffect(() => E(shortenCount(a)), [a]);
        const u = !r && !s;
        return React.createElement("div", {
            className: "relative",
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1)
        }, React.createElement("div", {
            className: classNames("w-12 h-12 bg-brown-600  m-1.5 cursor-pointer flex items-center justify-center relative", {
                "bg-brown-600 cursor-not-allowed": s,
                "bg-brown-200": t,
                "opacity-75": r,
                "cursor-pointer": u
            }),
            onClick: u ? n : void 0,
            style: {
                borderStyle: "solid",
                borderWidth: "6px",
                borderImage: `url(${darkBorder}) 30 stretch`,
                borderImageSlice: "25%",
                imageRendering: "pixelated",
                borderImageRepeat: "repeat",
                borderRadius: "20px"
            }
        }, A ? React.createElement("div", {
            className: "w-full flex"
        }, React.createElement("img", {
            src: e,
            className: "w-4/5 object-contain",
            alt: "item"
        }), React.createElement("img", {
            src: A,
            className: "absolute right-0 bottom-1 w-1/2 h-1/2 object-contain",
            alt: "crop"
        })) : e && React.createElement("img", {
            src: e,
            className: "h-full w-full object-contain",
            alt: "item"
        }), r && React.createElement("img", {
            src: cancel,
            className: "absolute w-6 -top-3 -right-3 px-0.5 z-20"
        }), !r && !!a && a.greaterThan(0) && React.createElement(Label, {
            className: classNames("absolute -top-4 -right-3 px-0.5 text-xs z-10", {
                "z-20": i
            })
        }, i ? a.toString() : d)), (t || i) && !r && !s && React.createElement("img", {
            className: "absolute w-14 h-14 top-0.5 left-0.5 pointer-events-none",
            src: selectBox
        }))
    };
var seeds$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKBAMAAACQ3rmwAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAWDI1Picxvkovcz4513ZDJafWaQAAAAF0Uk5TAEDm2GYAAAA+SURBVAjXFYrBDcAgEMP8YBI6AvCn6nUAWrL/KuQekaXYlCAmvArtxJImz/iaUVq9OnBrObF0Yfz5WeYH4R2iswoHiOo+SgAAAABJRU5ErkJggg==",
    sunflowerPlant$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQBAMAAAA/jegKAAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAA/+s2Y8dN93Yi+6ogJlxCPolI/94fcz45//lOvkovbfMymwAAAAF0Uk5TAEDm2GYAAABgSURBVAjXY2Bg4FrFAAJcK2eCGcstZ5ovAHLLS0TKq4C0uUeHuxUDw8opHR0tMxcwrJzY0dEIoqF8mDxMfRJUf1gW0Lw0IJ0WtSpJKYGBNZQ1VSktAGgBa2oYlGYNZQAASxYkafOzev8AAAAASUVORK5CYII=",
    close = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAAi5u0GBQl////mo6iugAAAAF0Uk5TAEDm2GYAAAA1SURBVAjXY9BiWsCwv/sHw/z3Nxim/49gUPuXwMD9v4FB//4Dhv3hPxjmpt5gmNoZwQBUBwCl3RKJRykUxQAAAABJRU5ErkJggg==",
    tabBorder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAAAlQTFRFAAAA6tSqGBQlHYAABgAAAAF0Uk5TAEDm2GYAAAAWSURBVAjXY+BawcCgGsbAMIGxARcGAI9TCKVuFeTIAAAAAElFTkSuQmCC";
const Tab = ({
    children: e,
    className: A,
    isActive: t,
    onClick: a
}) => t ? React.createElement("div", {
    className: classNames("bg-brown-300 px-1 py-2 mr-2 flex items-center", A),
    style: {
        borderStyle: "solid",
        borderWidth: "6px",
        borderImage: `url(${tabBorder}) 30 stretch`,
        borderImageSlice: "25%",
        imageRendering: "pixelated",
        borderImageRepeat: "repeat",
        borderRadius: "20px 20px 0 0"
    }
}, e) : React.createElement("div", {
    className: classNames("px-1 py-2 mr-2 flex items-center cursor-pointer", A),
    onClick: a
}, e);
var seed$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAQklEQVQImWP8//8/w35vg/8MCMDIVGJvBRZQi3EGYwYGhv9MIFJSR4Th1pK9cLVgQXQJFpAZc058g5rJxeDN840RAGMLE5KOSgWkAAAAAElFTkSuQmCC",
    tool$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAwMvcvkovi5u0WmmIcz45GBQlmbZdhwAAAAF0Uk5TAEDm2GYAAABDSURBVAjXY2BgYEhgAAM2MTYwK8UwKQzMdxYD00ABsDibi7MYiE4KSTEGCrCphrG5gbihCQwQLlgxiAsCqWFQUyFcADzlCyeFMcRDAAAAAElFTkSuQmCC",
    gnome$1 = "data:image/gif;base64,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",
    food = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAA/NCk87R3/8pw/7g//9/A6qBVwXs0/+bO+sOO8n6qWQAAAAF0Uk5TAEDm2GYAAAG7SURBVHja7dzRTcMwEADQrMAKrNAVWIEVWIEVWCHbohipVk/n1HaagtC7r1Ru7qU/J5/jellu4/M2lgMxlgoMBoNnUpXh9RrvW4Rbeh+mfK8kqPna94LBYPAD4OyWoViTAIPB4BPgbIb2sUV4jlBVy9XrFnWg3HZolgkGg8GDjWc115EID1j1sc4WDAaDp+GQYSiyiSIYDAY/CS5pXrb46oxSN6s+WzLBYDB47e5QM7iJXLbIBsBgMPhJcNahNuG322jC3b0qGAwGH4PrclkGX65RzPoxg8cKNhgMBh+D6/vM8ZI526uCwWDwSXAtlOGqA+7ZxgYGg8H9cNahHi6Z9erOjwWDweBpuG4G238rUPWON5tgMBh8Khy2j03CY6tsYDAY/Bx43yxbzyqc/WscDAaD/zb8ayUTDAb/ZzgcL7Hfq+6b2TwPDAaDT4Czktnbq4ZltbC2lp1ZAQaDwafC5dic8b96N0/b6S6ZYDAYfA/uOJGweZ5OQJqnGaYlEwwGg2fgZnOatZodSDNLHfjRwWAw+AFw1lE2D/wKz5HN+EKWuNQGBoPB03A22WvOAoeimWXpGAGDweB2+m+81FTsIhsf3QAAAABJRU5ErkJggg==",
    wood = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA5KZycz456tSquG9QPicx+jG9ZgAAAAF0Uk5TAEDm2GYAAAA6SURBVAjXY2AIDWAAAlZjUxAVbGwYAKZcREGUiaMjkMuq5CIC4gapuEC4ji4BYK4IiGJVUgXpBJkDAGAnCPgUf+iAAAAAAElFTkSuQmCC",
    seed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAWmmIi5u0wMvcOkRm/04GWwAAAAF0Uk5TAEDm2GYAAAAlSURBVAjXY2BxYWBgcFR2YGBwFjJhYHAyBDJZlIUcQEwgAZQGAEF7A8Cmxs72AAAAAElFTkSuQmCC",
    potatoSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGBAMAAAAS4vJ7AAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAA6tSq13ZD5KZyvkovXunEXwAAAAF0Uk5TAEDm2GYAAAAeSURBVAjXY2BxYWBwNnZgcFYyAWIRBhZDEQYGFwcAIt8C3r0k1TEAAAAASUVORK5CYII=",
    potatoCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAy2A55KZycz4513ZDvkov7GiYdAAAAAF0Uk5TAEDm2GYAAAA7SURBVAjXY2AIDWVgYGB2UQpgYDANEVIFkSJAjmmIi4grg2koiGQODXFxBUqEhjoDlYaGGgB1GBszAAANgQka6+y7XAAAAABJRU5ErkJggg==",
    pumpkinSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA6tSqGTw+JlxCY8dNPolI+pdcZAAAAAF0Uk5TAEDm2GYAAAAkSURBVAjXY2ANZWBgMHQJYGAwdXEFEiFAJlMoiK8aCCSYjRkAVkcE4tTOKagAAAAASUVORK5CYII=",
    pumpkin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOBAMAAADpk+DfAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAPolIY8dNJlxC/q4093Yicz45vkovxieLuQAAAAF0Uk5TAEDm2GYAAABRSURBVAjXY2BgMGYAAWYlAzAlpAzmGoKpMkPhdAYG9vC0NJcChtLwEJcSd4bS0lAXd2QqxD2cITU9NLQsjCG9rLw8vYyBLS29LC2BgSENCBgA+AoVF7vRUIkAAAAASUVORK5CYII=",
    carrotSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAvkov6LeWuG9QwoVpT+JC8AAAAAF0Uk5TAEDm2GYAAAAmSURBVAjXY2A2ZmBgMFYxYGAQcnJmYBBRATIZnZwMQEwgwSjIAAA4HAMQhgsengAAAABJRU5ErkJggg==",
    carrotCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAA/udhPolIJlxCTadvY8dN/q40vkov93YiLZtnuQAAAAF0Uk5TAEDm2GYAAABDSURBVAjXY2BwcWAAAqZQAxDlqmpeDqJClQULGBicjdQS24Hc4rSMDiC3LK0DTGV0dABF2TvAFEMFhGKvAFMM7OXlAKKDEqd/EfgnAAAAAElFTkSuQmCC",
    cabbageSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAASklEQVQImWP8//8/w7bAzv8MUOC1vpyRcWtAx39H1U8Mn5xkwMJnZ35iYNr84glMERywwFh8+2CSfAwsAeZPGIsOy8DNDDC/xggA8JcX7QkRiLIAAAAASUVORK5CYII=",
    cabbageCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALBAMAAAC5XnFsAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAA6LeW9nV6aDhstVCIbJ33wgAAAAF0Uk5TAEDm2GYAAABFSURBVAjXFcfRCcAgDEXRC3EBpQsoDiAkA1jz9p+p9utwoPS2gVd6oDSpb2zWehZ2eps/Y1wizswkUorE5K7F7Q2Y++IDbXEKKuzcYmUAAAAASUVORK5CYII=",
    beetrootCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAPicxY8dNJlxC9nV6PolIaDhstVCIUf+5RwAAAAF0Uk5TAEDm2GYAAABkSURBVAjXY2BgYAg1YAADVqVgCCNIFcZQhzBCjdQNICpUzcCMICVlMwEwIzwtTbw8gYHBNNRYMMWljIGB2ZiB0cXFPQEkyw5jsJW4lEMY5eXlYI0M6eVliWAGW5oYhMHAwCgAAIOGEafJEyb3AAAAAElFTkSuQmCC",
    cauliflowerSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAP0lEQVQImWP8//8/w+G2rP8MUGBbNY2R4VBr5v8X26f9hwEQn+nbq+cwRXDAAmO93DEdRZDxwo5dcDMZGBgYAYx+H9WhuAkjAAAAAElFTkSuQmCC",
    cauliflowerCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAY8dNGTw+woVpJlxCPolI////6LeWpcouNQAAAAF0Uk5TAEDm2GYAAABRSURBVAjXY2BgMDZmAALmsjQDIGWelpYM5JSnpQG5ICodRJWllRswsISXl5c6MLiKlpcHhjC4CoaXCoYwsIS6uIQ6MDC4hriGALUzKSkpMAAAyKsREniWbRMAAAAASUVORK5CYII=",
    parsnipSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAgMAAACdogfbAAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAA13ZD5KZycz45oaDyXAAAAAF0Uk5TAEDm2GYAAAAWSURBVAjXY+BnYLA6wPB0AwgBGfwMAC7sBT11VGQEAAAAAElFTkSuQmCC",
    parsnipCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOBAMAAADtZjDiAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAPolI5KZy13ZDY8dN6tSqcz45JlxCMAZ21AAAAAF0Uk5TAEDm2GYAAABMSURBVAjXY2BgL2cAgxKXAhDFXuIIpkscxRmgdFkCiBYvEQ0DyRcUhoaCBBiSlULDwLSpKphmMw4KgkgYKYFptmQIzcCWZgaxgyEZAHwVDyQRn5lRAAAAAElFTkSuQmCC",
    radishSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGBAMAAAAS4vJ7AAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAA5KZyvkov13ZDcz45Vpj9vAAAAAF0Uk5TAEDm2GYAAAAgSURBVAjXY2B2YWBQNHZgcDI2YXBSNmFgUTJhYHBxAAAihgL8HMPIwgAAAABJRU5ErkJggg==",
    radishCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPBAMAAAAizzN6AAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAA9nV6cz45GTw+Y8dNPicxJlxCPolI5DtEoiYzZKA5OwAAAAF0Uk5TAEDm2GYAAABiSURBVAjXY2BLSwAihnQXtxSXMob0EvcSdyBV7uJSXsbAZl5eXpzAwMBsXmzAwMAwo72ik4GBs6OjQ2ICmGqcwMA6s6NjZgCQAoIABobImTOnAlWyRk4FcoA0mGRgUmBgAAAo8RtuZzoP8wAAAABJRU5ErkJggg==",
    wheatSeed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAARklEQVQImWP8//8/w49y5f8MCMDI0XmXgfF7mRJYkMXkH1jqzxkmsCSYBAlCBWAK/kN4aJIgAGIxoqmGsKECIEmEAxgYGACf5BvPZ8BfwQAAAABJRU5ErkJggg==",
    wheatCrop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAA//lO+6og/94f93YiLYywcQAAAAF0Uk5TAEDm2GYAAAA2SURBVAjXY2BxcWAAAWcjExgNFnBSggg4G0MEWJAFGCACUB3GImCaxcUJYhQDiwqEZoALKAAA9cQIaQ+hKmsAAAAASUVORK5CYII=",
    axe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANBAMAAACEMClyAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAAcz45PicxdD8513ZDvkovwMvci5u0WmmIGBQlWNSWfgAAAAF0Uk5TAEDm2GYAAABOSURBVAjXY2AAgpkTGMCAszwSwphe1gkVyOgAy3GWdXSAhTgjOjrKQEJThTraQQxOV80Z5ZlAgSnBEzjTwAKWQBMhAhDTployQM2HCgAAEGgVR0XNJywAAAAASUVORK5CYII=",
    woodPickaxe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAvkov6tSqcz455KZywoVpGBQlBoJxjAAAAAF0Uk5TAEDm2GYAAABPSURBVAjXY2BIS0tgAAI2FyU1NhAr1cUp0QwkkBqiZgaWCXWCqAgNUQPRiaZgATZhs1QQnWicwAakgVwGtpAEEJeBISWBIRlsBhCB9TIAACDsDtndejSYAAAAAElFTkSuQmCC",
    pickaxe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAvkovwMvccz45WmmIi5u0GBQlA+ghxwAAAAF0Uk5TAEDm2GYAAABPSURBVAjXY2BIS0tgAAK2UCU1NhArJTQo0QwkkOKqZgaWcQmCqHBxVQPRiSZgATZhsxQQnWicwAakgVwGNtcEEJeBITWBIRlsBhCB9TIAACfdDui0PcWhAAAAAElFTkSuQmCC",
    ironPickaxe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAvkov////cz454ODgvb29GBQl78QI8QAAAAF0Uk5TAEDm2GYAAABPSURBVAjXY2BIS0tgAAI2FyU1NhAr1cUp0QwkkBqiZgaWCXWCqAgNUQPRiaZgATZhs1QQnWicwAakgVwGtpAEEJeBISWBIRlsBhCB9TIAACDsDtndejSYAAAAAElFTkSuQmCC",
    rod = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOBAMAAADUAYG5AAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAAWmmI////i5u05DtEwMvccz45vkov13ZDGBQlgNMEMwAAAAF0Uk5TAEDm2GYAAABSSURBVAjXY2AAA84JUHrGBChdCWHMaJ8EZnC2V0IYM8omgBmc7ZkMYAZQgHPKTKBA58wJnC6eQIGpoWARzvapwhMYZk4AqphqDNY7PZNzJop1AJucHLvsF/K9AAAAAElFTkSuQmCC",
    coop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAApBAMAAABJmV0xAAAABGdBTUEAALGPC/xhBQAAACpQTFRFAAAAuG9Q9eDP/9GqJSpEvkovLOj1h1tHJKHiwoVpEU6J0XhQ5KZycz45/s4IvwAAAAF0Uk5TAEDm2GYAAAEoSURBVCjPpdKhT8NAFMfx+wdqCBKDZ6qOZIJkFlk5u3+hqnZZZlFN0M2oJEEdNViuSZONsRbe/8L7vXfXXWep2GWffPeWt50x+hB1ZvJQms4nRK4sn9tuAkPdR8RQV6v6ZSTAplrttp4SKSBrVGTMPkUhwtVT2pleCsypUJWdSQYudA4q/lRyj0LnVLvtXOQ8xwuKDdFpzVWtDQv2OqIKonudzgIAHYMAiHpUKgJZtgQNkEHA2jch3Qvg3CdI91LwVEI8eOJNRxAi/GTveEP0i6MxQdrF4jGS2exOhE+V1+vDFeSDT9/cPmjDZ5hz41oicnxGk3mvi++ythmFLwo/LDj83/y1zAvO8iILV+GnyQtu+CUWaez/muRbm5yiq5lwYy6u73if/wCtpUcnLF9OEQAAAABJRU5ErkJggg==",
    christmasTree = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAMAAAB/VplGAAAABGdBTUEAALGPC/xhBQAAAFRQTFRFAAAAK+n09nV6+/G6/udh////AJnaU4k+LmY1H23VEk6J/q4zmsd/5DtE/q40oiYz93Yi/uhfH003uG9QuW9QY8dNPicxU6ZBJlxCcz45GTw+PolIvwvrNQAAAAF0Uk5TAEDm2GYAAAD3SURBVDjLfdOLroIwDAZgjh6R+2DM0cv7v6fthERcx49Z0K9rEUJVnfKorvJY7he6aMrci/ZFpeHeLwOV9DX0chScXkcsJ/6YcyXXAncbnambhnEccaOCShBlobwzO8dHDWdOOnVjTph1p0an8ie5cgOIwNx1wg3lozVN91d3xv7D27puDfX+8DafTuCf8/zkr9C3Asz/0+y1h0+VAGenaZIeus9rJZydgLSH/LO98ufOJNyjxdmN0d9hX4xHSkSoF4FE1gOPK6KQLGu0VDllNVwx4r6s+e6I8pEW6STjEOLBMQTj2qQgNTcxFSiH8jsYLlUHnL+/AQUiJE+InZsIAAAAAElFTkSuQmCC",
    cat = "./assets/farm_cat.63c333dd.gif",
    dog = "data:image/gif;base64,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",
    gnome = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARBAMAAAD00TuvAAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAAAER/AHTYGBQkurq6t5Z9qQ4OdQUF/////8id6AYGFxQkvqDYLwAAAAF0Uk5TAEDm2GYAAABrSURBVAjXTY4xDkBQEES3dyI3cAXRk3AAtW5FKRI/esVoRMjHXs78X5nmZWaT2RERs12oBGgCX2BlkJQANhHfIAbma6DiwbdAG0mRd+7cHJmOf569cxqKMtWBvXaqGnkdWVcE/yxT8PzPAR8x/zWHwOrG8QAAAABJRU5ErkJggg==",
    goldEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACaBAMAAACJYb2LAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAA//nY/++T5XAoo1Ig/q4z/udgoUV9cQAAAAF0Uk5TAEDm2GYAAACeSURBVGje7dmxCQMxDEDRWyErZIWscCtkhew/Qgqr0SGESxneb229Uhh8XVXfpms/DAYzi7lXr9V79UvtaBgMZhYTh8GU8zsaBoOZzMR8aBgM5nQmz+cNkbU79dAwGMxkJm+BcqLcHhgMZjTzWXVXu4cBBoM5iCnr3gAxjsFgjmXK1YDBYE5gok4rf9cf8xgMZjKTtY3a33kMBjOD+QOrdu7zR2mYRgAAAABJRU5ErkJggg==",
    potatoStatue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAADxQTFRFL3hIAAAA56d2NolLFjw+23dJz2E+////wks0dT46WchWPolIIFxDwMvc6Kh3i5u0JitEOkRmWmmIWMlVez/6qQAAAAJ0Uk5T4gAa21xWAAABF0lEQVQ4y4XS2baDIAwFUO1tnSED//+v9ySIBV2s5qUNbBOmYfwRQ/VfPPqAlWieZ+kBFoUIIUgXkGYiPSCaSdOlAVYDJTqgCNXQAVkQDHeAC2nnCzgOPwj2UPa0Bse2YYx9BVgne9pUeG/DVgTxmTZrOP7e6JGjpDdwrZKvtAbLseA22VpAedqA9fP64KQzIBWkaw3WZZpEcU1eIASVaVrWGqSUhBywApBgoAZIExPGrQUksY18QXKAFuSBFg5SBfa0s4kcOPI7gGCxR2mh2K99km4tMHyGAcy3IIoK54eP5yvx3sKAFqBd4CepT2ALMiDqQp4VdivhM1YEP/GxTYCokl+UaIztNosoIEY/mfq6T1HiajCO/x+DI5x2m8g9AAAAAElFTkSuQmCC",
    scarecrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAMAAADOWS1PAAAABGdBTUEAALGPC/xhBQAAADZQTFRFAAAAKrFAGTw+xO3z9nV6lyiPAAAArE6vt29QYjWI13ZDJ11CmUQ0PolIKzI0VFtVFB8iAAcMC1QizAAAAAF0Uk5TAEDm2GYAAADjSURBVCjPdZKJDsMgDEOzowctOfz/PzuHVVpXqFUklNcEEyLyJwAyFOBmQ0YQwIglCQjkFt2SkQ1EyZNKn4ewKMu0RFcTQdsMh10ZGCBLecf+dKn41kPvqw+oPmbV+aHaW9TZVG3uCdG+a64TqjTVDtfX8/nStqXdSrJ5GqZ97BTalqEtmcPyNazlhvFzg9es6O0JA3nZ8CS8mcsXcSH/ZC9YAX4EDyTZc8oK5IcOjDIty0RyCv86TNMxnIxARQxGIEkk6vM4YxF1Y0kfIXaGeR0Sy3Zmd2w42A0NtRKtd2w9kw/hvRPgRnCF+wAAAABJRU5ErkJggg==",
    sunflowerStatue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABICAMAAABob+0nAAAABGdBTUEAALGPC/xhBQAAAHhQTFRFAAAAjJy0ucTQjp21vcjTh5qnwczXztjfO0VmSFJxQkxs5u3u5+7uf4eZPkdoQUtr9/v2kpipj5Wm9fv0vcHM7O3ws7fDPEZo4urr9/j5WWaQQ05zTll/h5SodYOY0tzrqrXHWGOJuW9QWmmI////OkRmwMvci5u0jchFfAAAAAF0Uk5TAEDm2GYAAAJ5SURBVEjHlZXZeuMwCIUz+z6dvW3seJMOev83nAOSHKexY8KN3C/8gOCIHg6rBuBwjwGD9HcwQD/0vQxuBkM/DCLDwNOHgN7d6dSdiLkIsJ5T1xwbIizMVZQC7bFtu27wlMVbyIkAcGxYlwPRojoF0DYnEUdZJQdTtE3nyqH36HjxtrWru24uevW2OSrgGwikJ8KBDNI7J6gDJ0UT+HXFLvHWfgVDtUX3GAV+/QIS4x0I3hkh4lBjrh2voCIWctjtbYxk8AYF9gBaPF57G6uFG/HWTcCqP+D9Y73WHlKr/5A9ORJvsicUwEs8Pn28L8Xh85fvtdVO4tPXB1gTnCoBvv34lUXi3nE/f/+zUTp3HIf4J/71K1eB+ByfrSr4VkM0C0EkuHpVCI4iCL8dzyMl0fdK55AchEZONTy/UnK8D4uszhJSchDpTKj7fq+0jBo+hODqrcXO/vslLRlNojvC8f+DI4fF19HDFsueRFi9JrAdwWNn6hr9DNDbUmF708IIG4NIScIs+afV6NVmQuwjKxO3CLUzUNLdJlI18RBpYbJNzKMuFq/t8u4IWMZbM04TS4DqG/muGTvJqBF5JDv0T2vYxesyxdJD2HyeeRJ2ZvKK0CEbETMRx7GcmazEGamESeKCKKf1YkEgFGJ86Vlz5F5JVeU0E1HoQk5zsf4xj6TkLsREYCbGKObMVGM9yqnZr4lNKwO5JEIK+6YaPhNB0p5JJWZE5Ka7vRJMC6I8iY17VDVONo+KvNT3rMGzfKcL4qo9K4IvxBqSruIvAUOw/frqZlgAipBB2nqwtk6nJWCIQVhhkN0vgcpk6oWVX9bW4rRtNzbvvvN/wE/zw6gGkd0AAAAASUVORK5CYII=",
    sunflowerRock = "data:image/png;base64,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",
    sunflowerTombstone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbBAMAAACQOIJYAAAABGdBTUEAALGPC/xhBQAAACpQTFRFAAAA//lNcj4493UiwMvcX8JL////+6kgL2ssNUIjTJ5Ii5u0PUhpWmmI97LFtQAAAAF0Uk5TAEDm2GYAAAEFSURBVBjTPdC/asMwEAbwG+OSrYN35wmaxS9gOuUBEkO24KUN1HhIxy6FSJOXQtzdxHbJ2qGWoUNooZLGdrHuXXr+E92kH9+HDg6AZqqU+oRxpucgCBYXnm+jKNosxuh9i4h/d0Mot6g6il5faGpNvO+lUWJDqRml+/QiQamwalWDxgprQ6nVkFphbf802iit1CgpTN3IepRuDdJOP+klqInq23UfOrXUROnPZ9cAV2ttumbseTuA4kdIg2u98zwXJtXprWl/Tx8381kCrHjJ+TPj7BjHj3B45eUqXOZ87yclOCysCl5VecWLFGCSrTgVGD+k3XaHZ+G+XJbpcEKHZTRP9PoHZxaqJaTK8/IAAAAASUVORK5CYII=",
    goldenCauliflower = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZBAMAAADd8CNTAAAABGdBTUEAALGPC/xhBQAAACdQTFRFAAAA4F0k/8gwxGA10WY48Kwk/Oug310n8oUQ+uF9v14z+IMb/8ERlrx86gAAAAF0Uk5TAEDm2GYAAADrSURBVBjTRZA9bsMwDEY5uzfoFXqDzr1Cl1ZDp6BosgYNIu8WMhcGDHvwGChdE0OVZhkOv0OVdH9MLXygHimRiArve/qPIq+uC3xi3C+E0Tb16o9Gm4DmFwvbMQu+/FDAJSeePh7upfVNB2ATUlNmryXRgPVU4o1OHXeIiHUacBUK4DrVIXDpZwrAlFre9+JJLhPQ3nkib8XL2ohlnFNiOWfulVQT78xPSkkseUtaa62yorRozdct0VGuapg8HGYy2h+vO6HC2UeEJuXKCdGxioYjeOe8/s+9bw2eB3eYN+f9Kca4rFE26ufkGxmmoPtNAl8aAAAAAElFTkSuQmCC",
    nft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGBAMAAADj6an2AAAABGdBTUEAALGPC/xhBQAAACpQTFRFAAAAywobPhkPQBkN/8UR+/fH/OlxPxkN/OdQ/udz/sUW9703+3B3NRMIfxYG+QAAAAF0Uk5TAEDm2GYAAAAsSURBVAjXY2BguMDAwMDLG8vLwHDzRsbNCwy3bp++dYGB10dmL1DiUvEFBgDHLAyI/BRZlQAAAABJRU5ErkJggg==",
    fountain = "data:image/gif;base64,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",
    beaver = "data:image/gif;base64,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",
    apprentice = "data:image/gif;base64,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",
    foreman = "data:image/gif;base64,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",
    mysteriousParsnip = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASBAMAAACgFUNZAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAA////PolIY8dN5KZy6tSqJlxCdD85woVpvkovjioIUQAAAAF0Uk5TAEDm2GYAAACBSURBVAjXY2BgYEtgS2AAgSSzZDUQzWaUZKYMEmJTTk4zAsulqSmngdVwpplNADMmTsuUBAuIek4JBAlxhnR0uIIYUz0q2lsiQYz2jo6KSIgMWG6qR8fMmR1AuZKOmeGlMzvcGSo7y4FgxnQG9hkgNZ0FDAyVM4FgOlA7O0iqgAEAi+wrLy11Yy4AAAAASUVORK5CYII=",
    carrotSword = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAAIU85TadvHUYzY8dNPolIvkov93Yi/udh/q40JlxCbq+vGwAAAAF0Uk5TAEDm2GYAAACHSURBVAjXY2AAAs4JDDAwoxPGYp/RWUAGM3NG5zQYs6MDzORiYMiY0dnGwLCAYckChvSZM8sYuLyATLbpldMrE4DMVQxslTNnTk8AMpauWrUsc1rWqlVRDFyhLl7Lspa4hC5gYFgVGuS1RDV0Fci4VUuDVKNWQazgWhq1AOZgQ2G4L4yNQSQAJuoubMakeeAAAAAASUVORK5CYII=",
    nancy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsCAMAAAA3k5qAAAAABGdBTUEAALGPC/xhBQAAAK5QTFRFAAAAMxQKUysaCmhziLAKDQYPEAgTUBU1hi9agkmYx5gJNxoQs3Egs3gzVigVQSBONxMKGg0ePh1KCUtTbDojfEQsQhsHKwoIRyZUp2IdjQ4IFAoYUmkJTCUVZjh4Mhg7OBMKiEwinl4eOwwKHQckBQIGsBIKRw4LLxY3DwgS3bWOLRc2NhpAeCwC7sOadkKKl1awum9Q/855USdhJhIsTw4L/7Iuz3kkAAAAWy4aJnISxAAAAAF0Uk5TAEDm2GYAAAGUSURBVDjLrdRpU8MgEAZgvK1nD6v2bm0OUopSdgnb///HhKQ1VkO1o++HZIBnWAgTGPv/rDf5C1mvrc1drA2iH0hZwNoXF09qyv1I/KAfmM18odls2z6UaO2XWSXPtT6UeOQ78yL+/Q38ijDWbE6nj4/TaflsHtV8vDQ1n5KmNURKsyBauLinkbKOmEVFnKkhxiTJ6yZJYszhJM/fXJSKJs8uk0gp387zStxUZOxSkZutuNXWQpFoohoNNYmWRctafbshWvd6yyLRFbpcRWWr19N6uxK/WGnMEwEqFwR6Mq5jM/SxH/flCgJQEinNlw0TzeeMljEoBfGS2HxOtLNxI0sSxzAeQxyXZGceV9kfG8VYxBuWyt1ZipOlFnDeRs6hReXJfzsCanFAbANHpMDfSMizfobA78MEeD/pI/J7ETIkwM3Sxmx4LkIEAYUQODwdQnAWgQAE2fAsUIiyTpYh0cDBEOmcdLIBXQ8E7FkuOXFMJC7Cu2Y0Gj10iS4pfB+uRncP3RXbJ0qy2nfxrorsv5xrxDsDtX3/pca/kgAAAABJRU5ErkJggg==",
    kuebiko = "./assets/kuebiko.59c84ed7.gif",
    nyonStatue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPCSURBVFhHvZddSFRBFMfnbi3RppUfYGWGabWFClpGEWE9GAVFEBQ9BBFREj1ZZFHQQz0UWoGPZRERvURBFAiZPpRgL9kHppWFJliZVIpmauvmzf9xzt1x3PuxsvWDy5wZ753/mTNnzqyGiIF1xSUiPWOB+Nz5xZRDOjTf07oq6njBswOq+I7d22ns2IGt1II9h8tFx4d2mMb3rnbxvqWOxt3w5ADEc/OCovl1qyXOrM5fLi0hqq7fFY31JEzzenHCJ1tbIB5ImEXi584fpzF15c9evaMHlOzfKQqLimHSFuFbN1wjkL9mlwgkJpmZS7OoDxEIwomL16ppLBr3bj9AY+j5UJaRJK1xXCMQDocE9hQgvLzaYO4mK/xXKyupBaqtA/EVm60I0ePqQGj4l7TGefmiWVr2wDE43d/bLUci4m9r6szTb54LPMDVAQYZLvfXcgLRUJMQVN24LK2I87o4+HgkSK1rDizLiSRV6vwswbnAFKzMlVbkRJTsO0TtGEaBf0hsW2WIpkctJJ4YrhZNZUfFrZoEkTz7j+E5AgdLSyms8qxbcDRUcY7CmMNmZ2oOiVc0nZ0k3tM/zXsEEH6s1inJAByFU0hYfAOHG+7k0d908Qudvd5zQBYYV1gcwGEUruD6+6K39tIkceDVAYoUJscK7dD/hmjhG0Ri7ZklYnhx2gRx4LgFXMlGfg+Jvp4umNZW2MFbhITF6tHHN1yi9fLsJQKmf8ZMEwmFDibCqvDo6OL8jtP2WRHAaucmJ4lQKET9wQGrANEF5JR8EAQ4JbwNEIdwICHRGBz4SWMA76rl2Sgq3yJG2+aIFH+6+NY6QDVfP2qYWD0FLKjDq+YVq+8p8xq+rD7hy+4T9SceCt9odwAdE+KYAODWg819HUyGd/A01F6x3oNzEEcUeBvw8C0q3zOhBwOL9/nSBs1w7SLrJTvUxIONu39DYbZ40thmFSEUILUURwM60BuDnKAk1MurDlaE1XEeIMxwAjci346xoOrFVIp5dQgzO4P21MkKskGsDk2XrScwuVOIo4nrt6VO1AhgRXYfQsTumQquEcARlD+vyAbq8eKxqRLVAWQqrwhinDRosf9cF3gsGlxLMI/TNnhOQgYOsXg8iNkBtyMbK645YFcN3XC6MVWiRmCqGW2H03y4jMyFHRutfzg44/8FiCYSEmX8U+ZjDBkTHMAPSjXr4wlOBU4P3ReKA9YWcDmNhzhfxwzEeV61bAOKwNebYerE83ipvynURXEk5u2l/KctgEFX4/9k5Idp+FMM8RddFghhHSJsbQAAAABJRU5ErkJggg==",
    homelessTent = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAApCAYAAAAiT5m3AAAEH0lEQVRYCdWXaUhUURTHj2mWZY6aqLSZJlhUWJEtRH6Jli8tUH1ogTCIFpKgiEIKSkKyPYyM+iBtRCstVFMQhREa0fLBolLLUSsTc2lyQavX/K9zrvc9Z5z3XhF14HnvOe+c87vn3HtnRqL/UdJTxmt2193LaiDDMGbNSSDWreYJsRLAME+MgOY4XVT45nmQlRy2faPn5WrODQs0jLaT2AlE1YDabTEzLe9xWlxfepYVTRj/mmxKn6pVFJ/QaksuaM+d+zXoduGWK2bQ4CFDaXnWIrILNw0GIHPPSuoX7qDTp04y3/ZoGswEQF/cqRDw36naFFitlhfAo114QLA/KFeNBdiB9wg2QrnNXK06WoX3CFYT+5rX1bt9mU3Zgv15man268dWelVVQlOnTBJpIiIclJg6hMIr3TuKXNU7/eWG3WfFgOKO4ur4klhHBPFT/eQLHTx0ROdm5n53AzM0NiaaPlRXiYTq3gKoiqrDH3F4AsG7gXVJPQk62pqlSYVIozLBATMrOjBXawx2t/4UptSadioKHUsFkQt0Lu1vO2hXzj79IgNULcEqFK1iOXKsgMoLK+lpbVfleHe79JN8oPeuDqbcA/mY6sRfy8UvECO0tq5e7BNnMEJhb1+3l1/T7aObO+elGPJpy8a1xDkwAu4RbX9hkfy1IsAvl/2kMzmX2EFAEQBZvybD87eALiZkUrawEKEfoQOivBpRRnbXqa663+mldg25waBCGdL9OjGQTydcAV/syhMwAHXQ/m2UNm6keABFtSyci3V1FHs8ICZcrAgrgyDAGNTc0kbt7gY1ljK8UBivHFzqE8rVgqGK7PniyzM0d903Gn1WrEXXdg7A4bk1yrufXuPq+DBSK1UXrEIvLrwnWQjVKQxvaYyitJtNIjUOhrpfZXedXmTXEDGh8yOTLdw57CtXGhD8uaw3ZX3sS2FxfTiPbhwxfLBOh1Je8aGbjQ3bg5socUoIzZw4W5iW988UxeoqTs+dowE6ZnISx1keQ6KSRcz3hjIxljx+RzmD2mjSioHkelQjbKhegv8E1N8qGR6X3EHccnGPp++erTmGpdCYoX6/Jf3lNGVHBx1BP6im9LX0F0f44dY7snL5xsSE2xrI9d37VuGicjrvjiHSbELeR0O4TmWozuhRJLjR9ZrWetrBUB6NAVb1pMQw2psUSsivimzxmeY88e/I+etldCIyhcxUoybyN0cxkBtLDksWdKngwyNhWjztiz8bhMN2bthovP8teTA/UcTz3VWTyVbjmOOeYQE4BEsqX6p+pufYIjyIf+EupmvOqz5jZcW+3s49t0HL14JFIrOtB3RV4xvRWhTB99aYv0cwnNH2yISRlFneSnkjwuReYVFsU5PCNmvb8YB51Zge51iA0cFow2LwGP3+Kf0XAj7QwEyXRjIAAAAASUVORK5CYII=",
    farmerBath = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAyCAMAAAADUYksAAAAAXNSR0IArs4c6QAAAGBQTFRFAAAAKSwxYjAxcz45oiYz5kA55DtEuG9Q9nV6PoBGPolIwoVp5KZyEk6JHm3VAJnb/5mc6tSq/+7u////NDQ03vr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa8VcxQAAACB0Uk5TAP////////////////////////////////////////+Smq12AAABy0lEQVQ4jYXUi3LrIAwE0Fw0GY0tkpry//96dyWMwaEt02lr+2S1fuXx+HmllH452szz+fxL0SyV9OXo3wKJWF+Svr8XiKSU6qsUs7ToRFJFlTGqUks6vFOaTKkY0hGSjuOYq8Pw+IiU6piNHx87qaY0Xk4YhpT66qtUxKWSZJwFVF/vYb0qZio+PMwyKZOBKkByKjGcutF8XcsVUA3EYaI34+zlB1whSOXTkGGiepQ3WhpX0coRTmxhMLGOaGmgBlTWQdHKkRb5KYhRglpLxGv5F4orvkbD5z+T8Ai8589/9av2Nt6bBx8Rm5PGcXwYHUF/VgrFoIZwg9bFcVsvdMs6F3McUanmlbKSecwfFSZlTLwxw6zMpEB8TzARb4hdgtvc35LYKvMH79P5VYC3ijGZjWZkOceLV0oOcSE8yBRs5tBB9ln4LdqRRZKdyCLGOuI/OFf+DEmxgwGOsvVa07goZJloF9mk1bpQK8RDO9/ObfNen53YZ8PR/pWhPtHTPMVnoU8ngcRvYkvihWaHmHWhbWuuCWzfUOY5YO/5Na6cw70D4hkSeWBE+PZooLgVyBOj8T6ZM++GVmtnCUdzmbuKgHuZm9rnv239B7duOoX5JphZAAAAAElFTkSuQmCC",
    pumpkinSoup = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAABGdBTUEAALGPC/xhBQAAADZQTFRFAAAAvWlXmY+FzL+x9aVzY8dNuKygTS4zvbCkJlxC/NCN3c6/vkov/q4093YiQCYrXDc9LRseXjx8QgAAAAF0Uk5TAEDm2GYAAABeSURBVAjXfc/JDoAgDEXRqiDja+H/f9aGooaFdkPuSZiI/qfY0ruIjC6W7AAoxWN0rZyYM3DG2TV5Vjn3YBu2yo6TB0Iz0DMYGU2HbtFLnp7QVugDhBYReR885Os3F70MBlYjZQKXAAAAAElFTkSuQmCC",
    cabbageSoup$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAMAAACqsJS4AAAABGdBTUEAALGPC/xhBQAAAMZQTFRFAAAA/v3/NDUzV1ZW/fz8//7///79//3+/v7+VlZZ4uPu4+PtVlZY4OLsV1dY3uPs4eTuWVdW4eTtMzM24OPr/v784OTt/v3++P7/4OPtm56j4eXtAgID/f/8pqmvAAQPAQMHpKet4+XrAAMK/f79/v/+4uXs4+j0AAICAAMN4ubsVlZWNDM3MzM3c3Ny////4uXv4uXwMzM1V1dW4OTuQCcf/v//MzMzAQEDY085JhMRUSxUaDhs6LeW9nV6tVCIcz45uG9Q8TQihQAAAAF0Uk5TAEDm2GYAAACqSURBVBjTbZDXEoJADEVj77333hVFEJQtgf//KZOF8cnzdM/unUwmAMSHgYRXxLxiCaKY4J+FIeUw/JnBmDVIbGYBXO5i6Hnb3d2TvRZpEc2X6jrUzKRUTK0O4OQ1ao1KYaVcBSdLUWt+aJQgnaMQe/MGfgExUfcKflsio1Cx9YWUXEZ0qTkRpJLm6lEHnithlJg/AU7ntWAO+wWvvZmOHw/bXh6TU7wZDl+9AS3DDbYZPAAAAABJRU5ErkJggg==",
    cauliflowerRice = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJBAMAAADwYwBaAAAABGdBTUEAALGPC/xhBQAAACdQTFRFAAAAyXFG5JU8/9Wm58CW/6lIuGdA55Q14YJTfU0186JGq3AtaEAslhA7IQAAAAF0Uk5TAEDm2GYAAABDSURBVAjXY2Bg4N69gQEEtoZGgyhureUmIIFNq1YVezMw8GwH0QcYTsyuWlWys4fhYFpaR0dHDwPPTBA4wMBwBgQYAAhBGqvY2/zhAAAAAElFTkSuQmCC",
    radishPie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAA9p2e9nV6+8dE/94f5DtE+7A3oiYz+6og02Ud93Yi+H8M1gAAAAF0Uk5TAEDm2GYAAABNSURBVAjXY2AgFqyC0R4TIHTGkk4wndZhBRJa1dGRnAYU4mpLNkvryFrJwLUKBFYARVRDRcNVg4Ai4YqloqGllQyc5WAA1DUTDBC2AAD47x3VaYOc1gAAAABJRU5ErkJggg==",
    australiaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUOAHM+OcSstTtXgBJOiaW80jpEYD4nMSkjMT6JSOU8RLhvUP///8uprNZGToFOYZhSWmJeecpPV5FIT9rIzipCZzlEYmJde7RhYs2yvTmJSikgMb1tUnM8OVpQas2ytOY8QWKBpNVEShBMi6S+1TkkMRhAczFQe7mtuU1GYsqwss9BS6BeZSQ+ZbNgZ9K4vR9DcVtXdciyuseprG2Am0Fdg1JQc81MUjFMc2qBnCA8YgAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAOACwAAAAAEAAQAAAEQNBJBYy9RmpZWVrDQAzZ5lRNkoRhuVXBJ4quVgksW3NGMYaj3QmDMfGMyGHSWFmamk6bMAmNKq0IwwFhdSC4zggAIfkECQoAAQAsAgAAAAsAEAAABkPAgAJgCBiPRmLKwGwmDSvVYjAgDIpEVSJBpWINp8TUSviiut2vwUq1fgNNZ4CIrNPrxzt+Xtzz/X97CAYHCH4IhntBACH5BAkKAAEALAIAAAALABAAAAU/YKAAhhGcaEBKT+meZJRMw0AMJukkSV3nBshgYbMBCzcfTuWi1G7Ak6sEM6VSpCvWqmV2q19vF2E4IL6IczcEACH5BAkKAAEALAIAAAALABAAAAZHwIACYCgGjkiirOUqGgPESCIBGxAGBqghllgMvlgtBHwlZImF2QscJjpZ1nb26JwTkfjjPZ+c87V/en58e3wIBgcIgQiKf0EAIfkECQoAAAAsAgAAAAsAEAAABkdAwIZDKpIASCTRc8F0jEpS6PMRmUaiIxHzWYi+WQDRAsaOtKQKqFQCo42kEhadBEDFx3qdqN/n+3iAUYKBgBkkGhmCGYqAQQAh+QQJCgAAACwCAAAACwAQAAAGR0DAhkMqFgFIANFzwdRuRyXJ9vmIRDQRSYr5LESj65ZouZpHY1IFVGqLpcZiSStNIqNEuz6vT/L7dYCBgH96GSQaGYIZioBBACH5BAUKAAAALAIAAAALABAAAAZJQMCGQyoaAUii54Kp3W6kJMn2+YiuuSgR81mIRlctyXItj8QVXGldEomNxpIYSQdEAcS6Pq+n8/t4d4B/fYR1GSQaGYAAGYuAQQA7",
    belgiumFlag = "data:image/gif;base64,R0lGODlhEAAQAPULAD6JSD4nMTYlLSkjMSkgKx8dKP6uNHM+OTAiLbhvUOU8RCogKyggKi0hKxgcKTEkKXtVKb1tMaRtMeY8QaRVMSkgKf+uMTmJSikgMXM8OTkkMb1tUo1iL6RvMs1pOYthMZwwObRtMb1lMTEgKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnDJdIK9QWpZRSmGoSjZtlTEF47lhqoiaZ5BCsatViEwO1eYy4w2HFaKvxySuNQpkccm5zkEBAYA6QKQXUYAACH5BAkKAA0ALAIAAAALABAAAAQ3sKUTmr2WisB7DsRSGIaiVBRRjOXZpCtpogESt3TAsPNbdR4fZkgZYorGT1K5RBoBgQFgCZgmIwAh+QQJCgALACwCAAAACwAQAAAEOXClE8K6eFHRqr8UUTSGoShWWBTlmQYia6JagDSyW1fk/F6eCsiSyVCKRiKythw2mUtAYABoAqrLCAAh+QQJCgALACwCAAAACwAQAAAFP+CSHEG5nCgpNE1pLiRRFJyhKAEcyIVh4zqe75YjIVhDIMnV+RVzJxeUhKqeqNYUNKvjXrdZbBYQGAC8gDM3BAAh+QQJCgAAACwCAAAACwAQAAAFPiCwZVqpAShKPlUFmapWOY4VTdNJzrWF6zKaxZcDrFoSItCkofyMpxQMmqrGrFUSNqXdUr1d7EWDuXgv5m0IACH5BAkKAAAALAIAAAALABAAAAZEQMAmoykWAUgA8VGpfEJHpabicFgsoIlGSrVaJlpu9QreLpsfT1lqLGbN2yQgSpTb6/YkPi/lI/d5gHIXGhgXfheHfEEAIfkEBQoAAAAsAgAAAAsAEAAABkRAwCajKRoBSOKoUvmIQJqkpuJwWCwTKIBItWInUW71OgFvNcvm00w0GrVEpBwQPc/v8bs8r7f3/X18dxcaGBd/F4d9QQA7",
    brazilFlag = "data:image/gif;base64,R0lGODlhEAAQAPUAAGqFOVJxQTlVMWp5OXuNOXOJMb1tUnM8OTkkMRBMi2KBOTlZMTGVMRiJgykgMRCRrDmJSlquxf/iKTGZMUp5MVJxMUFZMRmLgTaYMUBbMTpZMSkjMT4nMfngK7hvUBJOiffhK016MF2uwRSSqTOXNT6JSHM+OVp1MVJ5SvbiKWqBQXORQUFtMXOVMUqBOT1iMGh6O32TPkx7PUFUMlRxME9tMDhlMFF2MGl/L1JwMGp7O1FwMH+VTFuFQgAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAGTECA0GPiGI8coVJYzGAwnScmuQQUQ1BRdFq1ckKd0WcEIlGXV+hle1YWNc8tt1pEHrtePL6o7/L7aG2Af4BMgn2EgCUcGyWFQiWOgEEAIfkECQoAAAAsAgAAAAsAEAAABkZAgMfEARiPRuKMw2wmObYbpoOpFomhqYiKuXJCndFnBCJ5a9ML18uhTatdABHQdMqLSOQ8f9zz739PgYB/JRwbJYEliX9BACH5BAkKAAAALAIAAAALABAAAAZGQIDHxOEAjkgAMfMqOo/EECbWwViN0U5HVMVgOdLRZwQifTWyzqX7LcK6XqUR4CxC50kkMZ/c8+9/gIF+fCUcGyWBJYl/QQAh+QQJCgAAACwCAAAACwAQAAAGSUCAx8QpAo5IYiaHKxoBxBCmw8NYOVBOqDMSda5ZaeczApGwRM2ud/li0E6OzvrOIuNHInKfx/KTfn92goOCeoIlHBslhCWMgkEAIfkECQoAAQAsAgAAAAsAEAAABknAgOGAKCICSCTRUgGojEoEZSKJoCaTI5EieSQkWK2U2nikGOJFRbECZwNEI+IUhh+TUHtyH+XviX5JgIF6hIN+EAgOEIQQjIFBACH5BAkKAAEALAIAAAALABAAAAZKwIDhgCgWA8gA0VIBEFRHJYIykUQkrglCSpE8Eo+JllttSFKMLXFRURRaYrXRyBoTk8joHY/f85F+f4F8g31bfwEQCA4QiImNiEEAIfkEBQoAFwAsAgAAAAoAEAAABT/gZRxIaV4XaVUAMSAoSU1SJAWwLD3JM+WImaQhYQAXFUVB8UuZTAIgagpzTq9WbKyqJWm33ywWgnBAvpCzNgQAOw==",
    chinaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUMAJViM+U8RPrLLtefMT6JSLhvUHM+OT4nMbJUOLRkNikjMYpAN59SNohVM6FiNL5rNqJHOK5pNL5cOcRXOqRJOJRhMbRlMaxEOeY8QYMsOSkgMf/KKTmJSr00OZwwOb1tUnM8OYtAMTkkMdWdMbRVOaQ0OcVEOb1IOaQwOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEPZDJYo69R2pZgQggmG1MNQjfF4xblaghq1UICMvcscAiWWIY308orBB9xmMLd0wqc88ZU0g4KAhRBgGrjAAAIfkECQoAAAAsAgAAAAsAEAAABDcQFHOAvZa2w3s+zhCMY0UNghCogXkgLOkyY+weItkCFNB5vAoG0xteisZg8rNUJgkHBWFJmCYjACH5BAkKAAwALAIAAAALABAAAAU9IFMYx8GcKEMCQ+me5CA8QR2YZCIIAX+rB4TNhjssBj0isAQZFk+uEsyUSpGqVioWuJ12uVvCQUHoEsrbEAAh+QQJCgAMACwCAAAACwAQAAAFQCBTGEfJnCgJDFFpMuQgCFJgH/CRCDYf4CSEbfjLLQYTX5HkogyBuJMrSkJZT9VrKqrNdbFcbVZLOCgIXwK6GwIAIfkECQoAAAAsAgAAAAsAEAAABkZAwAckKooASCSxMrJcjErRaLPBnDCYI9FSxXS1IhK2mwUQQyOSCVsmGkUlLDgJgJqPdDoxr8fz739RgYB/HCIaHIEciX9BACH5BAkKAAAALAIAAAALABAAAAZGQMAHJCoWAUgAsTKykC5HpWi02WA2J4xIarFivlop6esNE0Ojp+m7JRqLKPM2CYgS6fg7PqnfS/1IfXuCdBwiGhyAHIl+QQAh+QQFCgAAACwCAAAACwAQAAAGR0DAByQqGgFIYmVkIV0uoqRotNlgrJ4o0WLFeDFaEcnbBQOIoZHz0jETjcZMGEkHRM/3Op2or/P7UoCBgn99HCIaHIIcioBBADs=",
    finlandFlag = "data:image/gif;base64,R0lGODlhEAAQAPUAAKSuvVJpgxBMi4uNpFpdc6yyvb1tUnM8Of///zkkMZyJiykgMSlZg3uBlDmJSpyhtIuNnKShrKSltIuRpF9fcrhvUD6JSD4nMVVohXM+ORJOiSkjMYqPoJmJjZSltHN9lIOFnJyhrLG2wo6Llo16f298k1pkfH6ElyxYh6y0w4KDknuAka6zvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFQiAgVtllnpeoimWHaBoipytQcm881/aFwUANbVX6BYW8EiUnQwxVJdSJ16NSS9bkM1vlQrdZrJcFplouG8sYYFFzQwAh+QQJCgAAACwCAAAACwAQAAAGQUBAJXMBGI9GIunCbCYvo5NGg6gWiSXEtIq4XjDTsMZrEk+9F9HWCiACms52EYl004/2u1z/5O/1FhcbFnwWhHpBACH5BAkKAAAALAIAAAALABAAAAZAQEAlc7kAjkgAsaMqOo9EDgKlQViNRIxma0VgL9qt+EtJibffIrX7PTqLUGMySZzT5XYl3l7P6/0WFxsWgIR5QQAh+QQJCgAAACwCAAAACwAQAAAGQ0BAJXMpAo5IYmeFKhoBRA5Cg0JYL9ALRsO1IrDELXcMvlBYqLGm7Kxes0gnFo6s0+1HIj453+v3d3YWFxsWgBaGe0EAIfkECQoAAAAsAgAAAAsAEAAABT0gYBxJmQAoSioNw5hqMiCCMCHISQa1gOeAXa+nSxAKLmLQVJLgiikAbBmtkqrRKza25Xa1WEdi4eg6ytsQACH5BAkKAAAALAIAAAALABAAAAZEQIDhkCgWAUgAUdFgMEBHZWKAEAgQIURCGrBaEVqu17slEgpOj7VsNH7CxCQyGpfL63YkPr+39+9beQAOCQsOgoOHgkEAIfkEBQoAEgAsAgAAAAsAEAAABUCgZBxJaUooqTQMM0RJmgyIICAIFJOB7SO7RM9nCxIKrQdAEDSZYBISaiqJRa3UqTSrxXK33GtYNnYkFo5yOhwCADs=",
    franceFlag = "data:image/gif;base64,R0lGODlhEAAQAPULACo4WD4nMT6JSCBBa+U8RLhvUCkjMRJOif///3M+OTA6WTQ4UyM/ZyQ9YyU8YcVtcyBAajmJSikgMTkkMSk4WjE4WiA8YlJpg3M8OeY8QRBMi6Q8QYuNpLSVnL1tUs2NlFJqiiBBbCg7Xl9qgaSdpCU9Y0JTciY7X21+mIqUp6Rxe3uBlL2VnJyltJw4Qb1VWnswOaxlar2JlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnDJkoK9QWpZ1TkIQhDZtlTDF47lhqoiaZ5BCsatVgEwO1eYy4w2HFaKvxySuNQpkccm5zkUBAwC6UKQXUYAACH5BAkKAAAALAIAAAALABAAAAQ3EJQUgL2WrsB7Dg5zIAhBVNRwjOUJpCtpomDc0kHDzm/VeT2MkCLEEIsfZFJ5LAoCBoFSIEVGAAAh+QQJCgALACwCAAAACwAQAAAGQ8BFIREILI7IBVEhKjqPxMEBhEAQCMbo4VC9ZgNSrhWrDABCYm+5OOqSiUdnEWpMJuF2JD5f5tP9fXwCAQYCfgKGfEEAIfkECQoACwAsAgAAAAsAEAAABkXARSERKC6OSKKiZCoaF8TB4ZBCEAgBaEB6QFixWq73miUCTqgxmOgkfcvZozNORNqP9Xsyrtf28Xx6eXoCAQYCfwKIfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAgAczKU4ASCSxYrmsjMoJRKNBsDKZI3FaRWC1UirCmwUQKc0WGWycqL7mYxIaT9qjdzsxn9zz639+eRETEhF/EYd8QQAh+QQJCgAAACwCAAAACwAQAAAFQCDgYVNZAihAVtbFdac6QZqGIE82ybSNZDpe7QbckSgtzqcoM5U2QVIKFZNOp9YrKqvlXr3YnRYQmUgiYzJ6HAIAIfkEBQoAAAAsAgAAAAsAEAAABkZAgAczKRoBSGLFcuHIYpPkBKLRIBAZV5RItWIz22n1mgEDiBSm82UmGo2wMHIOiJ7t9DkxT9/zpX+AgX58ERMSEYERiX9BADs=",
    germanFlag = "data:image/gif;base64,R0lGODlhEAAQAPUNAIEuN/6uNI1JNeU8RB8dKHM+OSkjMT4nMT6JSDYlLVUnMbhvULJOOqZSNzEiLE0mL0MkLrBOOaRIObRZOd5dOYtIMTmJSikgMb1tUjkkMSkgKeY8QVIkMRgcKYMsMbRMOXM8Oc1dOc15Mf+uMTEkKVIkKaRZMZo+OM18NjkmLkIkLzUiLGsqNKBMOKhUN8l4Nj0jLcJXOiwhK6xVMaxMOTkgKd55Oe6dMaxVOTEgKUEkKd6JMZRAOc11MQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLDJVY69R2pZE/lgtjWVAoYjeQBD64pbxbhvWglBrsNahV0pVTBYGdp4RmGyhzQWl5xmEHEwIKANxDUZAQAh+QQJCgAAACwCAAAACwAQAAAGP0DAonAAGI9GYurAbCYPqhVhOi0SWVSq9XAaeL/b1hcMIB5QgXR6C2g6y0Ukkiifx+tw/FOfxyMOBgh6CIJ4QQAh+QQJCgASACwCAAAACwAQAAAFPaC0FMchnahEJk7pnqTyQERNmCQw2DV+MIOg0CeICIO+UiPADPhOrhLMlEqRqlYqVqXFXrdcMOJgQIjN2xAAIfkECQoADQAsAgAAAAsAEAAABkTAxqJwKDaOSGLCISsaG0QFgQCbEg7QA2AwsF6zDK54gCUKXrFx2XlwBd5rJPtIRNrp2Hsyr8/28X9+fQgHBgh/CId9QQAh+QQJCgAAACwCAAAACwAQAAAGRUAABpQpZgBIJJFE0miMygynQ61Rj0TPZkvtYDOfrXjzrYhoIfHXmJmNRt8kAAogyu/2ezKvrx/7foCBfRYZFxaAFoh9QQAh+QQJCgAAACwCAAAACwAQAAAGREAABpQpFgFIAJFE0jiPygynQy1RM1HPZru5Rj9cLpZYEUkmIcpmbDSaRuwkEkqU2+v2JD4f5SP3eYByFhkXFn4Wh3xBACH5BAUKAAAALAIAAAALABAAAAZGQAAGlCkaAUhiLqdpajLJDKdDpeqgRM9mu+1gMx8u91vh4Xo72+ZrNN6+yDgACiDK7/Z7PK+v0/t8eoFyFhkXFn0AFoh9QQA7",
    indiaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUAAM2RSv+uMVppi6x1MTkkMb1tUnM8OTGZMXOFaikgMTmJSkpxWmJ1YmJxWpShi72li72RYhBMi72BMZxhMbR5Mf///3OZe5llMz4nMT6JSP6uNHM+ORJOibhvUCkjMVppib6ljWdwXr6TYJKgjDaYMZxlMb2BOWKJc7R9MV15asmRSj1aTqFuOL6cdqh7SV9yXnyIdaiijIxcM7Z/PKx9SmKBapSui2JpWlFtXLZ7Mqt1N7F/PGJ1YFJ3ZQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAGSkCAsLPBGI8YoVJYvGie0OQSUBRBo1MqBlThfCpg6bI4qnw44IpYWQyR3vA1E4nMau32Ij6r34/le31+c4NsgHYZGB4ZhQAZjH5BACH5BAkKAAAALAIAAAALABAAAAZEQEBngwEYj0aiDMNsJjGumWY6LRJbVKoVE6twPpXwFlb5cMKVLeZFare3gKYTQETa6/YjPk8v8vt/gHwZGB4ZfxmHfEEAIfkECQoAAAAsAgAAAAsAEAAABkZAQGeDwQCOSADxwio6j0SRRqWpaoxEUMVaxWJGFc6nQvaGUh8OueItrkhwkvfoLEKNySQxr8fzlX58e3+AhBkYHhmGin9BACH5BAkKAAAALAIAAAALABAAAAZIQEBngykCjkjiRZcrGgFEkUazm2owUAyowrFes6PK51MpY4khXo9TrpydGBxp/kbCj0SkHo/dJ/t+WYF8g4KBGRgeGYMZi4FBACH5BAkKAAAALAIAAAALABAAAAZJQEDBQCgSAEgksTSQoIxKAiRANVGPxEclIqAGsARHRRCpmMENxuJkroCNBMThAE4CoACifa/fJ/t+eUeBgoSFgQoECQqECoyBQQAh+QQJCgAXACwCAAAACwAQAAAFROBVGERZXuhFToMkUadKQEEdAAEhP1UkVDUdyVERRCpIIaHBWCwsSZmphDgoU6gYCcvdclPer0yMCn/NWAUhoSAr2uIQACH5BAUKAAAALAIAAAALABAAAAZKQEDBQCgaAUjiZCBpUghJAiRApdKgxEclIqhUAliCoyKIeCvhBmOxqNnQAKLReAsj7wBoXI+/E/t4f4BRg4SFgoAKBAkKhQqNg0EAOw==",
    indonesiaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUMAK01PXM+ObiLkLhvUD6JSOU8RCkjMT4nMY4yOpOHjP///7NgZ5wwOaw0Ob22veY8QaydpIswOTmJSikgMb1tUr00OZSFi3M8OTkkMb2JlNW6vbSlrLRhYqQ0OaQwOZQyOrY2Pr2fo66ipot5e5SBi6aJjpoyO6Y2P7Z2fLBKUqufo4MxOceusqqcoaY0PK+jqLg2Pp0zOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEO5DJEY69R2pZUflgtjEVAIYjeSznJ26VoMz0q1UJXacVdqUqILAi5NmKQeTtWCQqOUwg4WAgPBkEKzICACH5BAkKAAAALAIAAAALABAAAAY+QMAgcAAYj0bi6sBsJg+mU2E6LRJTVKr1gMpWAcSSYkzeHlTk8RbQdIKLSCQxLofT3/dnHn8nHAwEeQSBd0EAIfkECQoADAAsAgAAAAsAEAAABkJAxiBwODCOSAYR8Sk6j0RAAVSoFozEhdWKPQgU26vykAgpzuduUYRWdI/OItSYTBLrdjp+vJ/3+XsEBwYEfQSFe0EAIfkECQoADAAsAgAAAAsAEAAABkRAxiBwKDKOSCIi5ioaGURAoQCbFg7Qw8JqxRIFCgXXe0i0WOEw2flKk5FObBZJPxLr9DveLt/r/X11BAcGBHsMBIZ7QQAh+QQJCgAAACwCAAAACwAQAAAFPyBAXViJAShKRkzTmSrWPHRFnyRH7w+OZYrgzmeBODRBhc+E2QR9KQAMQIpaq9YUNks9cbtfMFeCmUi+kjM3BAAh+QQJCgAAACwCAAAACwAQAAAFQSBAXVhZAihARkzTeKeKNU/9VA8mc7atkxmFUFH7YSwQh0MjNJpKG4UxhYqRqNgrNqXdyryo7lZMlWAmErAk7Q0BACH5BAUKAAAALAIAAAALABAAAAZFQADlgikaAUhihNFodjBJTONBpTKgRE61isVkFGDwo0uCOM4aRddoHHWRcAAUQIzb63Y4Pk+f8/d5gHESGBMSfAASh3xBADs=",
    iranFlag = "data:image/gif;base64,R0lGODlhEAAQAPUNAGWJXj4nMeU8RHM+OT6JSDaYMSkjMbhvULiLkJKgjEBbMf///6A6Q6Q7RD9pNjltMaNFTUtvM5w/SKxIUE+ESKpFTqI8RUBkNk9xR0NyO3uUdaJHT6NDS0FUMqWVjnM8OTlpMaRESqxIUkptMTlxMaxASjmJSikgMTkkMUFZMeY8QTGZMZShi5w8Sr2JlGKJWr1tUkqFQaRASpw4QaxMUlJ1SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPrDJM4K9QWpZVflgtjUVAIYjGSSL0C6LuFUI7MKyVjFC7+ccDCalIhIrxhQyOQMml8xgVOckEgIGwrRB0DIjACH5BAkKAAAALAIAAAALABAAAAU9IHAMAWCeJtkFbJsGWFbMc0lqNG0H3iL4i8VuE/wFdwGOYLncAVouAAlFnVJP1qu0pN12vVpCwEDoEsraEAAh+QQJCgAMACwCAAAACwAQAAAFPyBzDEHAnChDKlfpniRQUEVdmGSy2DUeIAtBcLHwSSpDoq9kETgFvpOrBDOlUqQr1qpVcbXZrldMCBgIZHQ3BAAh+QQJCgAMACwCAAAACwAQAAAFQiBzDEHJnCipOE9pMiRQFNFcBHCQLIJ954iFUCDEkSSQCbGYczUEUCPu5JqSUNjTNZuacnNfrZe75RICBkKYoP6GAAAh+QQJCgAAACwCAAAACwAQAAAGSEAA7IMqogBIJDH1ID2MStRrRY1Rj0TWQrWgrrAo12LLXYBbslJpbAYQjSiZSgVOAqDuo91O3PP1fnmBUYOCgSYoJyaDJouBQQAh+QQJCgAAACwCAAAACwAQAAAGSEAA7IMqFgFIADEFIpEeRyXqtaquRiuUlLVQdataomvRJS/CqFaoVBKR0cZiSIVOIqNEuz6vT/L7UoBIf32EdiYoJyaCJouAQQAh+QQFCgAAACwCAAAACwAQAAAGR0AA7IMqGgFIYgpEaj5QSdRrRaXWoETWQrVdrLAo16I7BrdCpTRtATYaZ2CkHAAFEOf4O16u39vrfn17gnMmKCcmfgAmiX5BADs=",
    italyFlag = "data:image/gif;base64,R0lGODlhEAAQAPULADpZMf///3M+OThyMbhvUD4nMeU8RDaYMSkjMT6JSEBbMTllMTlnMUFUMjltMTphMThzMWSPXjaIMWuCZOY8QTmJSnM8OTkkMUFZMWKJWrSVnMVtc82NlJShi6Q8QTGZMTlxMTlZMb1tUikgMZSoj1J0SqahoDpnMXubdYOVe8WVnKS6pKR1c8VhaoMwOb2JlKxlapw4QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnBJIoq9RWpZ1TlBYBjZtlTDF47lhqoiaZ5FCsatVgEwO1eYy4w2HFaKvxySuNQpkccm5zlMFBAJ6SKRXUYAACH5BAkKAAAALAIAAAALABAAAAQ3EBBRgL2WtsJ7LotzBIFhVNRwjOUJpCtpomDc0gXDzm/VeT2MkCLEEIsfZFJ5LCYKiIQyIUVGAAAh+QQJCgALACwCAAAACwAQAAAFP+BCCEWxnOhCKk/pnuRwREFgGGZ8HPWdFwMJz4ZTFQCQoc9YmvSKpJOrBDOlUtErKqs1dqtfbzdRQCS+iXM3BAAh+QQJCgALACwCAAAACwAQAAAGRcAFQVAoLo5IouJUKhoXxMHhQAoYDAVoQXoIWLFarveaJQIYqDGY6DR9y9mjM05E2o/1ezKu1/bxfHp5egkFCAl/CYh9QQAh+QQJCgAAACwCAAAACwAQAAAGRECAyHIpXgBIJBGzyKSMygvo8wmoKJQjcVoNYLVSasCbBRBDzRUZbLywvuZjEhpP2qN3OzGf3PPrf355FRcjFX8Vh3xBACH5BAkKAAAALAIAAAALABAAAAZFQIDIcikWAUgAEbPIdDRH5QX0+QQCG8pFSrUGKFpu9QreEkPNDqcsNRY9YWISGZXP5/Y7Mq/n3/14W3oAFRcjFYOEiINBACH5BAUKAAAALAIAAAALABAAAAZGQIDIcikaAUgiZpHpvGCX5AX0+QQClFiUSLViKdtp9UoBA4ghprNlJhqNrjByDoie7fQ5MU/f86V/gIF+fBUXIxWBFYl/QQA7",
    japanFlag = "data:image/gif;base64,R0lGODlhEAAQAPUKAJOHjL63uikjMXM+Of///7hvUD4nMT6JSOU8RJmJjadvdaGWmsOYnLuOk6iJjo16f6mfo5yQlbKWmjmJSr22veY8QbR1e7SVnKyhpJSBi72dpL1tUjkkMZyJi6yNlL2JlHM8OSkgMbR9g6lvdcuOkrOVmsBscqiMkamMkc15e6R9g6yFi5SFi8V9g7ShpLR5g8WVnM2hpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEPFDJMoy9RmpZE/lgtilVQCDoJ27lmRKr1qKIOpIGAIZ3hV03XDBYGfZiRmFShjQWl5xm8GAQHKCKwzUZAQAh+QQJCgAAACwCAAAACwAQAAAFOyBQDAZgnib5GGybGpFEzHNJBgSi18Cd7wSbAfJD8EgGB+1Yarl6JRSKJJ1Gq1DsS5vFHgyCg/YgxoYAACH5BAkKAA4ALAIAAAALABAAAAQ50JVhjLvY0bSqv1RAMERJWCGBrCVqiCvSagbQxDNVKeZJX54KyJLJUIpGIvK3ZC6Py4NBcGgeqssIACH5BAkKAAoALAIAAAALABAAAAZCQEVhYCgqjkhiAlUqGhXEAAFhIlgNUIMUwb1mt10Clgg4kcJjp2FkFWeR6iMRSZdj68k7/r3n7+d7BwYCB30HhXtBACH5BAkKAAAALAIAAAALABAAAAZEQMAGxClyAEgkseP5iIxKDoVQqbQIhCNxWq1gtVJq9QsgslSflDdbNhZXZGISAG3P7/J7Mq+39/19fHcTHCETfxOHfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAwAbEKRYBSACx4/lYXkclh0KoWGEEjpRqrRCy26r1qyWympYYWWosusDEJDIal8vrdiQ+v7f371p5ABMcIROCg4eCQQAh+QQFCgAAACwCAAAACwAQAAAGRkDABsQpGgFIYsfzsYgunCSHQqhYCZgokWqtEAjaafUKBhAzTMtHUyYajZkwcg6Imu30OTFP3/Olf4CBfnwTHCETgROJf0EAOw==",
    moroccoFlag = "data:image/gif;base64,R0lGODlhEAAQAPUKAIgwOeU8RCkjMXM+OT6JSLhvUD4nMa01PSZZEY4yOpwyO5oyO6Y0PIMxOZQxOos0Maw0OeY8QSBZEDmJSjkkMaw4OSkgMb1tUnM8OYswOZwwOZw4OaQ4OZQ8MYc3NY48M6o6Op0zO7Q0OYMwOaQ0OZQyOpo4OKE5OYU3NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEOFDJMoy9RmpZU/hgtinV8SHhSBomigbiVp7pWAFgLWOYuvq+ClAlHO6MRyQnhiwiCQYBQakgTI0RACH5BAkKAAAALAIAAAALABAAAAQ2EJRhgL2WNsN7NgsTjGNFHSNCmgaqqgHrpCtAGQpZ2lXn8ZggJYgZEj9HZNJIJBgEhCQheowAACH5BAkKAAoALAIAAAALABAAAAZCQEVhYDAojkgFMVEqOo/EQ+AUqAaM0SrCijVIt9ur0gAwBcJiYhFlTRsVziL0nUQS68k7fr7n9/V4BAYCBH0EhXtBACH5BAkKAAsALAIAAAALABAAAAZBwEVhYCgujkhiIsQoGhfEQyDwmQYMUIMUgbBio9buNQtQgMRjotPjzSKdWDdyLqcfifZkPI/P1+kEBgIEfgSEeUEAIfkECQoAAAAsAgAAAAsAEAAABT4gcGFUSQEoSmba9pgqBUWRxNEnOUs0Dug0CS+So7A2nV7RRNH4SCkA7HeKRqHWFDZL5ca8Xe6EYpl4J2ZuCAAh+QQJCgAAACwCAAAACwAQAAAFPiBwYVRZAihAZtq2PadKQVEkRVxEyfR967zaD7hqbSq1HclU0hB3KUCMFK1Sq6krVrZFabHf6IRimXQn5m0IACH5BAUKAAAALAIAAAALABAAAAZCQMAFQykaAUhiRrNpaihJCiQSkVBJUOLUao1kpdSuF6BkNkVjotE4+iLfAChZDn8T6/A7Prrn9/V4ExQWE30ThXtBADs=",
    netherlandsFlag = "data:image/gif;base64,R0lGODlhEAAQAPUNALhvUCkjMf///+U8RBJOiT6JSD4nMXM+OYqPoLNgZ7iLkI4yOl9fcj5MablMVJU3QExefEFTcac9RrZ2fIMxOUdXc0FScZ1IUKGNmJ0zPENUclNkgZ43QLpMU0JUcr1tUjmJSikgMXM8OTkkMb2JlKQwORBMi0phg+Y8QYuNpDlMakFVc4swObRhYpw0Qaw0Ob1MUkFZe6Q0OTlIYqRIUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLBJcIy9RmpZ1/hgtjVVAoYjaShC64pbhbhvWjFErsNahV0pVTBYGdp4RmGyhzQWl5xmsGAIFKCNwjUZAQAh+QQJCgAIACwCAAAACwAQAAAFOyACHAZiniZJGWybGpc0zHNJTjRtG5jg/7vKD4ggGSyEZHKHaLmKJRSKJJ1Gq1DsS5vFFgyBgrYgxoYAACH5BAkKAAwALAIAAAALABAAAAU9IAMchsGcKEMuT+meZDI4Qz2YpCLYNW4ggqDQ14AIg75ShMAk+E6uEsyUSpGqVipWpcVet1xwwRAoiM3bEAAh+QQJCgAMACwCAAAACwAQAAAFPyADHEbJnCi5cFlpMmQyDN08GLChCIJ95wieUIAjNTSbYdFl8BCeSxTzREJZqbhrKqvNdbFfb7dgCBS+hXM3BAAh+QQJCgAAACwCAAAACwAQAAAGRUDARzQqjgBIJJHlesmMylELRYVRj0SSYEtFYUeprVjwVa1iJ/HXOFqZTN8kAAogyu/2ezKvrx/7foCBfSAjISCAIIh9QQAh+QQJCgAAACwCAAAACwAQAAAGRkDARzQqFgFIAJHler1KR+WohaqiYKiRlCToCqpaYsrrDY9Uq1js1DUbiyuTOYmMEun4Oz6p30v9SH17gnQgIyEggCCJfkEAIfkEBQoAAAAsAgAAAAsAEAAABkVAwEc0KhoBSCLL9WrKRslRC0Wl0qBEkmC7RWFHKS73q1rFzifB12icfZFwABRAjNvrdjg+T5/z93mAcSAjISB8ACCHfEEAOw==",
    phillipinesFlag = "data:image/gif;base64,R0lGODlhEAAQAPUNAL2tpfKsRBJOifrLLikjMXM+ObhvUD4nMZOHjOU8RD6JSJmJjf///7ighKaOcb2geaqDb6CKgK6ih3Z3bsahfqqRd42Dd6mRd6VZWzlZg5wwOTkkMWp1e71tUqSVg+Y8Qb2upJSFi6yRc5yJi//KKbRxYhBMi/auQb2RezmJSikgMXM8OaxMWkFVc82Je6Q8QXt5e1ppc3ssOTlVeyA8aiA8YpSBi7RIUqw4QQAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEQLBJU469R2pZV2BCKGRbUwHMAIbkdg6BypbmgapJ3moV8uU6WgVzodWMxgpSuFsenbzmUgnlSI2KA0FRbSi4zggAIfkECQoADwAsAgAAAAsAEAAABDvwmXKevZauw3s+QMMIpFBRADOM5AkOwdo+FKIySe4eDp4nrkfHQ6tgMJQj0qgsNj9PZ1NxICieimszAgAh+QQJCgANACwCAAAACwAQAAAFPmBjFMfRnGhDLlHpniTASEItmPEwMDZ+yIFdzYd47BJIXwmCTKpMDVcJBk2hSNYUNkvldr3brOJAUHgVZm4IACH5BAkKAA0ALAIAAAALABAAAAVCYGMUR9mcKLlUVmk2JMAMk2Af8AEMAWMLuNhs4APmEBcKI8EMug4YZsKJep5IqOwVp01xuznwVhwGKw4EhVihBocAACH5BAkKAAAALAIAAAALABAAAAZIQEBntSluAEgkcSTywIzKDYhBYsRMpiMRRDqRsFnAlspgYLWbkAjl+rjRxs3rLT4mofWkPrrXE/tJf4B5g4J9KRsqKYMpi4BBACH5BAkKAAAALAIAAAALABAAAAZIQEBntSkWAUgAcSTycFpH5QbEIDFMGdNGCiKdrCYtt8r4hLfEkAhVYn0+aKNRA5cmkVHifa/fJ/t+doGCgYB7KRsqKYMpi4FBACH5BAUKAAAALAIAAAALABAAAAZLQEBntSkaAUjiSOThzGib5AbEIDFMplqUCCKdrNjttMr4fEximwhVuuE+YqNRJkbaAVEA8c7f8+1+f3p5goF/hncpGyopggApjYJBADs=",
    polandFlag = "data:image/gif;base64,R0lGODlhEAAQAPUBALiLkKI1PsnDxqGWmp0yOykjMXM+OT4nMeU8RLhvUD6JSJmJjb63urNgZ////6g8Raw8QayhpLSutL22vbRhYpyJi6Q0OXM8OTkkMb1tUikgMTmJSpQwOb2JlOY8Qc3GzayhrJwwOaw4QZYxOqQwOamfo416f6E/R7uhpbZ2fKAyO7arrsrEx6o7RKI1PayhpqE1PqyipgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgABACwAAAAAEAAQAAAGRMCAMGE4GI8HoVJYXDie0OQyUGRAo1PqAXB9SpfFBmJM/iqLI3I5W0Qes1o4vChnm+tx/Plep+uZfHAKBwUKfwEKhnhBACH5BAkKAAAALAIAAAALABAAAAY+QEDCcAAYj0ai6cBsJg+llWM6LRJRVKr1kMpWAcQTYkzeHlTk8RbQdIKLSCQxLofT3/dnHn9XHAoKeQqBd0EAIfkECQoAEAAsAgAAAAsAEAAABT0glBjHAZ0oRC5D6Z4k4whO7ZgkYNv40SC7m+pAeCCOx14pgET0Tq4SzJRKkapWKna4nXa5W8WhoOgqytsQACH5BAkKAAEALAIAAAALABAAAAZEwEDCcCgGjkji4hUrGgNEhsPBmjoO0APAasUSGwgE13sYwVrhMNnpSpORTmwWST8S6/Q73i7f6/19dQoHBQp7AQqGe0EAIfkECQoAAAAsAgAAAAsAEAAABT8gkF1YiQEoSlbRJJkqNjn0R59kR+8OjlGe4M7HsVggQY/PhLEEfSkADECKWqvWFDZLPXG7XzB3g9FsvpszNwQAIfkECQoAAAAsAgAAAAsAEAAABkVAQOaCKRYBSACxEplMJEclZuKoOj4OjLRjtWqJFI/YU/1iOKQ0RGw2FkkecxIZJc7v9nsyr5f2kXx6gXMbGBobfxuIfUEAIfkEBQoAAAAsAgAAAAsAEAAABkVAQOaCKRoBSGIlMmlKMEnMxEGlgqDETrWKxVA8YLCjy7GYLSJP12gMdZFwABRAjNvrdjg+T5/z93mAcRsYGht8ABuHfEEAOw==",
    portugalFlag = "data:image/gif;base64,R0lGODlhEAAQAPUNADpZMXM+OSkjMbhvUBJOiU56MPfhK////z6JSD4nMTaYMeU8REBbMTllMVF2ME9tMFRxMEFUMppQOLh2TXJ8O1FwMGdrMj1iMIyHMYVyNHSCSUFZMaQwOaxIOcVIOb1IOTGZMVJxMZxhMXN5MfbiKb1tUjlZMTmJSikgMRBMi3M8OTkkMUp5MeY8QZRpMbR9MaRQQaQ4Ob00OZwwOaxEOaQ0OYMsOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEP7DJEZK9SWpZmVJLuGRbUxWKYYjkdhoHsY6lmaAqW1fAJ9KlCuZSsxWLleOupeQwm8mmJio1VhEJAaLaQGybEQAh+QQJCgAAACwCAAAACwAQAAAFPiAwBAlgniYZJWybJo2jLPRSkoViGPWdFIYDgWcDkB46YpGUgMx6xlLLFUVZSVYUNvvidr3bLCIhQHgRZm4IACH5BAkKAA0ALAIAAAALABAAAAU8YDMESdKcaEMyV+meZKFgS72YsaHbeCIfBEOtB9DshipXxnZLnlwlmCmVIlGr06tTu9VatYiEAMFFkLUhACH5BAkKAA0ALAIAAAALABAAAAVBYDMESdmcKMlUVmk2ZKEY02IncFIYh2EvuNiM4APmABVK0UhySX5B3MklJaGuJys2Jd3mvNnuVrtFJAQIMCLtDQEAIfkECQoAAAAsAgAAAAsAEAAABkVAQEm1Kq4ASCRxExq5jMoVC0QiwVqtI5FFOqSwWcCWWsVqV6bmC3w2rmJm8TEJlSfvUfydqE/y+3aAf3onKygngCeIfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAQEm1KhYBSABxExqJOkfligUikVqf1krKIh1SVy23GhYTTU2Rp2U2GjntJDJKlNvr9iQ+L+Uj93mAcicrKCd+J4d8QQAh+QQFCgAAACwCAAAACwAQAAAGR0BASbUqGgFI4iY0EtFmq+SKBSKRWq1alMgiHVLX1nZaDYsBRBPTKTsTjUbbGEkHRNH3Op2or/P7UoCBgn99JysoJ4InioBBADs=",
    russiaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUAAEFhgxBMi5Q4QbSyveY8QbSutL22vTkkMb1tUnM8OZyJiykgMTmJSpQ0QUo8Wv///4uNpLhvUD4nMZmJjYqPoEBghk89XJA0QSkjMRJOieU8RHM+OT6JSJQ2Q7CwupI2Q763uo84R66vuJA3RYuNnI6Llns3SD5ReG98k6qkq5Q2Qo16fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFQCAgRptknpKoiuX0vHC6AiUFxzMtVVnvy6uSxffLlS6apBKoKqFOOV00WpoamVZptom1VresbpQjwXDAAM45GwIAIfkECQoAAAAsAgAAAAsAEAAABj9AQGQjARiPRuJKwmwmJaXUYzotElFUqlVyyni/W9MXDCBKVJp0egtoOstFJJIon8frcPxTn8dzJBgcehyCeEEAIfkECQoAAAAsAgAAAAsAEAAABkJAQGQjkQCOSABxAio6j0TKQ/SoPozESsZaxUosmbDYexmJw95iR8PWeI/OItSYTBLrdjpeqcff93yAHBIYHIKGe0EAIfkECQoAAAAsAgAAAAsAEAAABkRAQGQjKQKOSOIEBCoaAUTK4+GZPiRQSSWTsV6zFq44gyVePqFx2SnpaN5rJPtIRNrp2Hsyr8/28X9+fRwSGBx/HId9QQAh+QQJCgARACwCAAAACwAQAAAFP2CEJEd5RChKKoZRmOoBPfRAnyQQ7PSDH46dMPBrGAXCn+nQIBB+qQgsQopaq9YUNks9cbtfMJdxWDC+jDM3BAAh+QQJCgARACwCAAAACwAQAAAFP2CEJEdZRmhEKkZbnOoBPfQzPEcMBHxA5yRHrwc8NI4NAa9oKjUIxRQKRpJaq9YUNhvjorZZsJRxWDC8jDM3BAAh+QQFCgADACwCAAAACwAQAAAGRMABInEoGgdIosLANBQOyQPkQaWSoERAYLt9YA8OLvfbKJcFga/R2Pgi3wPogAiv0+vvO34u3+vxf3AMBwsMewMMhntBADs=",
    saudiArabiaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUKAD6JSHM+ObhvUD4nMTaYMU99R624qSkjMf///1ZnSFR7TEFUMk9xR1lxUGiRYtXb01V1TFJ6SmeSYcDKvcHMvcLLv7TCtL1tUmKRYmKJWlJlSlJ1SlJ5SjGZMay6rL3KvXM8OTmJSkp9QTkkMSkgMbS+tMXOvbS6rLTKtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEPVBJEYa9Q2pZE/lgtilVgRDnKW4l6hKr1oJfzA0GouvwSGIY308orBB9xiPLdkwqb08ZUwgYHABRBQCrjAAAIfkECQoACQAsAgAAAAsAEAAABDgwiTCSvZauwXsejEKMY0UVCJGm5lCoMNEaJNkOBqKzCZV0nl4Fg/ERL8ajUPlhLpWAwQHABFCVEQAh+QQJCgAKACwCAAAACwAQAAAEOlCJMIa6WNHUqr9UgThESVhhiRArOhRsfGqD8ZilWz1IP1MXTwVkyWSARgwySWMSnU0mYHAAOAFWZgQAIfkECQoACgAsAgAAAAsAEAAABT+gIgRDqZwomUBRaSpkgRASYQ/wUBDIPOMxG++WM0woQgLQNaj0lDkU80RCWam4ayqrjXa93WoXMDgAvoBzNwQAIfkECQoAAAAsAgAAAAsAEAAABkVAwAU0Ko4ASCRRs8lwjMqRCNFBYDqdI1FUxVK1Iw62mwUQPZaPaQw2jkpf8zEJlSfvUfydqE/y+3aAf3ohIyQhgCGIfUEAIfkECQoAAAAsAgAAAAsAEAAABkRAwAU0KhYBSABRs8mIOEflSIToVDGdkVRktVa1RG5nPAaPPJaPuiw1Fi1ZaRIZJc7v9nsyr5f3/X18dyEjJCF/IYd9QQAh+QQFCgAAACwCAAAACwAQAAAGRUDABTQqGgFIomaTEWU4o+RIhOhUEZsoUWTtdrTTjngM9lg+aNQXQDQaT2CkHBBl1+dyIn6u30v9f4B9eyEjJCGAIYh+QQA7",
    southKoreaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUMALhvUBJOif///ykjMb63umJUXHM+OT4nMeU8RB8dKGdXXT6JSDYuOC8tODEtOL+TmDQuOmtvgzAuOb1tUjkkMTEsOb22veY8QRgcKRBMiykgMWJVWjmJSnM8OXthamplc4uBg5R5e1pQWouJlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEP5BJYI69R2pZVRLgl21MRQhIKiTjZqJBALbaG8ssWR7FFwo0Dgaj2xWLlaMuqXQFlcymUFp7FheHwYLKWGybEQAh+QQJCgAKACwCAAAACwAQAAAEO1ABc5S9lpbDez4EI4yJUFGEgKxCcoJqEIxvIcizq1BHM7amXaXjEWKOlCMmqfw0nU+mcnEYLJ6LazMCACH5BAkKAAoALAIAAAALABAAAAU/oAIYx6GcqEIWTumeJCE8gpAIZiwgvJ0fMkQgUPsVIENi4leK1G6/k6sEM6VSpCvWqlVxtdmuV7w4DBZkdDcEACH5BAkKAAoALAIAAAALABAAAAU/oAIYR6mcKFkwRGkqJCEgciIc8CEjvJDgMUFgKLjlChIC8Zdz1YwklAuXQ1lP0WuKqq12vd2sdnEYLL6LczcEACH5BAkKAAAALAIAAAALABAAAAVBIDB1VEkBKEpulWWZKmUJ12VhwknOV3YJGJ1MkCkKcoBVy5IBCk0ynDAFgCVPVCopq8Vyr99YGPzlUDScMCf9DQEAIfkECQoAAAAsAgAAAAsAEAAABT8gMHVUWQIoQG6V5Z4qZQlX7QlUPF9ZJmA50qznw8VYrhkwZip9jKQUChaVSqtWFDa7tXavuSyAQ9FwxOOzOAQAIfkEBQoAAAAsAgAAAAsAEAAABkZAwKRDKRoBSOKmYmmGKEmKRXCpCkBQ4vSSyQgwWamg6xWEl03LCAwgGo2iMHIOgLbt9DkxT9/zo3+AgX58HBQaHIEciX9BADs=",
    flag = "data:image/gif;base64,R0lGODlhEAAQAPUAAAAAACkjMT4nMXM+OU5SNWhdNCZcQvd2IotYU7hvUD6JSO+FJNi4Lf/eH//5TnyXinnd8v///1RUNm5wOLdpLIxyRHucjVlpPXJwOFdXN2xuN4CNPXqnpXVaMWN0O2JzPn+inI3BtWJoO36moYC4uYC+x2BXOH7Fz4C6vYC6yQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFSyAgJoNgnoKoiuXTHBAURekKlAwyNDFUr6XFYOBQFH+qUqFRPBCRLAHBoDAYGgboDYWyRb3gbdhbGtvK5qQ2jE6L3QpBQOEGKOjmEAAh+QQJCgAAACwAAAAAEAAQAAAFTSAgJoMgnihaWkLrpmJZMQcERZGZlgwyNDaITiWgDAYORXJ4KkkayQOSGWtNFAZDw0AFlACuF+wLK5PLuy76jG6qze+UQhBQtFEK+z0EACH5BAkKAAAALAAAAAAQABAAAAVOICAmgyCIaIqWD2O+qlgyyAJBUXSq5TIMjRtklyoVGgOHQklcCQgY5SHZlL0uBkPDUAWURC9TzNsdk82xL7pYHqvXVrhIIQgo5ADFfR0CACH5BAkKAAAALAAAAAAQABAAAAVPICAmg2CKaCqWD7OYpwqUDDJwUBQJcrkMgwZkyFOVCg2HQ7EspkoEzUZxGDicqBIsY2gYsCsnDByWmWfkc+ncS5vX7KdbpRAEFHGUAh8PAQAh+QQJCgAAACwAAAAAEAAQAAAGVECAMDEQGAXCpBJQfDAWoONSWGQgBo1QJIJcFheDgQNC7iqLhYZDoVibk0WCxvM5iN/Uo7HTMOCZb1JTRVOFgIaDf4aEiGeKhYyNAAoCAQqSQmySQQAh+QQJCgAAACwAAAAAEAAQAAAGVkCAMDEQGI3CpLL4YCxGJKRSWGQgBg1IKSKYAoqLwcChgEC602KhQT6Q0UsBQeMRMcbwZPFoZBjyVIBSaYBeeoWGX4iGRYlejY5xkUkKAgEKk0IKmJFBACH5BAkKAAAALAAAAAAQABAAAAZWQIAwMRAYj8JksvhgLEaolEC5FDAQgwYEcppSi4vBwKFwQLzKYqFBPgwU6CpB4xEVGI64sHg8mvQARVQAgIGFg4aIiIKKX4eDjI1VkklwAQqUQgqYkkEAOw==",
    spainFlag = "data:image/gif;base64,R0lGODlhEAAQAPUQAD4nMeU8RIVGNZNPNrZoNrN+Ma5iNbhvUPrLLikjMfN8O/6uNHM+OT6JSLZ0M9m1k8NIQ9BXPLxFPNFSPcBOO7lHQsZLPc1MOb1EQTmJSikgMdVVOc1QQf/KKb1tUnM8OTkkMZRMMc1QOeY8Qf+uMfZ9OaxhMbR1Md62lINEMbR5MbRtMcVIOcVMQcVEObpFQsZSO7h4M5lPNoZAN6JfNLByM7RpMdVZQdVZObR9McVMOcVIQcVQOQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAQACwAAAAAEAAQAAAFRCAkHgxgnoCoiuUQvHC6QiWBIEu+yGtZKAFcjqcqGRwP4W5GAwhgMWYJdWI2rdYSVkrcXr3F7lYLZomtDUCiUYY02N4QACH5BAkKAAIALAIAAAALABAAAAZDQMGBARAYj0biDMBsJgE0WGA6LRJjCMRiu7ACaoqAduuVOR7jroAIeFGr62LTGUfaiXYkPv/k9/17eQ0ACQ1+DYZ8QQAh+QQJCgATACwCAAAACwAQAAAFQOB0MAAwnehEDlLpniSBREEdmGShIEu/4ACDI8DrAQWQR/GnckFst+bJVYKZUikSNnvdSr1fr9bbACQa4AbaGwIAIfkECQoAEQAsAgAAAAsAEAAABUNgdDBAGZ0oOVBWaUYkgSBTYAMwUCjB4i84ksHxQPyCAEEFYvQhXRBbAIly4XKo7ImkzXK72yv4OxZrG4BEAxxprMEhACH5BAkKAAAALAIAAAALABAAAAZJQIDnAyqCAEgkMaQT6YxKkK3TIeFGoyMxVxpVSSQtyHRCfcMAYgqzu4HRRCNohxUnAdD08X4n8vt7f3qCUYSDghkgGhmEGYyCQQAh+QQJCgAAACwCAAAACwAQAAAGSECA5wMqFgFIADHEEl1cRyVo1emQSJsRSKoqjazXLdF0QoFJYlAK0+K0wlJjsaWVJpFR4n2v3yf7fnaBgoGAexkgGhmDGYuBQQAh+QQFCgAAACwCAAAACwAQAAAGSUCA5wMqGgFIYkgnulxcoCTI1umQrrwoUVUaWa9akOmE+pLCKcyOc9mcAUSjcRdG2gFReP5uJ/Lvfn9SgoOEgX8ZIBoZhBmMgkEAOw==",
    thailandFlag = "data:image/gif;base64,R0lGODlhEAAQAPUMAJNeY3M+OT6JSCkjMRJOiY5bYz4nMbhvUIqPoIRkdv///+U8RIuNpDmJSikgMaxlaqx9i3M8OTkkMeY8QZRdYpxpc7R1exBMi71tUqRtc4Nlc4tZYrR9g7R5g6h9iKNqcpNVXplseotte4NVWqFpcId6i6Zvd4lgbIZKUKZsc7F6hap+ip9ocJ5ocKxkawAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEO5DJE4y9RmpZwfpgtjFVopyouFUI4b6qVqLpSBoFGNoVdtk3ILAi5MWKQaTsWCQqOUygwDAQPBkCKzICACH5BAkKAAAALAIAAAALABAAAAY+QMAhYAAYj0YiysBsJg0n02I6LRJLiqzWaigRvmDuSbsFEA0katVcbDrZyDgxjpzTn3d83k4XGAYCeQKBd0EAIfkECQoADAAsAgAAAAsAEAAABkJAxiFgMDCOSAYRACo6j8SEwrOoLoxEBEHB5WINUoJY/C2Eul6l82O9qo/OItSYTBLrdjr+vefv73sCBgMCfQKFe0EAIfkECQoADAAsAgAAAAsAEAAABkZAxiFgKDKOSCKA5SoaGcSEQrFaWA1QA4JAmE6x0SmXCzYUWiqvouxMWRdlpBObRdqPxLs9r8fT+3yAf3cCBgMCfQwCiH1BACH5BAkKAAAALAIAAAALABAAAAU+IIBFUikBKEpSlfWYqqQpNDRNJ8lcPK3kMh/vAty0OD6gSZK5AVMAGIAErVKrqSt2etpyvd9tQ+JoeBvmbQgAIfkECQoAAAAsAgAAAAsAEAAABT8ggEVSWQIoQFKVZT2nKmlKrUCTJDNXf9U6Es3WC0o2LUsHKDOVMjlZChUjTa/WayqrlXa9Xe61IXE0vo1zNwQAIfkEBQoAAAAsAgAAAAsAEAAABkNAACYiKRoBSCKlYmk+JEmJRkGliqBExmW7VWClVerlu2E2OV4A0WgcfZFwAFQ9j8OJ9jg+H+X3/Xt5DRIODX4NhnxBADs=",
    turkeyFlag = "data:image/gif;base64,R0lGODlhEAAQAPUKAIYxObhvUOU8RD4nMSkjMT6JSHM+Of///6RJUIAvOLpLU34wOJ0yO5xHT71haJ9KUnswOaROVjkkMeY8Qb1tUjmJSrRIUpwwOYMsOb00OcU0Oaw0OaxMUnM8OSkgMYMwOaRIUsVhapxIUr04QaQ8QaxIUr1MUqQwOZFGTqBLUqBIT3UvNoowOJpNVMJNVKI2Pp1KUXkwOX8zOqhJUalMVLxOVgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAKACwAAAAAEAAQAAAEO1DJYIa9Q2pZgfhgtikVIhygIG4len6rVr7hSA5JCtsVdtk3ILAi5MWKQaTsWCQqOUxgYUAoPBUFKzICACH5BAkKAAAALAIAAAALABAAAAY/QEDAMAAYj0biasBsJgeslGA6LRJVggNVYB0gtNkqgIgKU7uD1pY7LjadbaScKEfS6098Xn+vFwYEBXoFgnhBACH5BAkKAAAALAIAAAALABAAAAU8IBAYwwCcKEAuTOmeZCM4Qi2YJHIc9q0ODxvPR4IohjWcK9JTnlwlmCmVIlGr0+tPK+VutYUBocAtkLUhACH5BAkKAAAALAIAAAALABAAAAZCQEDAMCgCjkiibEYrGgFEmOBQE1gH0AHiYO1io9Ow4DuIzVzdcdb58maRTuwbSZ/Xj8R7Uq7P6+11BQMEBX8FhXpBACH5BAkKAAAALAIAAAALABAAAAZCQAClIylKAEgkEcKxcIxKiWhymIwmkyMRVMVitVKqOAtYNkNesFFC+paPSeg7SY/W6cR7Mq+f9/l3FRIeFX0VhXpBACH5BAkKAAAALAIAAAALABAAAAZDQAClIykWAUgA8VOyWE5HpUQzOUwmpolEqrFWr1si1QuWYpqWTJloLJ600iQySpTb6/YkPh/n9/l7dhUSHhV+FYZ8QQAh+QQFCgAAACwCAAAACwAQAAAFPiBAdVJpAij5cZa1XVIqadMx3TBAanZ9xzvfbQKUYFiuDFFnamKKqCggxpRaSVYpNivjdr3bbEXiqXgrZm4IADs=",
    ukraineFlag = "data:image/gif;base64,R0lGODlhEAAQAPUMAHM+OTA4UhJOiSBBa1NhVoaCQZZ8LykjMbhvUD6JSPfhKz4nMSo4WKSOLaeQLaiSLTE4UqyRKSk4WvbiKRBMi1JhUpR9Kb2hKSBAaoOBQTmJSikgMb1tUnM8OTkkMYttKT9VXyZAZIpvL6SNKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEO5BJBJa9S2pZg/hgtjHVAIYjuRDnJ25Vocz0q1UGXacVdqUqILAi5NmKQeTtWCQqOUxgYnFIPBkJKzICACH5BAkKAAMALAIAAAALABAAAAY+wAECsBgYj0ZiYMFsJheMkGA6LRJBVKp1IcpWB0SDYkzeLhrk8XbQdIKLSCQxLofT3/dnHn9PLA4JeQmBd0EAIfkECQoADwAsAgAAAAsAEAAABDnwIbDWu/jRwKq/1CCIQmlRRKkK51IoK6stRqPcd1s5uNJengrIkslQikYicrYcNpnLxOKQaCaqywgAIfkECQoADgAsAgAAAAsAEAAABDvQIbCqu5gGxqp11CAI4riACzGuwkkVisK6i9E0cUx7T05jnhMKQ7xQisQj0ihcKp3NYmJxSCwdCesyAgAh+QQJCgAAACwCAAAACwAQAAAGQkAAp+MpegBIJBEiaRqVHgxlKqUciZWp1gogZiZg7dVjGZnBk7HREwGPk4Bn9wiHE+t2On6+h/b5exoeGxp9GoV7QQAh+QQJCgAAACwCAAAACwAQAAAFPiDAdV5ZAihAQlIrnaqHUTQ1e3FV1ziZTcAJreexXI4XINFUikyIKRSMFK1Sq6krNrZFabHfqMaz0XQ15m0IACH5BAUKAAAALAIAAAALABAAAAU+IMB1XmkCKAlJLOulHkbNs/SSFU3fXjb9PwrPcikWJzyT6cNDOQEvAOlJnVKd1qs0qs1evU+NZ6PRAjRlbQgAOw==",
    usaFlag = "data:image/gif;base64,R0lGODlhEAAQAPUOAD4nMSsxS314hY5bY1hLWFNRZI9kb7hvUFppieU8RD6JSHM+OSkjMf///6NqcVdOXGhmdp1pcnt5g815ezmJSikgMVpIWlJQYmJhc7R1e+Y8QVppi5RhaikwSotlar1tUotZYnthc3M8OTkkMaxtc5xpar19g5F5hKxka0M0Q1VPYVlUZWVhcYVhan9qeJ9ob7KBildRYW1ndnNMUpRpc2pMWoNVWqR1e6Rpc1pVYqxlagAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAOACwAAAAAEAAQAAAEQdDJs4C9QGpZSQhNImabUxUNAjYNuVXCh4iJq1UGq7elCQw0mo2DwfR8x2Ml2VsyX0Om80mk3qJHBYChsDoU3WcEACH5BAkKAAIALAIAAAALABAAAAZEQMFhARAYj0ZiCsBsJgGqVaCRqBaJrAZi2mhcAadAAFFNfFvdtFdABKDKVnax6ZQj78Q7Mq9/9v1/fHoKAAwKfwqHfUEAIfkECQoAEgAsAgAAAAsAEAAABUCgdCwAIJ2oRBJP6Z5k0UBNYpukECBB4+MAQ2NnSwAHEZ8SWHIUjSqTxFWCSVMoEjal3Vq9X3B3qwAwFGAF2hsCACH5BAkKAA4ALAIAAAALABAAAAZHQMdhASg6jkgiISYrGh3EQgPhSlgBUIAgwG14sUSDF2FNgAGDF8z7zTpR5TPSic0i70ci/q7f5+t+fYGAeAoADAp+DgqJfkEAIfkECQoAAAAsAgAAAAsAEAAABkhAwEc0Ko4ASCTRcsHUjMrRpbHp0DSaI1HS6WwaYO3IA25gswDirJSZlMXGEQkrTgKg6aPdTtzz9X55gVGDgoEUIxUUgxSLgUEAIfkECQoAAAAsAgAAAAsAEAAABkpAwEc0KhYBSADRcsGEOEfl6NLYdBomzUgq6XQ2mkZjS/SIxRqtFFTKZCZistFIUhOTyOgdj9/zkX5/gXyDfVt/ABQjFRSIiY2IQQAh+QQFCgAAACwCAAAACwAQAAAGSkDARzQqGgFIoiWHCd1wo+To0th0Gg1dlCjpdDYaTWM78mDPGjKolGlPxgCi0WgjI++AaFyPvxP7eH+AUoOEhYKAFCMVFIUUjYNBADs=",
    vietnamFlag = "data:image/gif;base64,R0lGODlhEAAQAPULAJYxOj6JSK01PfrLLikjMeU8RD4nMbhvUI4yOsc5QXM+OaY0PIMxOaEzPJ8yO5oyO7ZHO6U/Or1WOogwOaAyO50zO6w9O6Q+O7lGPJQyOr1tUuY8Qb00OZQwOaw8OXM8OTkkMYswOaw0OZwwOaQ0OSkgMf/KKTmJSqxEOaQ4Ob1ZObREOaQwOb1IOaw4ObQ8OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEO3DJo4y9RmpZUflgti2V8A3hSBrm4H7iVp7pWAEJCKsVdqkrILAi5MWKnCOSiNQwm0FowEAIQBcBKzICACH5BAkKAAAALAIAAAALABAAAAQ2EBxlgL2WMsN7Ns9SjGNFCeNAmgY6vCVAOekqcw0ZU0Dn3ZggL3gZEoFH5NEYDBgIgWQgeowAACH5BAkKAAkALAIAAAALABAAAAU8YHIohpGcaEIiWemepFBgRV2YcT3YuCEPwFoPYCnshCrXxXZLnlwlmCmVIlGr06tTu9VatQEDIcANkLUhACH5BAkKAAAALAIAAAALABAAAAU9IHAoRgmcKIlUS2kCpFAU0lwYsCEPg43HM97sZ5hQIL1hzhXx5VAu3BNFnVZPpGtKqs1qrdWAgRD4BsraEAAh+QQJCgAAACwCAAAACwAQAAAGQ0CA5gMqggBIJDE0QqGMSpBoszGpqEfi1GSibrJSKhcLWJJSKy/YCCKRiUkAtHyMx+H2JD5P50f9fXwnICUnfieGfEEAIfkECQoAAAAsAgAAAAsAEAAABkRAgOYDKhYBSAAxNEI5j0qQaLMxbVobUHRq6lK1xGmVmo0yXa7XN2osssrEJBIal8vrdiQ+v7f371p5ACcgJSeCg4eCQQAh+QQFCgAAACwCAAAACwAQAAAGQ0CA5gMqGgFIYmiEapJASZBoszFRR1Di1MSlZqVUqxegJHnOnM3XaOx8kXAAlDyPw4n2OD4f5ff9e3knICUnfieGfEEAOw==",
    algerian_flag = "data:image/gif;base64,R0lGODlhEAAQAPUNAEBbMUJtMikjMbhUPnM+OT4nMeU8RP////SytjaYMT6JSDpZMbhvUElfMkhfMl1lP9vRzuXb3evm5+7l5uTg4uTR0E1hNVFjOODW1uPg4tvW2Obc3ubj5O/t7jllMUNgMkpeMkFUMkllMjtgMVBgNVthNFBfNePf3+nf4OLX09rPzFRiOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPrBJRoq9RWpZQUpHeGRbUwXJYIjkdiYrErbaq7KlWSyfOOYVzCWnIxIrRiAtWWTWlkmkkwMlKgoCxbSh0DIjACH5BAkKAAAALAIAAAALABAAAAZBQACDUAAYj0ZiqMBsJgseUeJAPRSJgcTAUL0WslwE1fvRcscAYgE07aaLTecbSSfSkfb7U7/n5+8KBQIKfAqEekEAIfkECQoADQAsAgAAAAsAEAAABkHABoNQKDSOyAYRMCo6j8RAgnSoHozRxMBgxRakXETVuyhtu0qnyXpNH51FqDGZJNLr87tbv9fb9QoFAgp8CoR6QQAh+QQJCgAPACwCAAAACwAQAAAFQODDEEX5nCgJNFZpPmSQDNVhF3AhG4Z94LHZAXHLLRyXXpHkwviAuJMrSkJZT9VrKqrNdbFcbVarKAgUXwW6GwIAIfkECQoAEAAsAgAAAAsAEAAABkVACINQKBYgSCQR0HiojMpCIDEwoA6HI3FqwGK1UqoB8YUQF45Vygs2Fk5lYhICNR/nczk+qd/b/VGAf34KBQIKgAqIfkEAIfkECQoAFQAsAgAAAAsAEAAABUBgxRBFWVZoRQLNA0WnWgTJYBzSUcj0jRw6Xu0G3JEWDtekKDOVKEFSChWTTqfWKyqr5V692J22oigIFGMyehwCACH5BAUKABEALAIAAAALABAAAAVBYMQQRWlGKAk0D7RxRVoEyWAcRxaT9I3gu1ntBoyQFo7WpnMImkyaIGoaiRmt1CkpS91yZV9w2MtVFASKsCL9DQEAOw==",
    argentinian_flag = "data:image/gif;base64,R0lGODlhEAAQAPUTAJWdrLhvUD4nMf///z6JSOfw9vrocvD1+cHZ6fnHWPX4+9nn8SkjMXKozmGHqJifrGKHqHM+Oa6stHGRrXWVrG+Oq4KgrIOjsG6Qp36gs26QrXeXrIKkuHCPpIGhtHqarmaGpXGQpGyQsIOhroGhsKGkr6WnsWmQsW2OrFyCpYCFlXOTsGGAnnaWrG2RsHOSr4CkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgATACwAAAAAEAAQAAAFReAkBpFgnoKoiiXUvHC6TiVQDMZwIPJaSrhEbtBTlR63nGJRZAkcsNiMhkJNqddrKTvdcn1NrvfrJBvDV4KAQTBPCO1vCAAh+QQJCgAAACwCAAAACwAQAAAGRUBAICIAGI9GYkrAbCYFqlVjOi0SS4WBYXBAWAUmbWI7+J6yW8XiK0BRqwAioOmMF5FIOf6o39v9T4B/fgQCDASABIh+QQAh+QQJCgATACwCAAAACwAQAAAGScBJICIQTI7ICRECKjqPREDB06g2jETJYGAYHBBYwaNgSHQHYceHO1AswsWO9ao0TpxFqD2JJPKTfn96goOEgX8EAgwEhASMgkEAIfkECQoAEwAsAgAAAAsAEAAABkvASSAiKE6OSCKkIioaJ0RAYTBqWAVQgWRgMAwOCCzxMU14B2KBo0LyKhZpZ8jaSCOd2CxyfyTy935/fXmCgYWEfAQCDASCEwSNgkEAIfkECQoAGQAsAgAAAAsAEAAABURgFkRCKWQoSkIVhZmqABSDYTXNSUp1MhwIneBBMxgGA6GjdRkoFkKTYIITpjKwDOnK3XJT3q/2JB6XzWKCgEEoE9riEAAh+QQJCgATACwCAAAACwAQAAAFQ+AUREJZTuhEQhW1YacqAMVgDFkjyJKdGAfEjvSo3QaDocDR2nAUC6WppNHJUqgYCcvdclPe71U8Foe5BAGDQCawxSEAIfkEBQoADQAsAgAAAAsAEAAABknARiAiKBobSCKkQtm0XIKkAFAYGAaHV5QosSauiK3gUb0qBmIH0wlbiI1GlhhJb0QbxLo+r6fz+3h3gH99hHUEAgwEgA0Ei4BBADs=",
    british_flag = "data:image/gif;base64,R0lGODlhEAAQAPUMAEpOZuU8RHM+Of///2lQaT6JSL09TCkjMbhvUD4nMURMZRJOib7AyVJSaUxQaElQaUtPZ8DFz7/BzUJKY0VKZFFOYcPFzldOZ8DCzLy9xsbBylFOZFJOZlNPZ8s9SkZOZ01QaExPZ0pQaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAMACwAAAAAEAAQAAAEPpBJJJK9SWpZwVjB8mUbUxFi8C3kVhlBLLfama40lyhfOJYmDAYYJBIrRiAy6coll0xdtOYkFhKHwpRR0DIjACH5BAkKAAAALAIAAAALABAAAAU9IIAICWCeJlklbJsmF7YEy7CUJFEH9g2QhoBwiIPtesWEZVbzkQAt16+EQj2rpyt2un11udtC4lDoFsrbEAAh+QQJCgAMACwCAAAACwAQAAAFQSCDCEnCnChDAlnpniSxcMEyLCZpBAO/4KqELEAk5hIKTe8GJJU2tdvx5CrBTKkUKavFcoPfaxj8LSQOhXAh/Q0BACH5BAkKAA0ALAIAAAALABAAAAVCYIMISdmcKAkwUGk2JLEMxrwkcOIF/LDcOdmAx8ORFIxOwAckuWo+I+7kmpJQ2NM1m5pyc1+tl7vlFhKHQrig/oYAACH5BAkKABAALAIAAAALABAAAAVAIIQISZlAKEoCTGOYakIsQ+AMy0kaQY/nENKs1gvoEoqW4Xc0JR64YwoCC56mUxI2e91avTHw11tIHArgAtobAgAh+QQJCgAOACwCAAAACwAQAAAGR0AHQpAoFh1IBxHAaBhCR2WCsBgEBqJFQmoIeAMLrZRqtQa2REXTAAqjjcaPmJhERun1Oj6P3PP9eYB6W3wOBQkHBYWGioVBACH5BAUKAA4ALAIAAAALABAAAAVCoIMISWk6KAkwjQFFSZoQyxAMCxWTRuD7i92sdlsEhAqWSxJ0kEymiRBFdcSc1yqVpK1yuzJwWPztFhKHgrigBocAADs=",
    canadian_flag = "data:image/gif;base64,R0lGODlhEAAQAPUPAOU8RI4yOq01PT6JSOxnbu55f/3v8IgwOfjDxvKVmSkjMXM+ObhvUD4nMf///75MVL5MU/bv7/Ls7f319urg4vfAw+zZ2+zc3rE3QL85Qe3j5O3l5sZOVtJOVsVNVb9NVe/e3+rf4bpETMlQV+3n6O/c3vvl5urb3fLl5uzh4s1JUfDa3MA6QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAPACwAAAAAEAAQAAAEQvBJtpq9TWpZA3AgAGTbUwkAkiAiuZ0AURBtaTaoAeijXR2fUK9UwVxsNySyovS5mpwnlAnVUKtJ7KChGGAfAy80AgAh+QQJCgAPACwCAAAACwAQAAAFQODDLM1jniYZNGybNoLnzABQkgKAJEh9wwBCgeB7kA4AQ7JIanxmDmap5TKWUCgSNnvdWr0v8Nc7aCgG4AHaGwIAIfkECQoADwAsAgAAAAsAEAAABkfAB2PRaDyOyAcxICo6j0QBAORwAADGKACRQFyzDSmhQPgqG4eRAbDGnouhqpl4dBahxmSSrkfy+2eAeIKBgAMNCgOCA4qAQQAh+QQJCgAWACwCAAAACwAQAAAFQqDFLE1pnSgZPFJpWqQAIJEDAA3cyESC3LkYoFIgAHUHyARgOJJcFBtOh3LlqKgsVnsicVPXr/e71Q4aigF5oP6GAAAh+QQJCgAOACwCAAAACwAQAAAGR0AHY9EoNhxIJDHwuJCMyoYAgEiUAIAjcUoomLBaKcAAIIAdxAPEgiJn0cbi6UxMOqBwu76uT/L7eYCBgH96Aw0KA4IDioBBACH5BAkKAA4ALAIAAAALABAAAAZIQAdj0SgWHUgHMfC4bFJHZUMAQCQQKkBDSiUUCAAtF2Agh7fEA8SiWZ2lxiJLTEwio3W7Pa9H8vt/eoF7W30OAw0KA4aHi4ZBACH5BAUKAA4ALAIAAAALABAAAAVEoMMsTWk6KBk813ZxTdoIAJIgQBaTNFEQAMBuBjAUg8MDxKKxdIQOksmEGaKujlhUi72SutgvWDYml8XgQUMxKA/a4xAAOw==",
    colombian_flag = "data:image/gif;base64,R0lGODlhEAAQAPUAAAAAACkjMT4nMXM+OR9Sfi1GdYk3OOU8RLhvUD6JSMWtLtnIMvfhKxJOiSRVfcpCSMKqLdrHL+LMLsZES8pCScmzLuLPL8hDSc1IT8u2LtW/LOPPL8xHT9fBLctCSc5GTdFIT8M6QdNHTd3JLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAEPBBIgIa4WMxtFfugtgHWAoYjKRBN64qcULhvahlHrsOTlWEpVTBoGdp4RmGyhzQWl5LnMiEIJKCAxNUYAQAh+QQJCgAAACwAAAAAEAAQAAAFRCAgAsggjGgKmJDgvuoqRBJj22dqOvedo6ZCY0j8jUwGYlFlEjwOUKhRZAK8YMxpjKrdVre6buwLPopTCUEgUR4l2OAQACH5BAkKAAAALAAAAAAQABAAAAVIICACyCAIY6qaSnW+qmgujMXcDLoKRIPfupSp0CgagyOTYWIsImUvymF6eAJMotcpdrVyu98YNiz0csdkaFqUEAQSa0ACHg4BACH5BAkKAAAALAAAAAAQABAAAAVIICACyCCcY5qaSqadqAqYC8NsNiPIJtE0OR1PUPgZGzuVyXDBHJMrmOByqEJHppFUNrtysd5vV6wMf7NkcFqUEAQSa0ACLg4BACH5BAkKAAAALAAAAAAQABAAAAVJICACyCCcwqiOppJ1GrqK5sLc252uJtH8N8ZOZSr8jo0hS2CgcDhHJQ11ohwOUoBJJZttZ+AvmJcdi8dLNFk9SggCCbYoEUeHAAAh+QQJCgAAACwAAAAAEAAQAAAGUECAEIAYCI7HoVJoVGQ6HU1yCTAuGFjGhiGgGgmNcAPbXRoLYnFZaTR4Ph9QeD00Io+eA525n5r3VHWAgVWDgUaEXoaKiUoJAgEJjUMJkolBACH5BAkKAAAALAAAAAAQABAAAAZMQIAQgBgIjsihEmBUZDpQjWApNC4YWOxoujQSGmAwg6s0FsJh8tBouHzeooa6iqyH5kw8Pk/t8/1de31GgIGFZYJLCQIBCYdCCY6AQQA7",
    dominican_republic_flag = "data:image/gif;base64,R0lGODlhEAAQAPUOAIgwORJOiSkjMbhvUHM+OT4nMeU8RP///z6JSDdNceji5jA6WZKmnrNgZzJPdrI2PrE2P7I4QLo4QLY/R0BVdytBZS9AYptibp1IUDxRdbQ5QrM7RDJJbu3n6bM4Qefn6ujm6bQ+Ruzm6jFFabQ+R7s4QEpggi1FagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAOACwAAAAAEAAQAAAEQdDJQYq9RWpZVwiHIWabUyVfOJZmoRwHAx/kVjXi8QW1VgG5XY+DwbBax2MlyVoybUOm80mk+qJHREGAsDoQ3WcEACH5BAkKAAAALAIAAAALABAAAAVBIDAQBWCeJrkUbJsWSRUcRl2SSjDXxl1chwMjePBhagddwFd4GJI6H6DlApBQ2Cv2pN1aS95vWOxFFASIMCLtDQEAIfkECQoADgAsAgAAAAsAEAAABUGgMxBF4ZyoQy5V6Z5kEmSHYZukcgT1rRYNw4FxKOIKAI0wwDyWNrvm7+QqwUypFCmrxXKnX/B3+0UUBIgwIv0NAQAh+QQJCgAOACwCAAAACwAQAAAFQqAzEEXpnCi5VFxpOmQSBJ1hF3ChHLxt4KSGjcE7AAsAiOcwCxxdn+YR5cLlUNgTKYvdcrXWr1ccziIKAsTXgVB/QwAh+QQJCgAOACwCAAAACwAQAAAGSEDHgFAoFhxIJHFRSYCMykIiEDiEDIYjUXE4MLBZB7GB7Xa1BQAkIqIG0MbCiIpOOqDio91O3PP1fnmBUYOCgQgFAgiDCIuBQQAh+QQJCgAOACwCAAAACwAQAAAGSkDHgFAoFh1IB3FRSShIR2UhEQgcDCVDQao4HBhXrbRhMByshy0RAIkoTFW10XgKyJPIKBHP3/OTfn9SgkiBf4Z4CAUCCIQIjYJBACH5BAUKABcALAIAAAALABAAAAVG4DUQRWleKLlUiTI9RVokQXAYhhSTynEwPsOu0MAdaochABJRUByBoclkGaKul9iFhO1yu9cveKsdi8FnLKIgQIwvCPc4BAA7",
    goblin_flag = "data:image/gif;base64,R0lGODlhEAAQAPUAADp4Q1M/OnM+OWPHTbhvUBk8PqBdWikjMRcUJD6JSD4nMfZ1eiAeKSwqLl22SSw4MyQlKiweKy8hLFirR165Si0xMDp6QyghKygnLCUpKzIpLiwpLS0sLiMaKDJBNkZTOCw1MF69Si9GNjp5Q1ukRyxDNU1qPFy2SQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFQyAgEoJinoqoimWADDCCpCtQGgOSvAu9lpeEUDir2RQYXWFXrJUiMmbzh0IZj9drKWvccqlfcJjlC3vDCcUhMQYIwyEAIfkECQoAAAAsAgAAAAsAEAAABUAgQAgKYJ4mqSlsmypBM8wIUpLGgCTIsNyKTGI4tAFIm12BZyQpOLtas9RyHUsoFCmrxXKv31cY/E0oDonwMBwCACH5BAkKAAAALAIAAAALABAAAAZHQABBoFAAjkgAMfApOo9Ew8AxGCAQRiIjgeAOFlkFo5soY5WKDihR4J6JRY/7bQQ4i9B6EkncJ/t+eYGCg4B+CQoHCYNlg0EAIfkECQoAAAAsAgAAAAsAEAAABkdAAEGgKAKOSGKg4SgaAUTDABGaIhRQBSPBRQwWWCIDwe2GFZGGqJBAXLPOkftNRDqxWaT+WN8n8X55gYKBfX4JCgcJg1yDQQAh+QQJCgAAACwCAAAACwAQAAAFQiBACEqpAChKBo1DmapiDEgyIchJMkmPDAudglEr+ISRxsOSwAlNiooTQEoBYNST1VrdprrebDg2FocTikNi3BuHAAAh+QQJCgAQACwCAAAACwAQAAAGTEAIQaAoFiFICDHQcDhOJgWSaBggEggSQkpkJL6JwYKrYFwL361SEWk8ACWEmmgsXubSJOS41vuJfnqAgVN5hIOHhn4JCgcJhBBfkEEAIfkEBQoAEwAsAgAAAAsAEAAABULgRAhKaU4oGTRO2yipYgxIggwLTDJJ3yM6BaNWsAEnpEjjAXhAjiSTSRJEWScwZPZqJXGv3m9MPCaHvwnFIUHukUMAOw==",
    lithuanian_flag = "data:image/gif;base64,R0lGODlhEAAQAPUNAF9dNeU8RCkjMTaYMT4nMXM+ObhvUIk3OD6JSJF8MmV3Mc6LM/6uNNSSM96XM75JP7pDPr9DP+6lM75FP+CZM+yiM3t5MmJqM5JvMr5CP8yKM9KRM+2lM7pHPr4/P+miMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLBJU4i9RGpZF/tgtjVVAoYjSShD64pbBbhvWh1BrsNahV0pVTBYGdp4RmGyhzQWl5xmEEEQIKANxDUZAQAh+QQJCgAAACwCAAAACwAQAAAFOyBgFARgniapEWybEljFzHNJWjRtE9fg/7vDDwggETKBZHIHaLmKJRSKJJ1Gq1DsS5vFIggChBYhxoYAACH5BAkKAA0ALAIAAAALABAAAAU9YGMUBNGcaEMuW+meZMJwTM2YpDLYNU4Ag6DQd+gIg75SJsAM+E6uEsyUSpGqVipWpcVet1wwgiBAiM3bEAAh+QQJCgATACwCAAAACwAQAAAFP+BkFEQ5nSi5NE5pTmTCMNLMEDChDIN95wCecIAjHSCPYdFFiASeSxTzREJZqbhrKqvNdbFfbxdBECC+iHM3BAAh+QQJCgAVACwCAAAACwAQAAAFQGBlFERJVChKLg3lmCqRMLREn6Qy7DSDE4CdcPA7QCYP4c9EiAQCv1QFViFJr9ZrKqutnrpecLiLIAgQYAS6GwIAIfkECQoAFQAsAgAAAAsAEAAABUFgZRREWVZoRS4NRTmnSiRMzUgMIStDP9Q6EsDnCxIOkMnk0TOaSpGAMYWKkajYKzal3cq8qO5WTEUQBAgwIu0NAQAh+QQFCgABACwCAAAACwAQAAAFQGBgFERpBii5NFTrECmRMDT9waQy7DuDEwAe73eATI6Pwc9k8vxQ0AAsQIpaq1YoNkudcrdZcBRBECC4AcSZGwIAOw==",
    malaysian_flag = "data:image/gif;base64,R0lGODlhEAAQAPUAAMpCST6JSCkjMT4nMeU8RP///xJOibhvUMOzNSRagXM+OYk3ONnKxzBEUT9YZTpNU/fhK8ZES9NHTcE9RCJJajNHUjVHU85GTchDScM6QRVEbPDq6StFVT5QZspCSCVNcCNNci9TdcxHTzNHUzRJVs1IT8tCSchESzVIUjpHUdFITwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAAQAAAFRSAgHspgnoOoiqUGGTBBpCtQIjCUFAW9tq+EQeZTlTa8ZK9mGyxk0BmzhDoxm9drKTstcrFfo5e7DbPG18BAEDADAu1vCAAh+QQJCgAAACwCAAAACwAQAAAFQCBwKANgnibJDWybDhxizARRkrIBJUVxDx2IIWGo/Ra9pA9AGnhq0B+g5WKWUCgSNnvdWr0v8NcbGAgC4ADaGwIAIfkECQoAEgAsAgAAAAsAEAAABUKgdCjDIJ2oRDZI6Z4kYjyGQRAm6UAGlBSF3IBRMCRsONVgEQE6hSXA7SY8uUowUypF2nK1XmU4OxaHAwNBYBxYh0MAIfkECQoADwAsAgAAAAsAEAAABkjAx0ExKD6OSGIDMSoaH0SEwUAyEAgD6MABMUAShUKWyAgnrFjtAlMKh8fOAeCaJiLjRztyr+Xv9X59gYKBgHwBAwIBgwGLgUEAIfkECQoADwAsAgAAAAsAEAAABknAx0ExKA4eSCSxgfiAjMoBwmCAhAiEI9EBMSQShYJ2wAgXDNjxAnMRmcfGASD9ICYf0Prxfrfzk35/eoJRhIOCAQMCAYQBjIJBACH5BAkKAAAALAIAAAALABAAAAZKQMBBMSgWAUgAsYFAUVJH5QBhMEASJ8JA6oAYEoZCYUtkiMUErXSBuVxUYrLRaFITk8joHY/f85F+f4F8g31bfwABAwIBiImNiEEAIfkEBQoAAAAsAgAAAAsAEAAABUUgcChDaQIo2SAVZUlDOiCGASXFFJMOZCQGQmE3YBSORwJxgbk4JUMAyWTKEFFYQEy6zWJJ3iw4LCOXzeNwYCAImANucggAOw==",
    mexican_flag = "data:image/gif;base64,R0lGODlhEAAQAPUTACkjMXM+OT4nMeU8RLhvUI3p89u7oL/OmzaYMT6JSDhyMebSn7l4QtSqoMXz+KpWQ0BbMTpZMf///154U+Tn4ezq5+To4ufp6GN5VO7j4+nq6ZwwOezn5eHn4ePk3evj4u3u7Org4Ozp5+zd3G2PafX19eTm3lNuSmN/VGN6WDllMUFUMpgxOuve3p42Pp0yO+ni4qE3PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgATACwAAAAAEAAQAAAFRuAkEoFgnoKoiiWESPAwpOtUKsjCNDK93gjHw9Cr2QS4Q+FQrJUir9jMWEKdjEcstqSl+rqsL5gLVpHLWXRCAEigJwk3OAQAIfkECQoAEAAsAgAAAAsAEAAABkZACCEggBiPRuJKwGwmBSqUZDoYFIkKxILRqF4FWcfD4IUQVYhD4VAmClJTSbvYdJqLSCQxr8fz739PgYB/CQIACYEJiX9BACH5BAkKABMALAIAAAALABAAAAZHwAkhIBBMjsgJEXIqOo9EBcIkkQwGxihiwWhcswKp42H4KgUR0qFwMBOLparbOHEWofQkkqhP8vt4gIGCf30JAgAJggmKgEEAIfkECQoAGQAsAgAAAAsAEAAABUJgRgRCmZ0oCWFUaWakgiyVNAwCLMgO09y5GOLwMAB1kYmlcDiSXBcbTody5aioLFZ7InFT16/3u9UmBIAEOaH+hgAAIfkECQoAEgAsAgAAAAsAEAAABkdACSEgKAokSCQRgvGIjEqBArFgjAaDI3HqeDSwWiniUDCAJcTIpAM6nIlGQeh9TELR9aSeqO/z+0l/gHiDUYUJAgAJh4uDQQAh+QQJCgASACwCAAAACwAQAAAFQ6BEBEJZSqhEQpjHfacqKMjCNNsgyLTzGAMdD3EoHII7UmTS0WSQMlMpl9ylJDHSdavdprpeWRgF9pavCQEgMU6wwyEAIfkEBQoAEgAsAgAAAAsAEAAABktACSEgKBolSCIE4+G0XIKkQIFYMBqDV5RIdTwMg8F2ijgUDuFxZNLRwGJiCdFoZI2ReElUvs/jiX55gIFShIWGg4EJAgAJhgmOhEEAOw==",
    pirate_flag = "data:image/gif;base64,R0lGODlhEAAQAPMJAD6JSLhvUHM+OT4nMf///xcUJH5+fikjMR0aKQAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAJACwAAAAAEAAQAAAEPjDJIIa9Q2opiilE6GVb0oEoUZBbh6jwWpoFGIqs1n2xkXMYzMz0GwKNswqypFzqisamkzhNAAYHQBWgXUYAACH5BAkKAAkALAIAAAALABAAAAQ3MAUxkr1WFDO6z0VIjFulIUSRpqaovq0xzoXZvSmXUIn37RUMhie8EItAZCaIPAoBgwNACZgiIwAh+QQJCgAJACwCAAAACwAQAAAENzAFMUa6OIliSv3XVhAkwVkbYq6eVoywiXJj2VIVa6BW8lWhXgZDGWaKxmBSuUQaAYMDYAmYJiMAIfkECQoACQAsAgAAAAsAEAAABDcwBTFqulgUU0i1idZ1xDaEBVKuxSkS8OhuZOx+w2jcGH5RmODvJMwQi6FjEYhMNgGDA+A5RUYAACH5BAkKAAkALAIAAAALABAAAAQ3MAUx6kgYi2IKIZZWeB7BXRtirgU6fqzbrSZqVaZhZ0mYULwgMJgZEn+XI1K5PAIGB4ASID1GAAAh+QQJCgAJACwCAAAACwAQAAAENTAFMWpNOIliCvmXVngkN4gIQarn5n1f0XIrq1mWeWdYSPHAHzAjHO6MR2MRCBgcAEgA1BgBACH5BAUKAAkALAIAAAALABAAAAQ3MAUxqk1YFFOIL0NWdCRhhBpClGCidd6HbmxLWdbphljPU71ghiccFnvA4065PAIGB4ASID1GAAA7",
    rainbow_flag = "data:image/gif;base64,R0lGODlhEAAQAPUUACkjMXM+OZCDJOU8RHkuZZNIKzlGQj4nMbhvUDaYMT6JSLdvKfngKzFFfmJvQFo4cWY1bG4xaUBAev+eAE4+ZbZDNTxDYcZFNr9JM9JYMcpLMz5HYz5GY0FHZElRYtFXMbtDNz5HZKR5Jnl5MrE+OaJaKcRMNEdMYVVGZVZDVD9KYT9IY0lTYVJAZlFAZlo8aGI5amI3ak9BZ8RSMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAUACwAAAAAEAAQAAAFRCAlIsFhnoeoimUxvHC6UuUy3bi8lgLj/zpVyZEoGoOsg6EheUAiBCQNhZolrdhp1lrazrpeoTQLDmvNigNAYaYo2N4QACH5BAkKAAIALAIAAAALABAAAAZDQAEicBAYj0Yi6cBsJg8l02A6LRJFk6zWehgxvmDuKUEucw8hyQMSIXAFTaeAiKzT68c7fl7c8/1/ewoHAAp+CoZ7QQAh+QQJCgAFACwCAAAACwAQAAAGRsACInA4FI7IArECKjqPxMXkM6gOjEQBY8LlYg+OBGM8/lo8iXT6W+w8IBHC9+gsQo3JJDGvx/OVfnx7f4CECgcACoaKf0EAIfkECQoABQAsAgAAAAsAEAAABknAAiJwKBaOSGIFcykaC8TFZJIZWA/Qg4DBmE6xREciweWCD5YVazw+O1uQCOGMdGKzyPyRqM/z+3t3gH+DgnoKBwAKgAUKi4BBACH5BAkKAAUALAIAAAALABAAAAZIwAIicCgeCkgksYLRXIzKw2JCzQwGR6KAwaVOsgdHYsxlgC0rFWqcABsPqQgBnCxAC8S6Pq9P8vt4R4CBg4SACgcACoMKi4BBACH5BAkKAAUALAIAAAALABAAAAVCYIEER1kWaEFWmKZdp3osUz1lwyELTM/UOpIjQUz0ggcLZ7PhEJGmEoWATKFiJKs2q01xuzIw6tslWxUHgEKsWINDACH5BAUKAAMALAIAAAALABAAAAZIwAEicCgaB0hiBaNpXg7Jw2JCpc6gRAFju51gD46EWMz4WlYy1wuW+BqNsS9yPoAOiPQ8Pj/f8+92f358g3QKBwAKfwMKin9BADs=",
    romanian_flag = "data:image/gif;base64,R0lGODlhEAAQAPULADA6WT6JSHM+OT4nMRJOif6uNCBBa7hvUCo4WOU8RCkjMT1IWSBBbCg7XjlKX+2gNLY5PS9DXyQ9YiU9Y+OeOPKeNslPPO2dNb1LO81LPqE1OzQ4UyU8YSM/ZyQ9Y0VPW+qhNeOfOjBDX+qbNuiiOeKeOe+fNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEAAQAAAEPnDJI4a9Q2pZASFFkSTZtlTGF47lhqoiaZ5DCsatViEwO1eYy4w2HFaKvxySuNQpkccm5zkMDBQB6SKQXUYAACH5BAkKAAAALAIAAAALABAAAAU7IHAIA2CeJrkNbJsOXEcURZKUpEHM9Q3kO5oNBwv2iAMPb/grtVxNlJQkRVGrL2xWe60GBoqANiDGhgAAIfkECQoADwAsAgAAAAsAEAAABDrwHTHGu/hR0Kq/lEE4RZEkVkgQ5ZkOImui2oAwsltXS0tTF08FZMlkgEYMMlljEp1NZmCgCDgDVmYEACH5BAkKAAsALAIAAAALABAAAAZFwMVBMCgujkgiYCIqGhdEA4EQKiQSA+hASihYsVqu95olIiSfMZjoBH3L2aMzTkTaj/V7Mq7X9vF8enl6AQMKAX8BiH1BACH5BAkKAAsALAIAAAALABAAAAZFwMVBMCgOFkgkETCJlIzKgYFAKJgSiSNxWi1gtVJqwZtdEBGSCIkMNg5GX/MxCZUn71H8nahP8vt2gH96AQMKAYABiH1BACH5BAkKAAsALAIAAAALABAAAAVA4HIIQ1ku6EICU0Q9pzoYBFEUVjLItF0kOl7tBtyREBJXpSgzlSBBUgoVk06n1isqq+VevdiddhEYKAJjMnocAgAh+QQFCgALACwCAAAACwAQAAAFQeByCENpLigJTBF1YUM6GARRFEkSk7SN6wte7ZbbDRCS1iUDJJlMGiNquogFrdQpKUvdcmVfcNjLDQwUgXAg/Q0BADs=",
    sierra_leone_flag = "data:image/gif;base64,R0lGODlhEAAQAPUNAEBbMf///y5QeT4nMXM+ObhvUBJOiT6JSCkjMZKgjIqPoGWJXjaYMU5pjDltMURbfE6FRz9pNkVfgjhyMUJbfVFqjHuUdY6XlldedkNyO09xR0FUMkBkNk+ESExlhUFbfDtRc1J1SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEPLDJQoa9Q2pZAftgtjXVAoYjOSRB64pbpbhvWglGrsNahV0pVTBYGdp4RmGyhzQWl5xm8DBAHKCNwzUZAQAh+QQJCgAAACwCAAAACwAQAAAFOyBQEANgnia5DWybDlrGzHNJWjRtD1fg/zvBDwggDTCGZHIHaLmKJRSKJJ1Gq1DsS5vFHgaIg/YgxoYAACH5BAkKAA0ALAIAAAALABAAAAU9YFMQw9CcaEMCXOme5MJ0TM2YZBLYNT4ogaDQJ/AIg77Sx8A0+E6uEsyUSpGqVipWpcVet1zwYYA4iM3bEAAh+QQJCgANACwCAAAACwAQAAAFP2BTEEPZnCgJRE5pNuTCMNDMDPCQBIF95wqeMIAjCR6VYdE1oBieSxTzREJZqbhrKqvNdbFfb/cwQBy+h3M3BAAh+QQJCgAVACwCAAAACwAQAAAFQGBVEEM5VChKAtHkmOqwMDREn2QS7DSDD4qdMPATPCQN4c80oBgMv1QFViFJr9ZrKqutnrpecLh7GCAO4AO6GwIAIfkECQoAFQAsAgAAAAsAEAAABUFgVRBDWVZoRQLRNDmnOixMzUDMICdBH9Q6ksLnCw4ED4mk0TOaShSDMYWKkajYKzal3cq8qO5WTD0MEAfwIe0NAQAh+QQFCgAGACwCAAAACwAQAAAGRUBDgTAoGg1IIiAyaToGycGCQaWGoMREYLtlYAcKLvcreEjOjcDXaAR9kXAD1ECM2+t2OD5Pn/P3eYBxBwMIB3wGB4d8QQA7",
    singaporean_flag = "data:image/gif;base64,R0lGODlhEAAQAPUNAO+HjD6JSOU8RP///8s4QOtiabiLkCkjMb03P7hvUHM+Oce2uj4nMc6+weLO0My8v/Ln6NjJy9XEx/Ll5tHAw8W2uvjw8dfFyM69wdBJUNPEx+bT1evT1OLS1ODP0dDEx9vIysm7vsi2uspSWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgANACwAAAAAEAAQAAAEP7DJpJi9TGpZkRgCIAjZ1lQEWAhruaEfO7paZQx4TnPMkuumEwYTFBaLlWMwqXztlMwmT1p7FgOMQ4DaCGybEQAh+QQJCgAOACwCAAAACwAQAAAEOtAlxZy9liLGe2YEMgiAIFQUMRYCizKGsJrvMtz4yzT4/Todj4OCKRKLlyNyWFkync9lgHEIOAPWZQQAIfkECQoACwAsAgAAAAsAEAAABT7gkigMs5zoQiJb6Z4kMXACIAhmfBcCnzOGwaB3+z06wuSv5EkOfidXCWZKpUjWazWr2max3G44wDgExmduCAAh+QQJCgALACwCAAAACwAQAAAFQuCSKEy5nCiJIFBpLiQxCAJAMzBDCEMh+DiSYTDzCYKMh8RBJCJdkSYS5cLlUNgTKYvdcrXWr1cczgYYh8B3EVB/QwAh+QQJCgAAACwCAAAACwAQAAAGSEBAQsEoMgBIJBGBmCCMSgZhICggBIIjkSCgVrMAomFALmC1jIfkAyIP0EZGiIxOAqDho91O3PP1fnmBUYOCgQEMBwGDAYuBQQAh+QQJCgAAACwCAAAACwAQAAAFQiCQKExZAihAIsiEZKfKEINQCIjAyIRQF7cdyTAo1nQyDEWjuRSFJlPFAk2hYiSrNqtNcbsyMOrbJVsDjENAHFiDQwAh+QQFCgAAACwCAAAACwAQAAAGR0BAQsEoGgFIIgIxQYwQjCSDMBAUrFAAkSCoXgVRomFAJoO1DAxFw74Mwsa4CI6sA6Jou56ot/P7UoCBgn99AQwHAYIBioBBADs=",
    stone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA////wMvcOkRmWmmIi5u0NbIH5AAAAAF0Uk5TAEDm2GYAAAAxSURBVAjXY2BwcXFhYGAJFBR1YDBVUlIKhpFBgqpAMiTUFUS6wElmIGnAwGBsbMwAACeMCl1SS3K/AAAAAElFTkSuQmCC",
    egg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALBAMAAAC0QAErAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAuG9Q////vkov6tSqwoVp6LeWFD5WfgAAAAF0Uk5TAEDm2GYAAABDSURBVAjXY2BgDQ1gYGAIS0tlYGBNc0oLAJJpQDIsTQkoFJai5JbKIJbiAiRF01zSAhlEgSoDGZhDQ0MNGBiMjY0ZAM3UDhfpAMERAAAAAElFTkSuQmCC",
    ironOre = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA////qLWygZeWx8/MV3J3HeDyeAAAAAF0Uk5TAEDm2GYAAAA+SURBVAjXY2BgYAgFYtZQwQAG1hAXF1cGIOEiyhDo4iJoyhAkIqgEJJWVlEMZgpWVjEMZWI2NTQOAekJDGQAHbQl34P9HEgAAAABJRU5ErkJggg==",
    gold = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA6c9IpDwG8vPe0WQF7qog9d9wdR0RX7g0YAAAAAF0Uk5TAEDm2GYAAABzSURBVBjTY2CAgfLycgZkgIfPDmSXGxsblxcQwQdyytKgIL2cIL+8UBDGSzM2J4JfbCwoBuYYG7u4E8EvDTU2A3FCQ0OJ5IeGuAA5QFJJnQh+iQuE7+KkBAoyQnyg/12AwEkJqBkaXvj54JiAAETM4OQDACGyf9XkHbdZAAAAAElFTkSuQmCC",
    chicken = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA/N2L60dPmzRA/a4xvcrdJitE/f3+ojOgvwAAAAF0Uk5TAEDm2GYAAAA/SURBVAjXY2BgMDZgAAJmJWUQlayknMDAwFZeXl7GwJAOpMoTGFJDy9PTQVS4iCOYcnEBC4IoqEqGtJS0BAYASeAR4EkMsk8AAAAASUVORK5CYII=",
    questionMark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKBAMAAACK4lk+AAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAA/////5mc9nV6JitEHvn6fgAAAAF0Uk5TAEDm2GYAAAAqSURBVAjXY2BxcWFgcDZWdAASRkDCxNiBwcUFSLAYgwkXIAHEQBaIALIAvzIHHSDGj7YAAAAASUVORK5CYII=",
    greenThumb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAdvFbR4s4Y8dNJitEJcSRkAAAAAF0Uk5TAEDm2GYAAABFSURBVAjXY2BAAi5QmkXQAcowRGc4G7u4gJguwsaCgiIgpcZGLi4ghrGxipKxCYTh4mKCLKIEFWFwUQKKgE1yAQIGLAAA7h4LeHvUAhEAAAAASUVORK5CYII=",
    goldRush = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQBAMAAADQT4M0AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA+/hN////9sIAvkovi5u0GBQlOkRmPdM00wAAAAF0Uk5TAEDm2GYAAABOSURBVAjXY2BgYHBhAAE2YQcQlWIMphIggmkQqbS0BCCVFFquBuSEl5cXJTCkl5eWh4cxpJemlaWWAXnh5eFIFBCUMbCBKKDGdBAHagoAN8cZFjAuPiUAAAAASUVORK5CYII=",
    prospector = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAMAAADaUYZlAAAABGdBTUEAALGPC/xhBQAAAE5QTFRFAAAAGBQkFxQkGBMk+/lN/PlO+qoh/Pjfi5y1jJy1wMzcFxMk9sIAvkovFxQl+qsg+qkg+/hNi5u0+6sg+qog9cEA+O0z9cIAGRQlGBQlErHqigAAAAF0Uk5TAEDm2GYAAABfSURBVAjXNY1ZDsAgCETtZrVuuCL3v2jBxPkh75HMKCUhyVQ7NFpLNW/hWh0De8+0MKZQEVn4ZwkKLVSPw5r7Wuy47KTyvVYaZoyrnrkwUwKtAaBjMSgTPDwn/w+56gfbvAdw62rb3AAAAABJRU5ErkJggg==",
    wrangler = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAA6tSq5KZywoVpPicxcz45AAAADXXyKwAAAAF0Uk5TAEDm2GYAAABjSURBVAjXRY3RCYAwEEPzdSO4gOAAgp3g6gIt/Y7Wdv8RbIrgEe4eJOSAfwiYri3ARcFK2ycctDTtjiHKNip4B9ShDbXYkdgCWvk0As+pDbMcqZ7a3EsQZPcoaN67F71QM/ECIDsWDSO5nhwAAAAASUVORK5CYII=",
    barnManager = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMBAMAAACpRTGTAAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAAvkov7Zgx/94f/89pAAcM9c928pQi/6cbvXoAAgICETytOQAAAAF0Uk5TAEDm2GYAAABFSURBVAjXY2BgWMUABFwMC4DkqlVADpfkzIkLGLjK0tKB5PTySiA5qUMTSM7o6FzAsLjFxcOKgQuoEqiBNSMApDmUgQEAp4ATRVdFNiEAAAAASUVORK5CYII=",
    seedSpecialist = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMBAMAAABGh1qtAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAANVtErlA4a0I7gsdjfMFeUoRPFxQkmvnWowAAAAF0Uk5TAEDm2GYAAAA0SURBVAjXY2AoLygvYGBgd013TQdSoemhICotPQ1IMZSX4ZErBMkxMBQJgaliYzDFDhQEABAaEWiGa5r3AAAAAElFTkSuQmCC",
    logger = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIBAMAAAACWGKkAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAGiM/WmmMph8t5zU/9nZ8xsvfAAAAL5K8egAAAAF0Uk5TAEDm2GYAAABASURBVAjXY2AAgnIQwVBQUA5msaurq4eGFjAwFKWlpYWGhjMwqAkKCrq4uBeARUxcHMrBaoyNjc1BugrKy8sLANJcD12iWuq6AAAAAElFTkSuQmCC",
    lumberjack = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAANBAMAAAC0vDhTAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAAcz45PicxdD8513ZDvkovwMvci5u0WmmIGBQlWNSWfgAAAAF0Uk5TAEDm2GYAAAB8SURBVAjXNY2xDcJAFEPdukViBAoGSMEIV4MEWYCQBXK5liKY7kuQI7ctPwm4sJ5kWwZQDD8Dz8kt1gsP0fDpnjNPahLjTV6iNCR2kge5l2pepM6Qo+7bcaOHM5u+7MJ+iq1vc4vXyXidD2gMVUDBovfRgxUxHlj9mbY2vuryJ2qMlpQiAAAAAElFTkSuQmCC",
    redEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAhBAMAAAAxLHauAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAAAAA8pSUkQAA8mJiWQAAfRcjmQAAAAJ0Uk5TOABhDHHDAAAAZklEQVQY04XQyxGAMAgEUOxAD2kAxwrQBhQL8LP9t2LA5GZwL8w7LMNAQ04CDpsUAifzhB8k8Ci6cq7FkFl1kxi4RFXNOyLcVjAvP3hXl04LdbV3mrBDPfXqBnqCh7oQ+Xee8tFvPJTdTbOb4MexAAAAAElFTkSuQmCC",
    yellowEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAhBAMAAAAxLHauAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAAAAA/9iUo/+RsJUA8pSU/9guk3gfwpOD7QAAAAJ0Uk5TOABhDHHDAAAAbElEQVQY02MQBALx8vJCEM2Al1NepKSkXk6AI16upJYWGmwM1IafkwYEqaH4OeVlaaFhIG5aejk+TmmosWkoYQ5ET2ooAU6JC1A90KGh4fg4QIe6AIErzNW4OAIM5WDAwIiXAww7MICGKHYOAOmkbP1Rg8n6AAAAAElFTkSuQmCC",
    purpleEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAhBAMAAAAxLHauAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAAAAA/9gu03j//9iUXQCKkADWMgBKmMdKZAAAAAJ0Uk5TOABhDHHDAAAAb0lEQVQY04XQuw2AMAwEULMBVOlTwABBYoGIDSJ6QEeN+Hh9YouSmGt8r7BkmZocx7zLJBN8hDDwDxyHPmIJec0GgDjCBt/SsEZsbEMa4DsTp7YWulPGlaTNPk0W8qFJ815dQk2socpE/p3m/eg3HlAwaqJ4aWCHAAAAAElFTkSuQmCC",
    blueEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAhBAMAAAAxLHauAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAAAAANsL/Hm3VEk6JDzdrrR0rWAAAAAJ0Uk5TOABhDHHDAAAAYklEQVQY02MQBALR0NBAEM2AlxMapKSkGkqAIxqqpOJibKQE1Iaf4+JsDET4OaEhLsYmYGQaio8TbAzR4+KKl0OkaSEuKHpwcEAOBQOYq3FwBBhCwYCBES8HGHZgAA1R7BwAWAJOTK/kC64AAAAASUVORK5CYII=",
    greenEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAhBAMAAAAxLHauAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAAAAAPolIo/+R/5QcX8JLNUIj4C8YIAAAAAJ0Uk5TOABhDHHDAAAAa0lEQVQY04XQsQ2AMAwEQLMBNAwQIRYwYgEeJiD0QPD+I2BMSnC+sa546WVqNK3I/lxyISfzKAW0wgMwsdZ8RIsPSYgrMEcs4uGKOZuLZAWggCO8ldB70KFaCB3y6j/UJBaqXOjvLPmj37gB1cRdqXl8FI8AAAAASUVORK5CYII=",
    orangeEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAhBAMAAAAxLHauAAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAAAAAADzdrHm3VNsL//750x10J/5QcfCkMw7MaGwAAAAJ0Uk5TOABhDHHDAAAAdElEQVQY02MQBAKJjo5GEM2Al9PRGhoa0UGAI9ERGl5ubBoK1Iaf4+KWVl5ejp/T0QZiAYGLRwc+TrMxiAXUVoGX016ell6elmxMgNOW5uIOMjotAx8H6NC0tDQltTSoq3FxBBg6wICBES8HGHZgAA1R7BwABR57pu0Ihy0AAAAASUVORK5CYII=",
    pinkEgg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAhBAMAAAAxLHauAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAAAAA03j/o/+R8mJi8rq68pSU5DtEi1RCkAAAAAJ0Uk5TOABhDHHDAAAAc0lEQVQY02MQBALx8vJCEM2Al1NeGhoaXk6AI14eGpampBoK1IafkwYEycb4OUBzjU1DQfz0cnycsjQltTSg6UBH4OMUGwPVG5ulKanj5ZS4pKWCjHZxx8cBOtQFDKCuxsURYCgHAwZGvBxg2IEBNESxcwAQY2pR57pSKAAAAABJRU5ErkJggg==",
    easterBasket = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAAAAAAu2wHqmABiVlEpVwA0YgskFUJr2ABzHIAIdPi6QAAAAJ0Uk5TOABhDHHDAAAAu0lEQVQ4y82UMQpCMQyG4+RqQRFHe4UOzkIXR9EMrg7BUXEIXuBZRxHF3NY2PnyvXqD9hn/I1yGEpGB+0Je9tV0NKtATxK5o7bwajbg2GTORSrTIvUo99h5x6zNWIt4vC2vEnUReRBpEhxB0JUNoiIpqkXeI3ETaiGhNo6hmvqTOn4j9h03q/MpcVBszZdbJtuN9OKfBfNJ1KKkjzGfnEDcpIs4tmHtHVFIDDDnjCFCJNmYEGYO/D7uE/gAoWuavl8o/8QAAAABJRU5ErkJggg==",
    easterBunny$1 = "./assets/easter_bunny.587dfdcd.gif",
    REQUIRED_XP;
(function(e) {
    e[e.LEVEL_1 = 0] = "LEVEL_1", e[e.LEVEL_2 = 50] = "LEVEL_2", e[e.LEVEL_3 = 150] = "LEVEL_3", e[e.LEVEL_4 = 350] = "LEVEL_4", e[e.LEVEL_5 = 700] = "LEVEL_5", e[e.LEVEL_6 = 1100] = "LEVEL_6", e[e.LEVEL_7 = 1400] = "LEVEL_7", e[e.LEVEL_8 = 2e3] = "LEVEL_8", e[e.LEVEL_9 = 3e3] = "LEVEL_9", e[e.LEVEL_10 = 5e3] = "LEVEL_10"
})(REQUIRED_XP || (REQUIRED_XP = {}));
const SKILL_TREE = {
    "Green Thumb": {
        level: 5,
        conflicts: "Barn Manager",
        profession: "farming",
        perks: ["Crops are worth 5% more", "Increase mutant crop chance"]
    },
    "Barn Manager": {
        level: 5,
        conflicts: "Green Thumb",
        profession: "farming",
        perks: ["Animals yield 10% more goods", "Increase mutant animal chance"]
    },
    "Seed Specialist": {
        level: 10,
        conflicts: "Wrangler",
        requires: "Green Thumb",
        profession: "farming",
        perks: ["Crops grow 10% faster", "Increase mutant crop chance"]
    },
    Wrangler: {
        level: 10,
        conflicts: "Seed Specialist",
        requires: "Barn Manager",
        profession: "farming",
        perks: ["Animals produce goods 10% faster", "Increase mutant animal chance"]
    },
    Lumberjack: {
        level: 5,
        conflicts: "Prospector",
        profession: "gathering",
        perks: ["Increase wood drops by 10%"]
    },
    Prospector: {
        level: 5,
        conflicts: "Lumberjack",
        profession: "gathering",
        perks: ["Increase stone drops by 20%"]
    },
    Logger: {
        level: 10,
        requires: "Lumberjack",
        conflicts: "Gold Rush",
        profession: "gathering",
        perks: ["Axes last 25% longer"]
    },
    "Gold Rush": {
        level: 10,
        requires: "Prospector",
        conflicts: "Logger",
        profession: "gathering",
        perks: ["Increase gold drops by 50%"]
    }
};

function getLevel(e) {
    return e.gte(5e3) ? 10 : e.gte(3e3) ? 9 : e.gte(2e3) ? 8 : e.gte(1400) ? 7 : e.gte(1100) ? 6 : e.gte(700) ? 5 : e.gte(350) ? 4 : e.gte(150) ? 3 : e.gte(50) ? 2 : 1
}

function getAvailableUpgrades(e) {
    const A = getLevel(e.skills.farming);
    if (A >= 5 && !e.inventory["Green Thumb"] && !e.inventory["Barn Manager"]) return ["Green Thumb", "Barn Manager"];
    if (A >= 10 && !e.inventory["Seed Specialist"] && !e.inventory.Wrangler) return e.inventory["Green Thumb"] ? ["Seed Specialist"] : ["Wrangler"];
    const t = getLevel(e.skills.gathering);
    return t >= 5 && !e.inventory.Lumberjack && !e.inventory.Prospector ? ["Lumberjack", "Prospector"] : t >= 10 && !e.inventory.Logger && !e.inventory["Gold Rush"] ? e.inventory.Prospector ? ["Gold Rush"] : ["Logger"] : []
}

function upgradeAvailable(e) {
    return getAvailableUpgrades(e).length > 0
}

function getRequiredXpToLevelUp(e) {
    if (e === 10) return;
    const A = e + 1;
    return REQUIRED_XP[`LEVEL_${A}`]
}
const crops = CROPS(),
    seeds = SEEDS(),
    ITEM_DETAILS = {
        Sunflower: l(c({}, crops.Sunflower), {
            image: sunflowerPlant$1
        }),
        Potato: l(c({}, crops.Potato), {
            image: potatoCrop
        }),
        Pumpkin: l(c({}, crops.Pumpkin), {
            image: pumpkin
        }),
        Carrot: l(c({}, crops.Carrot), {
            image: carrotCrop
        }),
        Cabbage: l(c({}, crops.Cabbage), {
            image: cabbageCrop
        }),
        Beetroot: l(c({}, crops.Beetroot), {
            image: beetrootCrop
        }),
        Cauliflower: l(c({}, crops.Cauliflower), {
            image: cauliflowerCrop
        }),
        Parsnip: l(c({}, crops.Parsnip), {
            image: parsnipCrop
        }),
        Radish: l(c({}, crops.Radish), {
            image: radishCrop
        }),
        Wheat: l(c({}, crops.Wheat), {
            image: wheatCrop
        }),
        "Sunflower Seed": l(c({}, seeds["Sunflower Seed"]), {
            image: seed,
            secondaryImage: sunflowerPlant$1
        }),
        "Potato Seed": l(c({}, seeds["Potato Seed"]), {
            image: potatoSeed,
            secondaryImage: potatoCrop
        }),
        "Pumpkin Seed": l(c({}, seeds["Pumpkin Seed"]), {
            image: pumpkinSeed,
            secondaryImage: pumpkin
        }),
        "Carrot Seed": l(c({}, seeds["Carrot Seed"]), {
            image: carrotSeed,
            secondaryImage: carrotCrop
        }),
        "Cabbage Seed": l(c({}, seeds["Cabbage Seed"]), {
            image: cabbageSeed,
            secondaryImage: cabbageCrop
        }),
        "Beetroot Seed": l(c({}, seeds["Beetroot Seed"]), {
            image: seed$1,
            secondaryImage: beetrootCrop
        }),
        "Cauliflower Seed": l(c({}, seeds["Cauliflower Seed"]), {
            image: cauliflowerSeed,
            secondaryImage: cauliflowerCrop
        }),
        "Parsnip Seed": l(c({}, seeds["Parsnip Seed"]), {
            image: parsnipSeed,
            secondaryImage: parsnipCrop
        }),
        "Radish Seed": l(c({}, seeds["Radish Seed"]), {
            image: radishSeed,
            secondaryImage: radishCrop
        }),
        "Wheat Seed": l(c({}, seeds["Wheat Seed"]), {
            image: wheatSeed,
            secondaryImage: wheatCrop
        }),
        Wood: l(c({}, RESOURCES.Wood), {
            image: wood
        }),
        Stone: l(c({}, RESOURCES.Stone), {
            image: stone
        }),
        Iron: l(c({}, RESOURCES.Iron), {
            image: ironOre
        }),
        Gold: l(c({}, RESOURCES.Gold), {
            image: gold
        }),
        Egg: l(c({}, RESOURCES.Egg), {
            image: egg
        }),
        Chicken: l(c({}, RESOURCES.Chicken), {
            image: chicken
        }),
        Cow: l(c({}, RESOURCES.Chicken), {
            image: questionMark
        }),
        Sheep: l(c({}, RESOURCES.Chicken), {
            image: questionMark
        }),
        Pig: l(c({}, RESOURCES.Chicken), {
            image: questionMark
        }),
        Axe: l(c({}, TOOLS.Axe), {
            image: axe
        }),
        Pickaxe: l(c({}, TOOLS.Pickaxe), {
            image: woodPickaxe
        }),
        "Stone Pickaxe": l(c({}, TOOLS["Stone Pickaxe"]), {
            image: pickaxe
        }),
        "Iron Pickaxe": l(c({}, TOOLS["Iron Pickaxe"]), {
            image: ironPickaxe
        }),
        Hammer: l(c({}, TOOLS.Hammer), {
            image: tool$1
        }),
        Rod: l(c({}, TOOLS.Rod), {
            image: rod
        }),
        "Sunflower Statue": l(c({}, BLACKSMITH_ITEMS["Sunflower Statue"]), {
            image: sunflowerStatue
        }),
        "Potato Statue": l(c({}, BLACKSMITH_ITEMS["Potato Statue"]), {
            image: potatoStatue
        }),
        Nancy: l(c({}, MARKET_ITEMS.Nancy), {
            image: nancy
        }),
        Scarecrow: l(c({}, MARKET_ITEMS.Scarecrow), {
            image: scarecrow
        }),
        Kuebiko: l(c({}, MARKET_ITEMS.Kuebiko), {
            image: kuebiko
        }),
        "Christmas Tree": l(c({}, BLACKSMITH_ITEMS["Christmas Tree"]), {
            image: christmasTree
        }),
        Gnome: l(c({}, BLACKSMITH_ITEMS.Gnome), {
            image: gnome
        }),
        "Gold Egg": l(c({}, BARN_ITEMS["Gold Egg"]), {
            image: goldEgg
        }),
        "Farm Cat": l(c({}, BARN_ITEMS["Farm Cat"]), {
            image: cat
        }),
        "Farm Dog": l(c({}, BARN_ITEMS["Farm Dog"]), {
            image: dog
        }),
        "Chicken Coop": l(c({}, BARN_ITEMS["Chicken Coop"]), {
            image: coop
        }),
        "Golden Cauliflower": l(c({}, MARKET_ITEMS["Golden Cauliflower"]), {
            image: goldenCauliflower
        }),
        "Sunflower Rock": l(c({}, BLACKSMITH_ITEMS["Sunflower Rock"]), {
            image: sunflowerRock
        }),
        "Sunflower Tombstone": l(c({}, BLACKSMITH_ITEMS["Sunflower Tombstone"]), {
            image: sunflowerTombstone
        }),
        "Goblin Crown": l(c({}, BLACKSMITH_ITEMS["Goblin Crown"]), {
            image: nft
        }),
        Fountain: l(c({}, BLACKSMITH_ITEMS.Fountain), {
            image: fountain
        }),
        "Woody the Beaver": l(c({}, BLACKSMITH_ITEMS["Woody the Beaver"]), {
            image: beaver
        }),
        "Apprentice Beaver": l(c({}, BLACKSMITH_ITEMS["Apprentice Beaver"]), {
            image: apprentice
        }),
        "Foreman Beaver": l(c({}, BLACKSMITH_ITEMS["Foreman Beaver"]), {
            image: foreman
        }),
        "Mysterious Parsnip": l(c({}, MARKET_ITEMS["Mysterious Parsnip"]), {
            image: mysteriousParsnip
        }),
        "Carrot Sword": l(c({}, MARKET_ITEMS["Carrot Sword"]), {
            image: carrotSword
        }),
        "Nyon Statue": l(c({}, BLACKSMITH_ITEMS["Nyon Statue"]), {
            image: nyonStatue
        }),
        "Homeless Tent": l(c({}, BLACKSMITH_ITEMS["Homeless Tent"]), {
            image: homelessTent
        }),
        "Farmer Bath": l(c({}, BLACKSMITH_ITEMS["Farmer Bath"]), {
            image: farmerBath
        }),
        "Pumpkin Soup": l(c({}, FOODS()["Pumpkin Soup"]), {
            image: pumpkinSoup
        }),
        Sauerkraut: l(c({}, FOODS().Sauerkraut), {
            image: cabbageSoup$1
        }),
        "Roasted Cauliflower": l(c({}, FOODS()["Roasted Cauliflower"]), {
            image: cauliflowerRice
        }),
        "Radish Pie": l(c({}, FOODS()["Radish Pie"]), {
            image: radishPie
        }),
        "Green Thumb": {
            description: SKILL_TREE["Green Thumb"].perks[0],
            image: greenThumb
        },
        "Barn Manager": {
            description: SKILL_TREE["Barn Manager"].perks[0],
            image: barnManager
        },
        "Seed Specialist": {
            description: SKILL_TREE["Seed Specialist"].perks[0],
            image: seedSpecialist
        },
        Wrangler: {
            description: SKILL_TREE.Wrangler.perks[0],
            image: wrangler
        },
        Lumberjack: {
            description: SKILL_TREE.Lumberjack.perks[0],
            image: lumberjack
        },
        Prospector: {
            description: SKILL_TREE.Prospector.perks[0],
            image: prospector
        },
        Logger: {
            description: SKILL_TREE.Logger.perks[0],
            image: logger
        },
        "Gold Rush": {
            description: SKILL_TREE["Gold Rush"].perks[0],
            image: goldRush
        },
        "Australian Flag": l(c({}, FLAGS["Australian Flag"]), {
            image: australiaFlag
        }),
        "Belgian Flag": l(c({}, FLAGS["Belgian Flag"]), {
            image: belgiumFlag
        }),
        "Brazilian Flag": l(c({}, FLAGS["Brazilian Flag"]), {
            image: brazilFlag
        }),
        "Chinese Flag": l(c({}, FLAGS["Chinese Flag"]), {
            image: chinaFlag
        }),
        "Finnish Flag": l(c({}, FLAGS["Finnish Flag"]), {
            image: finlandFlag
        }),
        "French Flag": l(c({}, FLAGS["French Flag"]), {
            image: franceFlag
        }),
        "German Flag": l(c({}, FLAGS["German Flag"]), {
            image: germanFlag
        }),
        "Indonesian Flag": l(c({}, FLAGS["Indonesian Flag"]), {
            image: indonesiaFlag
        }),
        "Indian Flag": l(c({}, FLAGS["Indian Flag"]), {
            image: indiaFlag
        }),
        "Iranian Flag": l(c({}, FLAGS["Iranian Flag"]), {
            image: iranFlag
        }),
        "Italian Flag": l(c({}, FLAGS["Italian Flag"]), {
            image: italyFlag
        }),
        "Japanese Flag": l(c({}, FLAGS["Japanese Flag"]), {
            image: japanFlag
        }),
        "Moroccan Flag": l(c({}, FLAGS["Moroccan Flag"]), {
            image: moroccoFlag
        }),
        "Dutch Flag": l(c({}, FLAGS["Dutch Flag"]), {
            image: netherlandsFlag
        }),
        "Philippine Flag": l(c({}, FLAGS["Philippine Flag"]), {
            image: phillipinesFlag
        }),
        "Polish Flag": l(c({}, FLAGS["Polish Flag"]), {
            image: polandFlag
        }),
        "Portuguese Flag": l(c({}, FLAGS["Portuguese Flag"]), {
            image: portugalFlag
        }),
        "Russian Flag": l(c({}, FLAGS["Russian Flag"]), {
            image: russiaFlag
        }),
        "Saudi Arabian Flag": l(c({}, FLAGS["Saudi Arabian Flag"]), {
            image: saudiArabiaFlag
        }),
        "South Korean Flag": l(c({}, FLAGS["South Korean Flag"]), {
            image: southKoreaFlag
        }),
        "Spanish Flag": l(c({}, FLAGS["Spanish Flag"]), {
            image: spainFlag
        }),
        "Sunflower Flag": l(c({}, FLAGS["Sunflower Flag"]), {
            image: flag
        }),
        "Thai Flag": l(c({}, FLAGS["Thai Flag"]), {
            image: thailandFlag
        }),
        "Turkish Flag": l(c({}, FLAGS["Turkish Flag"]), {
            image: turkeyFlag
        }),
        "Ukrainian Flag": l(c({}, FLAGS["Ukrainian Flag"]), {
            image: ukraineFlag
        }),
        "American Flag": l(c({}, FLAGS["American Flag"]), {
            image: usaFlag
        }),
        "Vietnamese Flag": l(c({}, FLAGS["Vietnamese Flag"]), {
            image: vietnamFlag
        }),
        "Canadian Flag": l(c({}, FLAGS["Canadian Flag"]), {
            image: canadian_flag
        }),
        "Singaporean Flag": l(c({}, FLAGS["Singaporean Flag"]), {
            image: singaporean_flag
        }),
        "British Flag": l(c({}, FLAGS["British Flag"]), {
            image: british_flag
        }),
        "Sierra Leone Flag": l(c({}, FLAGS["Sierra Leone Flag"]), {
            image: sierra_leone_flag
        }),
        "Romanian Flag": l(c({}, FLAGS["Romanian Flag"]), {
            image: romanian_flag
        }),
        "Rainbow Flag": l(c({}, FLAGS["Rainbow Flag"]), {
            image: rainbow_flag
        }),
        "Goblin Flag": l(c({}, FLAGS["Goblin Flag"]), {
            image: goblin_flag
        }),
        "Pirate Flag": l(c({}, FLAGS["Pirate Flag"]), {
            image: pirate_flag
        }),
        "Algerian Flag": l(c({}, FLAGS["Algerian Flag"]), {
            image: algerian_flag
        }),
        "Mexican Flag": l(c({}, FLAGS["Mexican Flag"]), {
            image: mexican_flag
        }),
        "Dominican Republic Flag": l(c({}, FLAGS["Dominican Republic Flag"]), {
            image: dominican_republic_flag
        }),
        "Argentinian Flag": l(c({}, FLAGS["Argentinian Flag"]), {
            image: argentinian_flag
        }),
        "Lithuanian Flag": l(c({}, FLAGS["Lithuanian Flag"]), {
            image: lithuanian_flag
        }),
        "Malaysian Flag": l(c({}, FLAGS["Malaysian Flag"]), {
            image: malaysian_flag
        }),
        "Colombian Flag": l(c({}, FLAGS["Colombian Flag"]), {
            image: colombian_flag
        }),
        "Egg Basket": l(c({}, CRAFTABLES()["Egg Basket"]), {
            image: easterBasket
        }),
        "Easter Bunny": l(c({}, CRAFTABLES()["Easter Bunny"]), {
            image: easterBunny$1
        }),
        "Blue Egg": {
            description: "A blue easter egg",
            image: blueEgg
        },
        "Orange Egg": {
            description: "An orange easter egg",
            image: orangeEgg
        },
        "Green Egg": {
            description: "A green easter egg",
            image: greenEgg
        },
        "Yellow Egg": {
            description: "A yellow easter egg",
            image: yellowEgg
        },
        "Red Egg": {
            description: "A red easter egg",
            image: redEgg
        },
        "Pink Egg": {
            description: "A pink easter egg",
            image: pinkEgg
        },
        "Purple Egg": {
            description: "A purple easter egg",
            image: purpleEgg
        }
    };
var timer = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALBAMAAACwtdEWAAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAA/////udhwMvc/q40cz4513ZDvkovGBQls3fIyQAAAAF0Uk5TAEDm2GYAAAA5SURBVAjXY+gAAoa28vIMhtbQ0AgGDmPjBgaGRgkGBgYOIIOhSQPIcHFpYGhLS8tgaC8vr2AA6QAAmEgPFCojcQMAAAAASUVORK5CYII=",
    lightning = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOBAMAAADkjZCYAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAA9N5d7HEh86YyFxQk8fOaoAAAAAF0Uk5TAEDm2GYAAAAzSURBVAjXY2CAARcQwaICIp1BJIsxiHQ0cgAyhY1cHBhYXIzBHLC4M4gJUcjg5ADXDwYA6KoF2UQJB0cAAAAASUVORK5CYII=";
const ONE_SEC = 1,
    ONE_MIN = ONE_SEC * 60,
    ONE_HR = ONE_MIN * 60,
    ONE_DAY = ONE_HR * 24;

function timeToStr(e, A) {
    const t = e === 1 ? A : `${A}s`;
    return `${e}${t}`
}

function getTimeUnits(e) {
    const A = Math.ceil(e % ONE_MIN),
        t = Math.floor(e / ONE_MIN % ONE_MIN),
        a = Math.floor(e / ONE_HR % 24),
        n = Math.floor(e / ONE_DAY);
    return [n && timeToStr(n, "day"), a && timeToStr(a, "hr"), t && timeToStr(t, "min"), A && timeToStr(A, "sec")].filter(Boolean)
}

function secondsToString(e) {
    const A = Math.ceil(e);
    if (A < ONE_MIN) return timeToStr(A, "sec");
    if (e < ONE_HR) {
        const a = Math.ceil(e / ONE_MIN);
        return timeToStr(a, "min")
    }
    if (e < ONE_DAY) {
        const a = Math.ceil(e / ONE_HR);
        return timeToStr(a, "hr")
    }
    const t = Math.ceil(e / ONE_DAY);
    return timeToStr(t, "day")
}

function secondsToMidString(e) {
    return getTimeUnits(e).slice(0, 2).join(" ")
}

function secondsToLongString(e) {
    return getTimeUnits(e).join(" ")
}

function getTimeLeft(e, A) {
    const t = Date.now() - e;
    return t > A * 1e3 ? 0 : A - t / 1e3
}

function formatDateTime(e) {
    return new Date(e).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !0
    })
}
const useShowScrollbar = e => {
        const [A, t] = react.exports.useState(!1), a = react.exports.useRef(null);
        return react.exports.useEffect(() => {
            var s;
            const n = (s = a.current) == null ? void 0 : s.scrollHeight;
            n && n > e && t(!0)
        }, [a.current]), {
            ref: a,
            showScrollbar: A
        }
    },
    ITEM_CARD_MIN_HEIGHT = "148px",
    TAB_CONTENT_HEIGHT$1 = 384,
    isSeed = e => e in SEEDS(),
    InventoryTabContent = ({
        tabItems: e,
        selectedItem: A,
        setDefaultSelectedItem: t,
        inventory: a,
        inventoryItems: n,
        onClick: s
    }) => {
        const {
            ref: r,
            showScrollbar: i
        } = useShowScrollbar(TAB_CONTENT_HEIGHT$1), [m] = useScrollIntoView(), d = Object.keys(e), [E, u] = react.exports.useState(!1);
        react.exports.useEffect(() => {
            const h = d.find(S => {
                    var y;
                    return !!((y = w[S]) == null ? void 0 : y.length)
                }),
                f = getShortcuts()[0] || h && w[h][0];
            f && t(f)
        }, []), react.exports.useEffect(() => u(hasBoost({
            item: A,
            inventory: a
        })), [a, A]);
        const w = n.reduce((h, f) => {
                const S = d.find(y => f in e[y].items);
                if (S) {
                    const y = h[S] || [];
                    h[S] = [...y, f]
                }
                return h
            }, {}),
            B = h => (console.log({
                category: h,
                inventoryMapping: w
            }), Object.keys(w).includes(h)),
            g = (h = "") => {
                const f = h.split(" ")[0];
                return secondsToMidString(getCropTime(f, a))
            },
            C = h => {
                s(h), h && ITEM_DETAILS[h].section && m(ITEM_DETAILS[h].section)
            },
            Q = Object.values(w).every(h => h.length === 0);
        return React.createElement("div", {
            className: "flex flex-col"
        }, !Q && React.createElement(OuterPanel, {
            className: "flex-1 mb-3"
        }, A && React.createElement("div", {
            style: {
                minHeight: ITEM_CARD_MIN_HEIGHT
            },
            className: "flex flex-col justify-evenly items-center p-2"
        }, React.createElement("span", {
            className: "text-center text-shadow"
        }, A), React.createElement("img", {
            src: ITEM_DETAILS[A].image,
            className: "h-12",
            alt: A
        }), React.createElement("span", {
            className: "text-xs text-shadow text-center mt-2 w-80"
        }, ITEM_DETAILS[A].description), isSeed(A) && React.createElement("div", {
            className: "w-full pt-1"
        }, React.createElement("div", {
            className: "flex justify-center items-end"
        }, React.createElement("img", {
            src: timer,
            className: "h-5 me-2"
        }), E && React.createElement("img", {
            src: lightning,
            className: "h-6 me-2"
        }), React.createElement("span", {
            className: "text-xs text-shadow text-center mt-2 "
        }, g(A)))))), React.createElement("div", {
            ref: r,
            style: {
                maxHeight: TAB_CONTENT_HEIGHT$1
            },
            className: classNames("overflow-y-auto", {
                scrollable: i
            })
        }, d.map(h => React.createElement("div", {
            className: "flex flex-col pl-2",
            key: h
        }, React.createElement("p", {
            className: "mb-2 underline"
        }, h), B(h) ? React.createElement("div", {
            className: "flex mb-2 flex-wrap pl-1.5"
        }, w[h].map(f => React.createElement(Box, {
            count: a[f],
            isSelected: A === f,
            key: f,
            onClick: () => C(f),
            image: ITEM_DETAILS[f].image
        }))) : React.createElement("p", {
            className: "text-white text-xs text-shadow mb-2 pl-2.5"
        }, `No ${h} in inventory`)))))
    },
    BASKET_CATEGORIES = {
        Seeds: {
            img: seed$1,
            items: SEEDS()
        },
        Tools: {
            img: tool$1,
            items: TOOLS
        },
        Resources: {
            img: wood,
            items: RESOURCES
        },
        Crops: {
            img: sunflowerPlant$1,
            items: CROPS()
        }
    },
    COLLECTIBLE_CATEGORIES = {
        NFTs: {
            img: gnome$1,
            items: c(c(c(c({}, BLACKSMITH_ITEMS), BARN_ITEMS), MARKET_ITEMS), FLAGS)
        },
        Foods: {
            img: food,
            items: FOODS()
        },
        Eggs: {
            img: food,
            items: {
                "Pink Egg": ITEM_DETAILS["Pink Egg"],
                "Purple Egg": ITEM_DETAILS["Purple Egg"],
                "Red Egg": ITEM_DETAILS["Red Egg"],
                "Blue Egg": ITEM_DETAILS["Blue Egg"],
                "Orange Egg": ITEM_DETAILS["Orange Egg"],
                "Green Egg": ITEM_DETAILS["Green Egg"],
                "Yellow Egg": ITEM_DETAILS["Yellow Egg"]
            }
        }
    },
    makeInventoryItems = e => Object.keys(e).filter(t => {
        var a;
        return !!e[t] && !((a = e[t]) == null ? void 0 : a.equals(0))
    }),
    InventoryItems = ({
        onClose: e
    }) => {
        const {
            gameService: A,
            shortcutItem: t
        } = react.exports.useContext(Context), [a] = useActor(A), n = a.context.state.inventory, [s, r] = react.exports.useState("basket"), [i] = react.exports.useState(makeInventoryItems(n)), [m, d] = react.exports.useState(), E = w => {
            r(w)
        }, u = w => {
            t(w), d(w)
        };
        return React.createElement(Panel, {
            className: "pt-5 relative"
        }, React.createElement("div", {
            className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement(Tab, {
            className: "flex items-center",
            isActive: s === "basket",
            onClick: () => E("basket")
        }, React.createElement("img", {
            src: seeds$1,
            className: "h-4 sm:h-5 mr-2"
        }), React.createElement("span", {
            className: "text-xs sm:text-sm overflow-hidden text-ellipsis"
        }, "Basket")), React.createElement(Tab, {
            className: "flex items-center",
            isActive: s === "collectibles",
            onClick: () => E("collectibles")
        }, React.createElement("img", {
            src: sunflowerPlant$1,
            className: "h-4 sm:h-5 mr-2"
        }), React.createElement("span", {
            className: "text-xs sm:text-sm overflow-hidden text-ellipsis"
        }, "Collectibles"))), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1",
            onClick: e
        })), s === "basket" && React.createElement(InventoryTabContent, {
            tabItems: BASKET_CATEGORIES,
            selectedItem: m,
            setDefaultSelectedItem: d,
            inventory: n,
            inventoryItems: i,
            onClick: u
        }), s === "collectibles" && React.createElement(InventoryTabContent, {
            tabItems: COLLECTIBLE_CATEGORIES,
            selectedItem: m,
            setDefaultSelectedItem: d,
            inventory: n,
            inventoryItems: i,
            onClick: u
        }))
    },
    Inventory = () => {
        const [e, A] = react.exports.useState(!1), {
            shortcutItem: t,
            gameService: a
        } = react.exports.useContext(Context), [n] = useActor(a), s = n.context.state.inventory, r = getShortcuts(), i = () => {
            A(!0)
        };
        return React.createElement("div", {
            className: "flex flex-col items-end mr-2 sm:block fixed top-16 right-0 z-50"
        }, React.createElement("div", {
            className: "w-16 h-16 sm:mx-8 mt-2 relative flex justify-center items-center shadow rounded-full cursor-pointer",
            onClick: i
        }, React.createElement("img", {
            src: button,
            className: "absolute w-full h-full -z-10",
            alt: "inventoryButton"
        }), React.createElement("img", {
            src: basket,
            className: "w-8 mb-1",
            alt: "inventory"
        }), React.createElement(Label, {
            className: "hidden sm:block absolute -bottom-7"
        }, "Items")), React.createElement(Modal, {
            centered: !0,
            scrollable: !0,
            show: e,
            onHide: () => A(!1)
        }, React.createElement(InventoryItems, {
            onClose: () => A(!1)
        })), !n.matches("readonly") && React.createElement("div", {
            className: "flex flex-col items-center sm:mt-8"
        }, r.map((m, d) => {
            var E, u;
            return React.createElement(Box, {
                key: d,
                isSelected: d === 0,
                image: (E = ITEM_DETAILS[m]) == null ? void 0 : E.image,
                secondaryImage: (u = ITEM_DETAILS[m]) == null ? void 0 : u.secondaryImage,
                count: s[m],
                onClick: () => t(m)
            })
        })))
    },
    Button = ({
        children: e,
        onClick: A,
        disabled: t,
        className: a,
        type: n
    }) => React.createElement("button", {
        className: classNames("bg-brown-200 w-full p-1 shadow-sm text-white text-shadow object-contain justify-center items-center hover:bg-brown-300 cursor-pointer flex disabled:opacity-50 ", a),
        type: n,
        disabled: t,
        onClick: A,
        style: {
            borderStyle: "solid",
            borderWidth: "5px",
            borderImage: `url(${border$1}) 30 stretch`,
            borderImageSlice: "25%",
            imageRendering: "pixelated",
            borderImageRepeat: "repeat",
            borderRadius: "15px"
        }
    }, e);
var farm = "./assets/nft.7f8d8538.png";
const CopySvg = () => React.createElement("svg", {
        className: "fill-white hover:fill-brown-300",
        "aria-hidden": "true",
        height: "16",
        viewBox: "0 0 16 16",
        version: "1.1",
        width: "16",
        "data-view-component": "true"
    }, React.createElement("path", {
        fillRule: "evenodd",
        d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
    }), React.createElement("path", {
        fillRule: "evenodd",
        d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
    })),
    CopyField = ({
        text: e = "",
        copyFieldMessage: A
    }) => {
        const [t, a] = react.exports.useState(A), [n, s] = react.exports.useState(!1), r = () => {
            navigator.clipboard.writeText(e), a("Copied!"), setTimeout(() => {
                a(A)
            }, 2e3)
        }, i = () => {
            s(!0)
        }, m = () => {
            s(!1)
        };
        return React.createElement("div", {
            className: "mb-4"
        }, React.createElement("div", {
            className: "mt-2 bg-brown-200 p-1"
        }, React.createElement("div", {
            className: "flex justify-content-between p-2 gap-x-2 align-items-center"
        }, React.createElement("span", {
            className: "text-[0.55rem] sm:text-xs m-auto break-all select-text"
        }, e), React.createElement("span", {
            className: "cursor-pointer scale-[1.5]",
            onMouseEnter: i,
            onMouseLeave: m,
            onClick: r
        }, React.createElement(CopySvg, null)))), React.createElement("div", {
            className: `absolute mr-5 transition duration-400 pointer-events-none ${n?"opacity-100":"opacity-0"}`
        }, React.createElement(Label, null, t)))
    },
    Share = ({
        farmURL: e,
        isOpen: A,
        onClose: t
    }) => {
        const a = () => {
            window.open(encodeURI(`https://twitter.com/intent/tweet?text=Visit My Sunflower Land Farm \u{1F447}
${e}&ref_src=https://sunflower-land.com`), "_blank")
        };
        return React.createElement(Modal, {
            show: A,
            onHide: t,
            centered: !0
        }, React.createElement(Panel, null, React.createElement(Modal.Header, {
            className: "justify-content-space-between"
        }, React.createElement("h1", {
            className: "ml-2"
        }, "Share Your Farm Link"), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1 justify-content-end",
            onClick: t
        })), React.createElement(Modal.Body, null, React.createElement("div", {
            className: "row justify-content-center align-items-center"
        }, React.createElement("div", {
            className: "flex d-none d-sm-block col-sm col justify-content-center align-items-center"
        }, React.createElement("p", {
            className: "text-sm whitespace-normal"
        }, "Show off to fellow farmers by sharing your farm link (URL), to directly visit your farm !")), React.createElement("div", {
            className: "flex col-sm-12 col justify-content-center md-px-4 lg-px-4 align-items-center"
        }, React.createElement("img", {
            src: farm,
            className: "w-64 md-mt-2",
            alt: "Sunflower-Land Farm NFT Image"
        }))), React.createElement(CopyField, {
            text: e,
            copyFieldMessage: "Copy farm URL"
        })), React.createElement(Modal.Footer, {
            className: "justify-content-center"
        }, React.createElement(Button, {
            className: "text-s w-1/4 px-1",
            onClick: a
        }, "Tweet"), React.createElement(Button, {
            className: "text-s w-1/4 px-1",
            onClick: () => window.open(e, "_blank")
        }, "Visit"))))
    };
var sunflowerPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACpQTFRFAAAA/+s2Y8dN93Yi+6ogJlxCPolI/94fcz45uG9Q//lO5KZyvkovwoVpgyPvXAAAAAF0Uk5TAEDm2GYAAACZSURBVAjXY2DABnjOQOlTqyCs41arzA+ABMpLRMprQAxzjw53GyDj1JKOjpZVQLlTCzs6GsEMmAhcDVwX3BywyWogRlrOGbVUIM2mpJqaBmJcTVNNDY1lYOCdmpaWuvvmBYabd0NDU2fvnctw8/bOq7kQxu65d3cDGbxzdwMBUA1ICCQA1Db37l2QAFBo5sy5YMfz3r0LFAAAbXtNAJ9cW54AAAAASUVORK5CYII=",
    sunflowerSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAY8dNJlxCuG9QPolI5KZywoVpA7w+NAAAAAF0Uk5TAEDm2GYAAABlSURBVAjXvY3BCcAwCEWllNwLThBCF0jxnAYnKJhzSYj7j1DNEP0Hef+hCPB39uKTC9zo7cALq8HGmNihM6d4AgSKscp4Yag8VZRgTOl1tgVNxSCQWGzHlQs/U3VhKmdaH4OqiQ/UABZhfV3FpQAAAABJRU5ErkJggg==",
    cursor = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOBAMAAAALT/umAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAi5u0wMvcWmmIJitE////ygfcYgAAAAF0Uk5TAEDm2GYAAABHSURBVAjXY3BxYAABVxUw7RoKpl1DwTSQClWBUEEOICrQBUyFGgOpwNDQYAcGJ2FTkJyzsXGoMIgCMhwYWFxYjE3AxgLVAwBLnRFjg/34AwAAAABJRU5ErkJggg==",
    market = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAArCAMAAAAwqkq2AAAABGdBTUEAALGPC/xhBQAAAFRQTFRFAAAAlJWkMSg5i5m0GDw5i31zgzBBYig5OYlKxcreWjApi1BaSqFqvW1S////OURiWmmLIChB/5mc7tasvUgppCQxxYVq5qVzczw5OSQx5jhB9nV7f3H6HgAAAAF0Uk5TAEDm2GYAAAGPSURBVDjLrZXrcoMgEIVtk7YaUwgKLeD7v2fZi8hiDJlJz48zDvkm7GFx7bpCmtQ9kk9iWg0gpR9w/jspgLTif1c6hDMulQ6c77xS6u09JumB8UHHGGCl9JA45Ts7z/PH1zJNkx4MadDTTotL3GwZ/xzHUZ8G0kkvO8Udbm6rDBKh8DYe3eYv4TPiTjOt3eNiZgf46FYtx1Hh3JWLS0PR0bn7nyS3TA0tDjjGwxMqcagYTfoFxM8lDrfCxdovcAv9hS5Oje91iNfnzI44P78SVWQr7/qaXNYusuHu1Nuc/F7UEqdG59gyqsiGfWRfk4f/6apMuPlBV2XC7IzjfS+7KhNuUYvXo+yqTLg543jt20nxNbJUu7e+IeuLqN42JfHfhla8o73aOA92KMTbNIxpnsIAN5XSkkUs42kjxmEwgEw2GAIbnrbCYgiHnR3MHZw9+OCwGMAO8Nx7srs4HfBzOIShM0q5ahyjChzCEA5RKxyj1sVsckCdI5uIer2Dm17IZPya+J36Xn6A+379pfsD/6+gZs6MYU4AAAAASUVORK5CYII=",
    arrowLeft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMBAMAAABGh1qtAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAwMvcWmmIGBQl////ppnnKQAAAAF0Uk5TAEDm2GYAAAA7SURBVAjXY2BgMGYAAWYRAxBl6GJsDOK4uDgaADlAAKeMIIJGii5KSgYMzEqCIIrBSAmkAcgFawcbBgCa/Al+N99mrAAAAABJRU5ErkJggg==";

function useIsNewFarm() {
    const {
        authService: e
    } = react.exports.useContext(Context$1), [{
        history: A
    }] = useActor(e);
    return (A == null ? void 0 : A.event.type) === "CREATE_FARM"
}
const HowToModalHeader = ({
        onClose: e,
        onBack: A,
        title: t
    }) => {
        const a = !useIsNewFarm();
        return React.createElement(Modal.Header, {
            className: "justify-start"
        }, React.createElement("div", {
            className: "flex w-full"
        }, A && React.createElement("img", {
            className: "h-6 mr-3 cursor-pointer",
            src: arrowLeft,
            alt: "back",
            onClick: A
        }), React.createElement("span", {
            className: "text-base ml-2 grow"
        }, t), a && React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer",
            onClick: e
        })))
    },
    HowToFarm = ({
        onClose: e
    }) => React.createElement(React.Fragment, null, React.createElement(HowToModalHeader, {
        title: "How to Farm?",
        onClose: e
    }), React.createElement(Modal.Body, null, React.createElement("div", {
        className: "flex items-center"
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "1.Harvest crops when they are ready"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: sunflowerPlant,
        className: "w-12"
    }), React.createElement("img", {
        src: cursor,
        className: "w-4 absolute right-0 bottom-0"
    }))), React.createElement("div", {
        className: "flex  items-center mt-2 "
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "2.Visit the town & click on the shop"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: market,
        className: "w-14"
    }), React.createElement("img", {
        src: cursor,
        className: "w-4 absolute right-0 -bottom-2"
    }))), React.createElement("div", {
        className: "flex items-center"
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "3.Sell crops at the shop for SFL"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: token,
        className: "w-12"
    }))), React.createElement("div", {
        className: "flex justify-between items-center mt-2"
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "4.Buy seeds using your SFL"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: seed,
        className: "w-8"
    }))), React.createElement("div", {
        className: "flex justify-between items-center"
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "5. Plant seeds and wait"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: sunflowerSeedling,
        className: "w-12"
    }), React.createElement("img", {
        src: cursor,
        className: "w-4 absolute right-0 bottom-0"
    })))));
var goblin$1 = "data:image/gif;base64,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",
    bakery = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAArCAMAAAAwqkq2AAAABGdBTUEAALGPC/xhBQAAAFpQTFRFAAAAlJWki5m0GDw5i31zEGGLGDxi9nV7WjApOYlKKYmcxcreSqFqvW1SOURi////WmmLpCQx5jhBpPr/7tasGG3VvUgpIChB5qVzxYVqczw5AJneEEyLKer2kEoJ7wAAAAF0Uk5TAEDm2GYAAAGOSURBVDjLpZWLcoIwEEVTbauADUUg2+bx/7/ZfQRIiJjOeGZcGTxO9mYlKrWhF9QTLCJ23wm9PvbsFwIe0Z0GAt+9P9OdtAJ5Vtm+79/AIYnunKc7aQX0eqvMNE3vn2EcR92B0OmxIHj0JhP1j7Zt9Sn2ftKhwBU6fC8AGz6pdd3NW31Jn0TX0daVZiZPeusXwnFU2vfeu1DBedl3+4v4MFYInryog68CqT4jceIzXxc100mULZv5S2UtdInrDsh03mHO5Is9lwqvRI2prkS8zpPnvUueKz1h9uoeJC+j5voueR41pmI9XufJ4dWpzs9mW07VPZtt1Pn3Dsn4DmYLyeMByQwPZrvo/LOvR+XHyEjv1tgKxiZRramS6z8VFl3JWnU9HuzUiDV4GMt5Sgc47MBbhrVVx4WijmsOBKxlwFubjktxM6LTysNwv1zoxWUYuBnSDvQ7kpSHumzw/3QKI3uEufY6R810CiM6Rd3pHHXfzMZA1vkeSxb19kCHJgNW/YZ+QdPkf8BNs3yi/gCNHqnyd9SY6gAAAABJRU5ErkJggg==",
    carrotPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAAJlxC/udhPolITadvY8dN5KZyvkov93Yi/q40uG9QwoVp4IqbiQAAAAF0Uk5TAEDm2GYAAACCSURBVAjXY2CgPmBxYHEAM1yDTUPADOfQUBMwg9E0WADM4BQ2nABmTCoU1wTRHJrTKyc1ABnbOydpzqhmYOBe3jFJs6NqA8Ou3RWdM9p3r2bYtQ3EyAYxtnfOqAYyuFdn7969bdcGBqBQWhpQAKht9e7dIAGg0KpVq8FWcO/eDRQAAJb4LY/vkRWWAAAAAElFTkSuQmCC";
const HowToUpgrade = ({
        onClose: e,
        onBack: A
    }) => React.createElement(React.Fragment, null, React.createElement(HowToModalHeader, {
        title: "How to upgrade?",
        onClose: e,
        onBack: A
    }), React.createElement(Modal.Body, null, React.createElement("div", {
        className: "flex items-center"
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "1. Talk to a Goblin blocking the fields"), React.createElement("div", {
        className: "relative w-12 h-12"
    }, React.createElement("img", {
        src: goblin$1,
        style: {
            width: "180px",
            maxWidth: "180px",
            position: "absolute",
            top: "-35px",
            right: "-69px"
        }
    }), React.createElement("img", {
        src: cursor,
        className: "w-4 absolute right-0 bottom-0"
    }))), React.createElement("div", {
        className: "flex  items-center mt-2 "
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "2.Visit the town & click on the kitchen"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: bakery,
        className: "w-14"
    }), React.createElement("img", {
        src: cursor,
        className: "w-4 absolute right-0 -bottom-2"
    }))), React.createElement("div", {
        className: "flex  items-center mt-2 "
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "3. Craft the food that the goblin wants"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: pumpkinSoup,
        className: "w-14 relative left-1"
    }))), React.createElement("div", {
        className: "flex  items-center mt-2 "
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "4. Voila! Enjoy your new fields and crops"), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: carrotPlant,
        className: "w-14 relative"
    }))))),
    HowToSync = ({
        onClose: e,
        onBack: A
    }) => React.createElement(React.Fragment, null, React.createElement(HowToModalHeader, {
        title: "How to sync?",
        onClose: e,
        onBack: A
    }), React.createElement(Modal.Body, null, React.createElement("p", {
        className: "text-xs p-2 sm:text-sm text-center"
    }, "All of your progress is saved on our game server. You will need to sync on chain when you want to move your tokens, NFTs and resources onto Polygon."), React.createElement("div", {
        className: "flex items-center"
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, "1. Open the menu")), React.createElement("div", {
        className: "flex  items-center mt-2 "
    }, React.createElement("p", {
        className: "text-xs sm:text-sm p-2"
    }, '2. Click "Sync on chain"'), React.createElement("div", {
        className: "relative"
    }, React.createElement("img", {
        src: timer,
        className: "w-4"
    }))))),
    LetsGo = ({
        onClose: e,
        onBack: A
    }) => React.createElement(React.Fragment, null, React.createElement(HowToModalHeader, {
        title: "Time to play!",
        onClose: e,
        onBack: A
    }), React.createElement(Modal.Body, null, React.createElement("p", {
        className: "text-xs p-2 sm:text-sm text-center"
    }, "Thanks for playing beta! We are still working on the game and appreciate your support during the early stages!"), React.createElement("p", {
        className: "text-xs p-2 sm:text-sm text-center"
    }, "You can read more about the game in the", " ", React.createElement("a", {
        className: "text-xs sm:text-sm underline",
        href: "https://docs.sunflower-land.com",
        target: "_blank",
        rel: "noreferrer"
    }, "official docs."))));
var Steps;
(function(e) {
    e[e.HowToFarm = 1] = "HowToFarm", e[e.HowToUpgrade = 2] = "HowToUpgrade", e[e.HowToSync = 3] = "HowToSync", e[e.LetsGo = 4] = "LetsGo"
})(Steps || (Steps = {}));
const HowToPlay = ({
    isOpen: e,
    onClose: A
}) => {
    const [t, a] = React.useState(1);
    react.exports.useEffect(() => {
        e && a(1)
    }, [e]);
    const n = () => {
            a(t - 1)
        },
        s = () => {
            a(t + 1)
        },
        r = () => {
            A()
        },
        i = !useIsNewFarm();
    return React.createElement(Modal, {
        show: e,
        onHide: i ? A : void 0,
        centered: !0
    }, React.createElement(Panel, null, t === 1 && React.createElement(HowToFarm, {
        onClose: A
    }), t === 2 && React.createElement(HowToUpgrade, {
        onClose: A,
        onBack: n
    }), t === 3 && React.createElement(HowToSync, {
        onClose: A,
        onBack: n
    }), t === 4 && React.createElement(LetsGo, {
        onClose: A,
        onBack: n
    }), React.createElement(Modal.Footer, {
        className: "justify-content-center"
    }, t === 4 ? React.createElement(Button, {
        className: "text-s px-1",
        onClick: r
    }, "Let's go!") : React.createElement(Button, {
        className: "text-s px-1",
        onClick: s
    }, "Next"))))
};
var alert = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJCAYAAAAVb42gAAAANElEQVQImWNU03b5z4AEmEDEjeYPDDev7AYLgwVA4P+LJFQBhuOX0QSgALehIEyEFgYGBgAYUBH4km+gIQAAAABJRU5ErkJggg==";
const Settings = ({
    isOpen: e,
    onClose: A
}) => {
    const {
        authService: t
    } = react.exports.useContext(Context$1), {
        gameService: a
    } = react.exports.useContext(Context), [n, s] = react.exports.useState(!1), r = () => {
        A(), t.send("LOGOUT")
    }, i = () => {
        s(!0)
    }, m = () => {
        A(), a.send("RESET")
    }, d = () => n ? React.createElement("div", {
        className: "p-4 "
    }, React.createElement("div", {
        className: "flex items-center border-2 rounded-md border-black p-2 mt-2 mb-2 bg-[#e43b44]"
    }, React.createElement("img", {
        src: alert,
        alt: "alert",
        className: "mr-2 w-5 h-5/6"
    }), React.createElement("span", {
        className: "text-xs"
    }, "YOUR FARM WILL BE RESET TO THE LAST TIME YOU SYNCED ON CHAIN. YOU WILL LOSE ANY NON SYNCED PROGRESS.")), React.createElement("div", {
        className: "row justify-between "
    }, React.createElement(Button, {
        className: "col m-1",
        onClick: () => s(!1)
    }, "No"), React.createElement(Button, {
        className: "col m-1",
        onClick: m
    }, "Yes"))) : React.createElement("div", {
        className: "flex flex-col"
    }, React.createElement(Button, {
        className: "col p-1",
        onClick: r
    }, "Logout"), React.createElement(Button, {
        className: "col  p-1 mt-2",
        onClick: i
    }, "Reset Session"));
    return React.createElement(Modal, {
        show: e,
        onHide: A,
        centered: !0
    }, React.createElement(Panel, {
        className: "p-0"
    }, d()))
};
var mobileMenu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABICAMAAABWSoJpAAAABGdBTUEAALGPC/xhBQAAAEVQTFRFBAMDBAMDBAMDBAMDBAMDBAMDBAMDBAMDBAMDBAMDBAMDBAMDAAAA3NvbDAsLExIS397e3t3dFBMT29ragoGBBAMD////pcoZXQAAAA10Uk5T2+vurLAwNN3e2s9PAPFaF7cAAACmSURBVFjD7ZZLFsIgEATRfIygRo2d+x9VVtE9FUXTvWNTj+ExNRNOcMI6wBRVmqHtX8AkIvt+AUYEqHYB5sNcmmuuum7gTToY+O/Adf8h3nq4HHB9/YCxDTTwO4P+2HT0oN91tG0a1IdTrnpjwLMUXPKmvg3eergccH15phho4Kc2B8VEbw5K7/p6FOeiiAp2vkuVA8fqb+g3ZIF4p+C9jNvGI6AoTyLQhxn4Y1rXAAAAAElFTkSuQmCC",
    radish = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPBAMAAAAizzN6AAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAA9nV6cz45GTw+Y8dNPicxJlxCPolI5DtEoiYzZKA5OwAAAAF0Uk5TAEDm2GYAAABiSURBVAjXY2BLSwAihnQXtxSXMob0EvcSdyBV7uJSXsbAZl5eXpzAwMBsXmzAwMAwo72ik4GBs6OjQ2ICmGqcwMA6s6NjZgCQAoIABobImTOnAlWyRk4FcoA0mGRgUmBgAAAo8RtuZzoP8wAAAABJRU5ErkJggg==",
    town = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAMAAAAUyMtVAAAABGdBTUEAALGPC/xhBQAAAFFQTFRFAAAAMSg5lJWki5m0GDw5i31zgzBBYig5xcreWjApi1BavW1S////OURiWmmLIChB7tas/5mcvUgppCQxxYVq5qVzAAAAczw5OSQx5jhB9nV77TL5RwAAAAF0Uk5TAEDm2GYAAAGeSURBVEjHrZbZcoMwDEVp0wWoXcBqvfD/H1pL8g7EmUnvg4YQnZGvZSsZhkI6arinnKK1ZJ0SMU9r48WfpBhRQuozcd6gzZeXRUkRKghp7Ru9KiPmGQSEEK8vzkuOARilcxbflNH6PIGAWtf1/XPftk2OC2uU20E7+LxVJeBjnmd5G1k3uR/kToDlO2qhHFvERwAHOT4NrASADPkSektaAYEZovZ7prEPAtzekYPYB/PjBfvW0Q6YlwD7gGoAV06hjhMqPNcAnhZwbZzwhJqJD9QROOoO0O57iASE52dNVy7LuxD3oPVQuaQ1cL/THpybLgFuftqA1nTlknobYtwD+3+drr3meNnp2muKCaD7UHa69ppNVxeo7HTtNccE0MXoe6aLpqIHo0xHylSmjeqqBX47yoDmin0gjHtfAuspP8p5EuP4Xxr5V4rS8JcmAL5cAHCIoJYUcGCUgC9IS2IA6wPOKZpV9AC0JEy7BNKJ4HAB8IY/CqAt3i/vsAXIdAOgLQbQdAOQ6eOSsgDztAvh0nRW+xNdA2c6+xPAX/wBrpmkHTwXChcAAAAASUVORK5CYII=",
    water = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAYklEQVQYlWNU03ZhQAL/GRgYGGF8JmSJm1d2wxSgSP5n27uRQfflNwZkBcg6MQBI8v+tvOkoEjDdGDpBRmM46MrGZxgKYF5BMVptUiZYjlFCRBUswCcuD/fCp5cPGRkYGBgAVzgjn6D8dXEAAAAASUVORK5CYII=",
    MENU_LEVELS;
(function(e) {
    e.ROOT = "root", e.MAP = "map", e.VIEW = "view"
})(MENU_LEVELS || (MENU_LEVELS = {}));
const Menu = () => {
    const {
        authService: e
    } = react.exports.useContext(Context$1), {
        gameService: A
    } = react.exports.useContext(Context), [t] = useActor(e), [a] = useActor(A), [n, s] = react.exports.useState(!1), [r] = useScrollIntoView(), [i, m] = react.exports.useState(!1), [d, E] = react.exports.useState(!1), [u, w] = react.exports.useState(useIsNewFarm()), [B, g] = react.exports.useState(!1), [C, Q] = react.exports.useState(""), [h, f] = react.exports.useState(MENU_LEVELS.ROOT), S = react.exports.useRef(null), y = () => {
        s(!n)
    }, I = b => {
        r(b), s(!1)
    }, D = () => {
        w(!0), s(!1)
    }, F = () => {
        m(!0), s(!1)
    }, T = () => {
        E(!0), s(!1)
    }, N = b => {
        var G;
        ((G = S == null ? void 0 : S.current) == null ? void 0 : G.contains(b.target)) || s(!1)
    }, U = async () => {
        g(!0)
    }, v = async b => {
        await new Promise(G => setTimeout(G, 1e3)), A.send("SYNC", {
            captcha: b
        }), s(!1), g(!1)
    }, P = async () => {
        A.send("SAVE")
    }, L = () => {
        e.send("RETURN")
    }, J = () => {
        e.send("EXPLORE")
    };
    return react.exports.useEffect(() => (document.addEventListener("mousedown", N), document.addEventListener("touchstart", N), () => {
        document.removeEventListener("mousedown", N), document.removeEventListener("touchstart", N)
    }), []), react.exports.useEffect(() => {
        const b = t.context.farmId ? `${window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href}?farmId=${t.context.farmId.toString()}` : "https://sunflower-land.com/play/";
        Q(b)
    }, [t.context.farmId]), React.createElement("div", {
        ref: S,
        className: "w-5/12 sm:w-60 fixed top-2 left-2 z-50 shadow-lg"
    }, React.createElement(OuterPanel, null, React.createElement("div", {
        className: "flex justify-center p-1"
    }, React.createElement(Button, {
        className: "mr-2 bg-brown-200 active:bg-brown-200",
        onClick: y
    }, React.createElement("img", {
        className: "md:hidden w-6",
        src: mobileMenu,
        alt: "hamburger-menu"
    }), React.createElement("span", {
        className: "hidden md:flex"
    }, "Menu")), !a.matches("readonly") && React.createElement(Button, {
        onClick: P,
        disabled: !!a.matches("autosaving")
    }, a.matches("autosaving") ? React.createElement("img", {
        src: timer,
        className: "animate-pulsate",
        alt: "saving"
    }) : React.createElement("span", null, "Save")), a.matches("readonly") && React.createElement(Button, {
        onClick: L
    }, React.createElement("span", null, "Back"))), React.createElement("div", {
        className: `transition-all ease duration-200 ${n?"max-h-100":"max-h-0"}`
    }, React.createElement("ul", {
        className: `list-none pt-1 transition-all ease duration-200 origin-top ${n?"scale-y-1":"scale-y-0"}`
    }, h === MENU_LEVELS.ROOT && React.createElement(React.Fragment, null, !a.matches("readonly") && React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        onClick: U
    }, React.createElement("span", {
        className: "sm:text-sm"
    }, "Sync on chain"))), React.createElement("li", {
        className: "p-1 flex"
    }, React.createElement(Button, {
        onClick: D
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "How to play"), React.createElement("img", {
        src: questionMark,
        className: "w-3 ml-2",
        alt: "question-mark"
    }))), React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        className: "flex justify-between",
        onClick: () => f(MENU_LEVELS.MAP)
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "Map"))), React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        className: "flex justify-between",
        onClick: () => f(MENU_LEVELS.VIEW)
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "Community"))), React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        className: "flex justify-between",
        onClick: T
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "Settings")))), h !== MENU_LEVELS.ROOT && React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        onClick: () => f(MENU_LEVELS.ROOT)
    }, React.createElement("img", {
        src: arrowLeft,
        className: "w-4 mr-2",
        alt: "left"
    }))), h === MENU_LEVELS.MAP && React.createElement(React.Fragment, null, React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        className: "flex justify-between",
        onClick: () => I(Section.Town)
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "Town"), React.createElement("img", {
        src: town,
        className: "w-6 ml-2",
        alt: "town"
    }))), React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        className: "flex justify-between",
        onClick: () => I(Section.Crops)
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "Crops"), React.createElement("img", {
        src: radish,
        className: "w-4 ml-2",
        alt: "crop"
    }))), React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        className: "flex justify-between",
        onClick: () => I(Section.Water)
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "Water"), React.createElement("img", {
        src: water,
        className: "w-4 ml-2",
        alt: "water"
    }))), React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        className: "flex justify-between",
        onClick: () => I(Section.Forest)
    }, React.createElement("span", {
        className: "sm:text-sm flex-1"
    }, "Forest"), React.createElement("img", {
        src: wood,
        className: "w-4 ml-2",
        alt: "wood"
    })))), h === MENU_LEVELS.VIEW && React.createElement(React.Fragment, null, React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        onClick: F
    }, React.createElement("span", {
        className: "sm:text-sm"
    }, "Share"))), !a.matches("readonly") && React.createElement("li", {
        className: "p-1"
    }, React.createElement(Button, {
        onClick: J
    }, React.createElement("span", {
        className: "sm:text-sm"
    }, "Visit Farm"))))))), React.createElement(Share, {
        isOpen: i,
        onClose: () => m(!1),
        farmURL: C
    }), React.createElement(HowToPlay, {
        isOpen: u,
        onClose: () => w(!1)
    }), React.createElement(Settings, {
        isOpen: d,
        onClose: () => E(!1)
    }), B && React.createElement(Modal, {
        show: B,
        onHide: () => g(!1),
        centered: !0
    }, React.createElement(Panel, null, React.createElement("img", {
        src: close,
        className: "h-6 top-3 right-4 absolute cursor-pointer",
        alt: "Close Logout Confirmation Modal",
        onClick: () => g(!1)
    }), React.createElement(RecaptchaWrapper, {
        sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
        onChange: v,
        onExpired: () => g(!1),
        className: "w-full m-4 flex items-center justify-center"
    }))))
};
var play = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAEhQTFRF////////////////////////////////////////////////////////////////////////////////////////AAAA////Ptj3WQAAABd0Uk5Tb2B/gK+w3+CPkM9wUPAg77/AMNBAEADbfZ8SAAAAfElEQVQoz5XSWQ7DMAhFUbfNbGfwAHf/O40X8BKp/B4Q4tnBHyq8Qt6aBmCxB2BqEkqFwQS4x50zKfAjw3UIcP/0oaDAbexDRYB7muGrwG2FTcICVUCb4CeWD5DF8nSyR3Hg1dvFgbG3i0hKbx9Nxj7r2FnlQ9Xa/vwMqm69iC+czK0X2wAAAABJRU5ErkJggg==",
    pause = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5Tv8AA/46qvQAAACpJREFUCNdjWAUGDGjU/E/zPwGp/f/2/wNS+4CAthTUovnf5n/DcAsYAACsE2ahWMKuswAAAABJRU5ErkJggg==",
    skip_forward = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAC1QTFRF////////////////////////////////////////////////////AAAA////UHdatAAAAA50Uk5Tv3+vsO/P8NDAEIAwUADrCocPAAAAa0lEQVQY02O4iwQY8HFa9yJx3vmAWQ0QzjtZEOcdhLPu0VwE505eNIJzd/uTswjOTbuHCM7dW+80EZy7x54icY68QFZmiTBA7xXCgK3PEEbf8atGcs5jJOe8W4vk0BywFzrAnPK9RIUBAgAA53jxbIHBnc0AAAAASUVORK5CYII=",
    music_note = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAD9QTFRF////////////////////////////////////////////////////////////////////////////AAAA////xT7M6gAAABR0Uk5T0M/8P5Bvj3DwELCv779AIDBQwABmeil1AAAAe0lEQVQoz82SSw6AIAwF8c9HAdve/6yKIJSoiXFlV6Qz8NIUgQ8l3gLVDeMyNxzEFsViQMSOhH6yFSAKLZXOFShBvwPrPuNyA9Zq8mwhAmnvdALFCvccok+gWBm0ByhWkIx3hoCDloXb9NRpBQKSwCIPt9fVZuvTZ8i1AesLKSJYMW0aAAAAAElFTkSuQmCC",
    chevron_right = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAABVQTFRF////////////////////AAAA////l+3rYAAAAAZ0Uk5Tv8DP0BAAhUqX2wAAAElJREFUGNNjCEUCDORyjFyROGIqSBznJFcEJ8RMBckAqBSEA5WCGu2cgMRxSkRSpmaC4DglIwyASkA4UAkIx8wEyTnCrhT6FAYAiIhcxn7O5RgAAAAASUVORK5CYII=",
    volume_down = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAADZQTFRF////////////////////////////////////////////////////////////////AAAA////8Z9nkQAAABF0Uk5T37Cvf8+/7/Dg0FCAYMAwEABuJHOwAAAAdElEQVQoz7XRSw6AIAwFQBT5C+27/2UVVIwGEjZ0RZhCSxHcCTED0qaa4DXQggC0gFYgZCBJFWLOhfGcYYeqUPZd4gJksb9w55RFQmwDW90DM3DVGdtTXLzFr3b10278PnABZDkRaGwkeYimA5ycm/61vzgAEQwjDexJMT0AAAAASUVORK5CYII=",
    volume_up = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAADxQTFRF////////////////////////////////////////////////////////////////////////AAAA////0BQ0xAAAABN0Uk5T369Av3+wIODPUNDv8DBggMAQABME0lIAAACbSURBVCjPtZHLFoMwCETTqjXmDfP//1qCSdOqXcqKww0MTAz/CXMHiHbak+LpG2weaACWBshAB6+A3AE9gFwBzfI4QYYZ6awRNq4gYdJhSYDWXWQFtEpN5i4KmowmEYX5CXsCvHrpk/QMgux1Adoo18VtFzdDfF/X93XLZ109cAFm7ch6YKBLS/ywpJoYhomOfmx3roFAd33tId5VxCax2GN00AAAAABJRU5ErkJggg==",
    willow_tree = "./assets/willow_tree.e573742b.mp3",
    harvesting = "./assets/harvesting.024b0b75.mp3";
const song_list = [{
        artist: "Romy & Rick",
        name: "Harvesting",
        path: harvesting
    }, {
        artist: "Romy",
        name: "Willow Tree",
        path: willow_tree
    }],
    getSong = e => song_list[e],
    getSongCount = () => song_list.length,
    useStepper = e => {
        const [A, t] = react.exports.useState(Math.min(Math.max(e.initial, e.min), e.max));
        return {
            decrease: () => {
                t(Math.max(A - e.step, e.min))
            },
            increase: () => {
                t(Math.min(A + e.step, e.max))
            },
            value: A
        }
    },
    AudioPlayer = () => {
        const e = useStepper({
                initial: .1,
                step: .1,
                max: 1,
                min: 0
            }),
            [A, t] = react.exports.useState(!1),
            [a, n] = react.exports.useState(!1),
            [s, r] = react.exports.useState(!0),
            [i, m] = react.exports.useState(0),
            d = react.exports.useRef(null),
            E = () => {
                d.current.paused ? d.current.play() : d.current.pause(), r(!s)
            },
            u = () => {
                getSongCount() === i + 1 ? m(0) : m(i + 1)
            },
            w = getSong(i);
        return react.exports.useEffect(() => {
            howler.Howler.mute(a)
        }, [a]), react.exports.useEffect(() => {
            d.current.volume = e.value
        }, [e.value]), react.exports.useEffect(() => {
            navigator.userAgent.match(/chrome|chromium|crios/i) && (r(!1), d.current.pause())
        }, []), React.createElement("div", {
            className: `position-fixed ${A?"-right-6 sm:right-10":"right-2"} sm:right-2 bottom-4 z-50 md:w-56 w-48 h-fit  sm:-translate-x-50 transition-all duration-500 ease-in-out`,
            style: {
                transform: `translateX(${A?0:"calc(100% + 8px)"})`
            }
        }, React.createElement(Panel, {
            className: "pointer-events-auto w-40 sm:w-56"
        }, React.createElement("audio", {
            ref: d,
            onEnded: u,
            onPause: () => r(!d.current.paused),
            onPlay: () => r(!d.current.paused),
            src: w.path,
            className: "d-none",
            autoPlay: !0,
            controls: !0
        }), React.createElement("div", {
            className: "p-1 sm:mr-2 relative"
        }, React.createElement("div", {
            className: "mb-1.5 overflow-hidden bg-brown-200 "
        }, React.createElement("p", {
            className: "whitespace-no-wrap w-fit text-white font-italic text-sm",
            style: {
                animation: "marquee-like-effect 10s infinite linear",
                whiteSpace: "nowrap",
                animationPlayState: s ? "running" : "paused"
            }
        }, w.name, " - ", w.artist)), React.createElement("div", {
            className: "flex space-x-2 justify-content-between "
        }, React.createElement(Button, {
            onClick: E,
            className: "w-10 h-8"
        }, React.createElement("img", {
            src: s ? pause : play,
            alt: "play / pause button "
        })), React.createElement(Button, {
            onClick: u,
            className: "w-10 h-8"
        }, React.createElement("img", {
            src: skip_forward,
            alt: "next song button"
        })), React.createElement(Button, {
            onClick: e.decrease,
            className: "w-10 h-8 hidden sm:flex"
        }, React.createElement("img", {
            src: volume_down,
            alt: "next song button"
        })), React.createElement(Button, {
            onClick: e.increase,
            className: "w-10 h-8 hidden sm:flex"
        }, React.createElement("img", {
            src: volume_up,
            alt: "next song button"
        })), React.createElement("div", {
            className: "absolute -right-2 bottom-0 bg-brown-400 h-full w-1.5 rotate-180 rounded-sm hidden sm:block"
        }, React.createElement("div", {
            className: "bg-white h-1.5 transition-all duration-200 rounded-sm",
            style: {
                height: `${e.value*100}%`
            }
        }))))), React.createElement("div", {
            className: `position-absolute ${A?"translate-x-1.5":""} -left-20 sm:-left-24 bottom-0 transition-all -z-10 duration-500 ease-in-out w-fit z-50 flex gap-2 align-items-center overflow-hidden`
        }, React.createElement(Button, {
            onClick: () => n(!a)
        }, React.createElement("img", {
            src: a ? volume_down : volume_up,
            alt: "mute/unmute ingame audio",
            className: "w-4 h-4 sm:w-6 sm:h-5"
        })), React.createElement(Button, {
            onClick: () => t(!A)
        }, React.createElement("img", {
            src: A ? chevron_right : music_note,
            alt: "show/hide music player",
            className: "w-4 h-4 sm:w-6 sm:h-5"
        }))))
    },
    VisitBanner = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e);
        return A.context.state.id ? React.createElement("div", {
            className: "fixed bottom-2 left-2 z-50 shadow-lg"
        }, React.createElement(OuterPanel, null, React.createElement("div", {
            className: "flex justify-center p-1"
        }, React.createElement("span", {
            className: "text-sm"
        }, `Farm #${A.context.state.id}`)))) : null
    },
    Hud = () => React.createElement("div", {
        "data-html2canvas-ignore": "true",
        "aria-label": "Hud"
    }, React.createElement(Menu, null), React.createElement(Balance, null), React.createElement(Inventory, null), React.createElement(AudioPlayer, null), React.createElement(VisitBanner, null));
var soil = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAcz45Picx5KZyuG9QwoVpdG2/2AAAAAF0Uk5TAEDm2GYAAABaSURBVAjXxYzLDYBACEQ5uAUQrYDYgMG9+4G7idB/Kw7bhFzm5TFA9PNMZscAV43KeJm7EzXfmOd4KPIUWdKxuUTWXrCL3IDmaqboQKnWFVRmCSgzH59bJsQHdwcRARYB8OMAAAAASUVORK5CYII=",
    progressStart = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+YHpb6UeCTnh2+CCYZiLDuXAAt3mOxSYI4zCJmnvmbCXLZkY1bRcQTXpoMzAwAgDMB0dV31T37gAAAABJRU5ErkJggg==",
    progressQuarter = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+KFZvK/2I0ynPDh8E00xkOBcO4DbPsdiEKnOYSM09c7aSZTOjmrYLiCY9tBkYGAG1D0dVZZ30wwAAAABJRU5ErkJggg==",
    progressHalf$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+WK3eVvoRQ+zZ4YNgmokM58IB3OY5FpuwqzhMQHPPnK1k2cyopu0CokkPbQYGRgCeF0dVLHBqqgAAAABJRU5ErkJggg==",
    progressAlmost$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAUklEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+eK3eVvoRzn52+CCYZiLDuXAAt3mOxSb8Kg/j0NwzZytZNjOqabuAaNJDm4GBEQCHH0dV01wIwwAAAABJRU5ErkJggg==",
    progressFull = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAASUlEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8y+lBN+RFs9x2ITmGYiw7lwALcZZhrJmnvmbCXLZkY1bRcQTXpoMzAwAgARO0OSW6pY7wAAAABJRU5ErkJggg==";
const Bar = ({
        percentage: e
    }) => e >= 100 ? React.createElement("img", {
        src: progressFull,
        className: "w-10"
    }) : e >= 75 ? React.createElement("img", {
        src: progressAlmost$1,
        className: "w-10"
    }) : e >= 50 ? React.createElement("img", {
        src: progressHalf$1,
        className: "w-10"
    }) : e >= 25 ? React.createElement("img", {
        src: progressQuarter,
        className: "w-10"
    }) : React.createElement("img", {
        src: progressStart,
        className: "w-10"
    }),
    ProgressBar = ({
        percentage: e,
        seconds: A
    }) => React.createElement("div", {
        className: "flex flex-col items-center justify-center"
    }, A > 0 && React.createElement("span", {
        className: "text-shadow text-xxs text-white -mb-0.5"
    }, secondsToString(A)), React.createElement(Bar, {
        percentage: e,
        seconds: A
    })),
    p2 = .99,
    p3 = .99,
    er = 0,
    eg = 0,
    eb = 0,
    RandomID = function() {
        return "_" + Math.random().toString(36).substr(2, 9)
    };
async function addNoise(e, A = .4) {
    await new Promise(i => setTimeout(i, 100));
    const t = document.createElement("canvas"),
        a = t == null ? void 0 : t.getContext("2d"),
        n = document.getElementById(e);
    t.width = n.naturalWidth, t.height = n.naturalHeight, a.drawImage(n, 0, 0);
    const s = a.getImageData(0, 0, n.naturalWidth, n.naturalHeight);
    for (let i = 0, m = s.data.length; i < m; i += 4) {
        const d = .93 + Math.random() * A,
            E = .93 + Math.random() * A,
            u = .93 + Math.random() * A;
        s.data[i] = s.data[i] * p2 * d + er, s.data[i + 1] = s.data[i + 1] * p2 * E + eg, s.data[i + 2] = s.data[i + 2] * p3 * u + eb
    }
    a.putImageData(s, 0, 0);
    const r = t.toDataURL();
    return n.src = r, r
}
var sunflowerAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAY8dNuG9Q5KZyPolIJlxCwoVp4XTiPAAAAAF0Uk5TAEDm2GYAAABxSURBVAjXrY0xDoAwCEUZtHuT9gIaOYBN3E3KrgPOpkbufwQp1RvIwsv7nwDw3/T8wu63JlZPDXL4IDcApj3UnYkt63wky+4ciQ8AN2k3lROKMNO4IJRrvukySChJwWHS0U5VVegZilShahjQXjkRFQ9HaBeIm/KSZgAAAABJRU5ErkJggg==",
    potatoSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAY8dNGTw+PolIJlxCuG9Q5KZywoVpXrFg3wAAAAF0Uk5TAEDm2GYAAABcSURBVAjXY2AYGMDiAmU4C7oGQBjGLq4gurREydAknIGBPTwtydiktIChtDwtycmtPJyhtCytyKksHcxIL08DMoBqgACoBiQEEgBpKy8HCQCFQkPDwSazl5cDBQBowBpcfApZMQAAAABJRU5ErkJggg==",
    potatoAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAAGTw+Y8dN13ZDy2A5cz45vkovPolIJlxCuG9Q5KZywoVpBXmmpgAAAAF0Uk5TAEDm2GYAAABwSURBVAjXY2CgIeDogDLalRqgjPIOCItDsKgCzOCcUQ5hzM4o7ATRO7daLY6ezcDAPXupiXPUzg0MO3cvTXGLWj2bYeeu1Wlpu8CMVbt3rwIyuGevAgKgGpAQSACkbfdukABQaObM2WCTuXfvBgoAAN2ULubVzhiQAAAAAElFTkSuQmCC",
    potatoPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAAGTw+y2A513ZDY8dNcz45PolIvkovuG9QJlxC5KZywoVpeJNmEQAAAAF0Uk5TAEDm2GYAAACISURBVAjXY2AgE8ycCaE5U1wmQBhpLjNngpkz06a4ZILFBFPcMqGSmVBViQIQfZXTITSr1eIAMCPYarEpiN4RbqRc2s3AwN0dXqReumMDw47d4eXlpbu7GXbs2lpeHr0axFi9e/cuIIO7exUQANUAhVatAgqAtO3eDRIACnV0dINN5t69GygAAD/6MtPKixvpAAAAAElFTkSuQmCC",
    pumpkinSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAApPWTTadvY8dN5KZyPolIJlxCuG9QwoVpfietZgAAAAF0Uk5TAEDm2GYAAABjSURBVAjXY2AYKBAKodhLDQPAjIow41QQ3d4mFKqYwcDAUeFmJKic3sDQ3uGWahycUcHQ3pIcphTUAWKkhoVmeFQA1aRldLS0NwB1tbi4AAVA2jo6QAJAofLyCrDJHB0dQAEAtWwcNP36pJIAAAAASUVORK5CYII=",
    pumpkinAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAMAAACJtiw1AAAABGdBTUEAALGPC/xhBQAAADxQTFRFAAAAKGhJbNBWgkQ+yU8yylAzRJlPY8dNKGdJg0Q/g0U//rA5yU8zPolIJlxCyk8z5KZy+HgkuG9QwoVpyRzHuwAAAAF0Uk5TAEDm2GYAAABwSURBVBjT1Y5JDsAgCADtrihQyv//WqDp+oPOwTgTJKb0e3L+hLl/lTZ0c+aHSyul1quMIiyVr6I2IGJaWcMRPYgdbVP3ZSFiewUTqBULhEjMwKBHMEcqBUBXD4mcNQi3LZu+PEpwupdA778fE3HdAZ3fCNWYWcXVAAAAAElFTkSuQmCC",
    pumpkinPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAAPolIY8dN5KZyJlxC/q40uG9Qcz4593YivkovwoVp4zKqtgAAAAF0Uk5TAEDm2GYAAAB+SURBVAjXY2CgHnCB0ixKDlCGkApUyBHKmO4oUgmiOTvLy0MnABkzOltDp0aCGDM6QiPhjE4GBq6KGR2tke0LGJZVVnZ0TJ+exbBs+fSZMyurgIxV5ZXTy1dlMXBlrQKCZQsYGJYtNja2ygJqBwmBBIBCaWlZYEu5Vq0CCgAAD7QsBIQYfEEAAAAASUVORK5CYII=",
    carrotSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAATadvPolI/udhJlxCY8dNvkov/q4093Yi5KZyuG9QwoVpG+twsgAAAAF0Uk5TAEDm2GYAAABgSURBVAjXY2AYYMC1atUCMGP1RMldIHrXTtWg2asZGLhXz3QNmblrA8Ou3dNT3Cp3rwbKzChL75wNYsxuttgJZADV7N4NUgMUmjkTpAsotHs3SAAotGrVarDJ3Lt3AwUAunAqcJovewYAAAAASUVORK5CYII=",
    carrotAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAAJlxCPolI/udhvkovTadv/q40Y8dN93Yi5KZyuG9QwoVpkutfTQAAAAF0Uk5TAEDm2GYAAABrSURBVAjXY2CgCwhShdCs5eUBEIZ6EYTBJV64AMxY5iiSBaJ3Nae4WaxmYOBe7ZFs1rJrA8Ou3TuaLbpnr2bYtXN2W8ZOMGPm7t0zgQzu1TOBAKgGJAQSAGnbvRskABRatWo12GTu3buBAgBSxCuTa5q8wQAAAABJRU5ErkJggg==",
    cabbageSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAAaDhstVCIJlxCY8dNPolI5KZyuG9QwoVp/uYE2wAAAAF0Uk5TAEDm2GYAAABhSURBVAjXY2AYYMBeXl4AZoSGpYaC6FYX1xCXCAYGjlIn1SCV8AaG9mYXRxEXiwqG9jZj02DjDBAjo9miDcjgqEjr6Ehrb2AACqWlAQWA2io6OkACQKHy8gqwyRwdHUABAKYhHDqmC26LAAAAAElFTkSuQmCC",
    cabbageAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAAY8dN9nV6aDhs6LeWPolIJlxCtVCI5KZyuG9QwoVpgAbbWgAAAAF0Uk5TAEDm2GYAAAB4SURBVAjXY2CgCyhxh9Ds7iUFIJq1RL3IPQDICDQqcVcWBTISzVWcisWAjNTgInXTMAYGrmmh5sWhmQsYVq5KDUsNWzWLYeWKZWlpWV0gRteqVSuADK5ZHUCwcgEDUKijAygA1DZr1SqQAFBo5sxZYEu5Vq0CCgAA3mEoDG0M/64AAAAASUVORK5CYII=",
    cabbagePlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAAY8dN5KZy6LeW9nV6uG9QJlxCPolIaDhswoVptVCICzj1JQAAAAF0Uk5TAEDm2GYAAACRSURBVAjXrc6hDsIwGATgczBeYOg59Kqwnaqf6Aus1DHTTYJa8ytC0iV1JFQ0/1Oy9Rk4dfnMHfD/nKT4lPJlvhYQzHKno2rb9AAOc5JCLXeM59R16lljJEoq5xqGMjNlBzOz97w4rBNlypNFMDfvB6cRVuOMsxqVXofBhhcQ3k1z0dtEpWPcYaO+1+VGFeMGP0vTMMEZM+dCAAAAAElFTkSuQmCC",
    beetrootSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAAaDhs9nV6GTw+Y8dNJlxCPolI5KZyuG9QwoVpWIKjHgAAAAF0Uk5TAEDm2GYAAABhSURBVAjXY2AYYMDR0dEAZnSWl88A0TOmpZdldjIwcHamuIa4zZjAMGNmkFuK6sxOhhnTS8USwytBjEpj4+lABmdn+cyZ5UA1QKHycqAASNvMmSABoFBHRyfYZM6ZM4ECABW5IhI1mVf1AAAAAElFTkSuQmCC",
    beetrootAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAAPicxGTw+Y8dNJlxC9nV6tVCIPolIaDhsuG9Q5KZywoVpkzzPIQAAAAF0Uk5TAEDm2GYAAAB1SURBVAjXY2CgIWBxYHEAM4pNnM3BjFLz4nAwQ729ogjMYNJoUgAzpmW0ZYLondtCQ7NnMzBwz16RGta1cwPDzt0LOzqkVs9m2LlrtUTjLjBj1e7dq4AM7tmrgACoBiQEEgBp270bJAAUmjlzNthk7t27gQIAkqYuS1hX8LkAAAAASUVORK5CYII=",
    beetrootPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAAGTw+PicxPolI5KZyY8dNJlxCaDhsuG9Q9nV6tVCIwoVptEPorwAAAAF0Uk5TAEDm2GYAAACOSURBVAjXY2CgFmBLSwAiICM1NAyIgIzkqcGmkWYghnloaDGIwSZcbG4IUsPAKF4oANa2cnnVLBDNNRMIFgAZu1bOnDlrNQMDd/uqmTNXVWxg2LGpatWq5drdDDu2qFctL/IGMTaVl2sDGdzd3rt3b9mxgQEo5OICFABq6969GyQAFOro6AZbwb17N1AAAEQsMwE4ZBgJAAAAAElFTkSuQmCC",
    cauliflowerSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAAJlxC6LeWY8dN////PolI5KZyuG9QwoVpExTxWwAAAAF0Uk5TAEDm2GYAAABfSURBVAjXY2AYYMBeGl4AZlSEuLaD6PZWFZeICgYGjopgJSfT9gaG9o7gJg3TjgqG9rZUicawDBAjI9i0DcjgqEhrjUgDqgEKpaUBBUDaOjpAAkCh8vIKsMkcHR1AAQAHmR191TrIrwAAAABJRU5ErkJggg==",
    cauliflowerAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAAY8dN////6LeWJlxC5KZyuG9QPolIwoVpUDVHjAAAAAF0Uk5TAEDm2GYAAABxSURBVAjXY2CgJWBxgDJcXCA0h5FSA5hRbKSkDqLZgQzzAhCj3Ni4HMRoLyw2F68AKk0vFC8UL2tgaOtwL3EvichgaGttKS/3ADMiOjpagQyOjFAgaAMa2dYaGgoUAGrL6OhoA9vRlpaWAbG0owMoAABo5yAVYu5XrgAAAABJRU5ErkJggg==",
    cauliflowerPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAAY8dNGTw+5KZyJlxCPolIuG9Q////6LeWwoVp+fCvJgAAAAF0Uk5TAEDm2GYAAAB3SURBVAjXY2CgJZg5E0JztpdPADNmlJdXggU6ysvBQiBGBYTRXt4BYkyJ6Oho9QQKuIp2dASGTGCY5ioY0SoYkskwbUqoi0uoJ5Ax0zXENWRmJgNn5iQlJc1pQG3TJhsbW2aCzMmcOXMa2LJpaWmZENtnzgQKAABPayYfeNXpSwAAAABJRU5ErkJggg==",
    parsnipSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAGTw+PolIY8dNJlxC5KZyuG9QwoVpZJk1rAAAAAF0Uk5TAEDm2GYAAABbSURBVAjXY2AYYMCWlpYAZqS4hriB6DJnE2eTdAYG9nRnJSWTsgKGsvIQJxXX8nSGstLQQNHQcDCjUBzEYE8PDS8NBaoBCYEEQNrKy0ECQKG0tHSwyezl5UABABp9GRspsmdOAAAAAElFTkSuQmCC",
    parsnipAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAA////6tSqvkovPolIY8dNJlxCuG9Q5KZywoVp11j/IgAAAAF0Uk5TAEDm2GYAAABgSURBVAjXY2AYGMCWwJYAZqSGpYZBGC4uYMb0aSlumZUMDJyV7cKGFdMnMEyf2awoZNFZyTB9RmeTxgwwo2PmzA4gg7OyAwiAakBCIAGQtpkzQQJAofLySrDJnDNnAgUAKakiaLLmE+cAAAAASUVORK5CYII=",
    parsnipPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAA////PolIvkovY8dN6tSqJlxC5KZyuG9QwoVp2r/4BAAAAAF0Uk5TAEDm2GYAAACFSURBVAjXY2CgGmBLYEsAM1LcUtzAAi5OKi4gITanJDUVsFyaklIaWA1HkloDmNFoliwBFhANNg0ECU0uDRQNt2Rg4GwuDxQtt5jAMGOmeWl48cxOhhnTQYxKEGNyabglkMHZWTlz5vQZExiAQuXlQAGgts6ZM0ECQKGOjk6wFZwzZwIFABSfJ3PhNH1tAAAAAElFTkSuQmCC",
    radishSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAPolIY8dNGTw+JlxCuG9Q5KZywoVpuM3HEQAAAAF0Uk5TAEDm2GYAAABbSURBVAjXY2AYYMAaGhoAZoS4pbiC6FInFSeVcAYG9nBHRSGR0gKG0vIUE2e38nCG0rK0ZLO0dDCj2BzEYA9PSy9LA6oBCYEEQNrKy0ECQKHQ0HCwyezl5UABAAtcGRvh2/hBAAAAAElFTkSuQmCC",
    radishAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAA9nV6GTw+PicxPolIY8dN5DtEoiYzJlxCuG9Q5KZywoVptdSPNAAAAAF0Uk5TAEDm2GYAAABuSURBVAjXY2CgB+Bo4GgAM1ojWiPAjJYQVw+IlEYTRGp2RftOEL1ze1pa9WwGBu7Zy9MSq3ZuYNi5e3F5udXq2Qw7d60uL98FZqzavXsVkME9exUQANWAhEACIG27d4MEgEIzZ84Gm8y9ezdQAAC7Ay8S40iZVAAAAABJRU5ErkJggg==",
    radishPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAACRQTFRFAAAA9nV6PicxGTw+5DtEY8dN5KZyPolIuG9QJlxCoiYzwoVpSfIspgAAAAF0Uk5TAEDm2GYAAACMSURBVAjXY2CgEHDOnABEQMb00MipoZUgRml4aTiYUR4aWg5icJqXlxeD1DAwW042gOiznAyhuVbOWgBmLHFx9ALRO5a4uEh1MzBwd2utWrVoxwaGHbtBjN3dDDu2bVq1SjsbxMhetWobkMHdnbZ7dxpQDVAoLQ0oANK2ezdIACjU0dENNpl7926gAABIODYPZWS29QAAAABJRU5ErkJggg==",
    wheatSeedling = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAJlxC5KZyY8dNPolIuG9QwoVpemy6ZgAAAAF0Uk5TAEDm2GYAAABcSURBVAjXxYyxDYAwDAS/IYNEKH2kDAAIUVNg1wmKvf8IPGEI/gq/TnoDP2cSOUc54mYLby8zAcJVdlJhvbxRWFszYfGWW3ZF0OTuVgG7Y0zKedBPUIno+BzcKR5NdRUIlmWOUwAAAABJRU5ErkJggg==",
    wheatAlmostDone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAA5KZyuG9QPolIY8dNJlxCwoVpFIxdeQAAAAF0Uk5TAEDm2GYAAABvSURBVAjXrY5BCoAwDAQXxN699AEKeYE/iPUs1N61hfz/CW7yBrOXYdiFAH/d3DyE+/BcQFUP4d49bkorLUyUCLNXfDV5pRJGzIC0hXnQR+GpoJvyTsI7dKgJkmTL1h9QLUsWzpNYCKp1lfgsmVF8fM4f+RygkKAAAAAASUVORK5CYII=",
    wheatPlant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA5KZy//lOuG9Q/94f+6og93YiwoVpm+1aXgAAAAF0Uk5TAEDm2GYAAABwSURBVAjXpY7BDYAgEATvo5RgBWgBxFwDSgUW4AN4kxBy7btLfPh398Fkspcg8jNzYQHpYG+RfLKAdLE0scQyzBgBZk54NXGSCeMM0F/j9hXxVVr3jH7A+G4qTrvvvlWBssUU507NKKBC0PFFZwbxAOOCJPOWyLHpAAAAAElFTkSuQmCC";
const LIFECYCLE = {
        Sunflower: {
            seedling: sunflowerSeedling,
            almost: sunflowerAlmostDone,
            ready: sunflowerPlant
        },
        Potato: {
            seedling: potatoSeedling,
            almost: potatoAlmostDone,
            ready: potatoPlant
        },
        Pumpkin: {
            seedling: pumpkinSeedling,
            almost: pumpkinAlmostDone,
            ready: pumpkinPlant
        },
        Carrot: {
            seedling: carrotSeedling,
            almost: carrotAlmostDone,
            ready: carrotPlant
        },
        Cabbage: {
            seedling: cabbageSeedling,
            almost: cabbageAlmostDone,
            ready: cabbagePlant
        },
        Beetroot: {
            seedling: beetrootSeedling,
            almost: beetrootAlmostDone,
            ready: beetrootPlant
        },
        Cauliflower: {
            seedling: cauliflowerSeedling,
            almost: cauliflowerAlmostDone,
            ready: cauliflowerPlant
        },
        Parsnip: {
            seedling: parsnipSeedling,
            almost: parsnipAlmostDone,
            ready: parsnipPlant
        },
        Radish: {
            seedling: radishSeedling,
            almost: radishAlmostDone,
            ready: radishPlant
        },
        Wheat: {
            seedling: wheatSeedling,
            almost: wheatAlmostDone,
            ready: wheatPlant
        }
    },
    Ready = ({
        image: e,
        className: A
    }) => {
        const t = react.exports.useRef(RandomID());
        return react.exports.useEffect(() => {
            Math.random() > .8 && addNoise(t.current, .15)
        }, []), React.createElement("img", {
            id: t.current,
            src: e,
            className: classNames("w-full", A)
        })
    },
    Soil = ({
        field: e,
        className: A,
        showCropDetails: t
    }) => {
        const [a, n] = React.useState(0), s = React.useCallback(() => {
            n(d => d + 1)
        }, []);
        if (React.useEffect(() => {
                if (e) {
                    s();
                    const d = window.setInterval(s, 1e3);
                    return () => window.clearInterval(d)
                }
            }, [e, s]), !e) return React.createElement("img", {
            src: soil,
            className: classNames("w-full", A)
        });
        const r = CROPS()[e.name],
            i = LIFECYCLE[e.name],
            m = getTimeLeft(e.plantedAt, r.harvestSeconds);
        if (m > 0) {
            const d = 100 - m / r.harvestSeconds * 100,
                E = d >= 50;
            return React.createElement("div", {
                className: "relative w-full h-full"
            }, React.createElement("img", {
                src: E ? i.almost : i.seedling,
                className: classNames("w-full", A)
            }), React.createElement("div", {
                className: "absolute w-full -bottom-4 z-10"
            }, React.createElement(ProgressBar, {
                percentage: d,
                seconds: m
            })), React.createElement(InnerPanel, {
                className: classNames("ml-10 transition-opacity absolute whitespace-nowrap sm:opacity-0 bottom-5 w-fit left-1 z-20 pointer-events-none", {
                    "opacity-100": t,
                    "opacity-0": !t
                })
            }, React.createElement("div", {
                className: "flex flex-col text-xxs text-white text-shadow ml-2 mr-2"
            }, React.createElement("div", {
                className: "flex flex-1 items-center justify-center"
            }, React.createElement("img", {
                src: i.ready,
                className: "w-4 mr-1"
            }), React.createElement("span", null, e.name)), React.createElement("span", {
                className: "flex-1"
            }, secondsToMidString(m)))))
        }
        return React.createElement(Ready, {
            className: A,
            image: i.ready
        })
    };
var harvestMp3 = "./assets/harvest.eb069903.mp3",
    plantMp3 = "./assets/plant.380f1bf4.mp3",
    kitchenMp3 = "./assets/kitchen.6266ab4b.mp3",
    blacksmithMp3 = "./assets/blacksmith.381b0a21.mp3",
    shopMp3 = "./assets/shop.8915cbb9.mp3",
    bankMp3 = "./assets/bank.c35b9e60.mp3",
    beggarMp3 = "./assets/beggar.92a655f9.mp3",
    wishingWellMp3 = "./assets/wishing_well.57b24eb5.mp3",
    frogMp3 = "./assets/frog.5411050c.mp3",
    miningMp3 = "./assets/mining.577ffa27.mp3",
    miningFallMp3 = "./assets/mining_fall.56e0fd85.mp3",
    chopMp3 = "./assets/chop.68e3a2e9.mp3",
    treeFallMp3 = "./assets/tree_fall.22026ce7.mp3",
    tailorMp3 = "./assets/tailor.e1d10de1.mp3",
    homeDoorMp3 = "./assets/home_door.39ce3c18.mp3",
    barnMp3 = "./assets/barn.9c7526b9.mp3",
    battleMp3 = "./assets/battle.0c5bf2fc.mp3",
    diaryMp3 = "./assets/diary.761b32b4.mp3",
    fountainMp3 = "./assets/fountain.17b8e799.mp3";
const harvestAudio = new howler.Howl({
        src: [harvestMp3],
        volume: .2
    }),
    plantAudio = new howler.Howl({
        src: [plantMp3],
        volume: .2
    }),
    bakeryAudio = new howler.Howl({
        src: [kitchenMp3],
        volume: .5
    }),
    blacksmithAudio = new howler.Howl({
        src: [blacksmithMp3],
        volume: .2
    }),
    marketAudio = new howler.Howl({
        src: [shopMp3],
        volume: .2
    }),
    bankAudio = new howler.Howl({
        src: [bankMp3],
        volume: .2
    }),
    beggarAudio = new howler.Howl({
        src: [beggarMp3],
        volume: .3
    }),
    wishingWellAudio = new howler.Howl({
        src: [wishingWellMp3],
        volume: .5
    }),
    frogAudio = new howler.Howl({
        src: [frogMp3],
        volume: .2
    }),
    miningAudio = new howler.Howl({
        src: [miningMp3],
        volume: .5
    }),
    miningFallAudio = new howler.Howl({
        src: [miningFallMp3],
        volume: .5
    }),
    chopAudio = new howler.Howl({
        src: [chopMp3],
        volume: .3
    }),
    treeFallAudio = new howler.Howl({
        src: [treeFallMp3],
        volume: .3
    }),
    tailorAudio = new howler.Howl({
        src: [tailorMp3],
        volume: .2
    }),
    homeDoorAudio = new howler.Howl({
        src: [homeDoorMp3],
        volume: .1
    }),
    barnAudio = new howler.Howl({
        src: [barnMp3],
        volume: .1
    }),
    diaryAudio = new howler.Howl({
        src: [diaryMp3],
        volume: .2
    }),
    battleAudio = new howler.Howl({
        src: [battleMp3],
        volume: .2
    }),
    fountainAudio = new howler.Howl({
        src: [fountainMp3],
        volume: .2
    });
var progressEmpty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAASUlEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8w+PoM8oq3+dGESmGYiw7lwALcZZhrJmnvmbCXLZkY1bRcQTXpoMzAwAgB5f0RgwdkD/QAAAABJRU5ErkJggg==",
    progressAlmost = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAVElEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8w+xll3wDTvtEkEnfDpAkQNExnOhQO4zf/TVCCMNMI2wwBYc8+crWTZzKim7QK2mGSdDAyMANOHRo3ACyXwAAAAAElFTkSuQmCC",
    progressHalf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAVUlEQVQYlWP8//8/g7qO638G0gEjg5q2y39yAEgfC8w+xll3sFrNO20ShtinCxAxJjKcCwdwm/+nqWBXkYZpMwyANffM2UqWzYxq2i5gi0nWycDACACwt0aNkffcOAAAAABJRU5ErkJggg==";
const HealthBar = ({
    percentage: e
}) => e >= 50 ? React.createElement("img", {
    src: progressHalf,
    className: "w-10"
}) : e >= 25 ? React.createElement("img", {
    src: progressAlmost,
    className: "w-10"
}) : React.createElement("img", {
    src: progressEmpty,
    className: "w-10"
});
var secure = "./assets/synced.b9cc64dc.gif",
    idle = "data:image/gif;base64,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";

function randomIntFromInterval(e, A) {
    return Math.floor(Math.random() * (A - e + 1) + e)
}
const CropReward = ({
        reward: e,
        onCollected: A,
        fieldIndex: t
    }) => {
        const {
            gameService: a
        } = react.exports.useContext(Context), [n, s] = react.exports.useState(!1), r = react.exports.useRef(randomIntFromInterval(30, 100)), i = react.exports.useRef(RandomID());
        if (react.exports.useEffect(() => {
                e && addNoise(i.current)
            }, [e]), !e) return null;
        const m = () => {
                s(!0), a.send("reward.opened", {
                    fieldIndex: t
                })
            },
            d = () => {
                A(), s(!1)
            };
        return React.createElement(Modal, {
            centered: !0,
            show: !0
        }, React.createElement(Panel, null, React.createElement("div", {
            className: "flex flex-col items-center justify-between h-52"
        }, React.createElement("span", {
            className: "text-center mb-2"
        }, "Woohoo! You found a reward"), n ? React.createElement(React.Fragment, null, e.items.map(E => React.createElement("div", {
            key: E.name,
            className: "flex items-center"
        }, React.createElement("img", {
            className: "w-8 img-highlight mr-2",
            src: ITEM_DETAILS[E.name].image
        }), React.createElement("span", {
            className: "text-center mb-2"
        }, `${E.amount} ${E.name}s`))), React.createElement(Button, {
            onClick: d,
            className: "mt-4 w-28"
        }, "Close")) : React.createElement(React.Fragment, null, React.createElement("div", {
            className: "flex items-center justify-between",
            style: {
                width: `${r.current}%`,
                transform: `scaleX(${r.current%2==0?1:-1})`
            }
        }, React.createElement("img", {
            src: idle,
            className: "w-16"
        }), React.createElement("img", {
            src: secure,
            id: i.current,
            className: "w-16 hover:img-highlight cursor-pointer",
            onClick: m
        })), React.createElement("span", {
            className: "text-sm"
        }, "Tap the chest to open it")))))
    },
    POPOVER_TIME_MS$4 = 1e3,
    isCropReady = (e, A, t) => e - A > t * 1e3,
    Field = ({
        selectedItem: e,
        className: A,
        fieldIndex: t
    }) => {
        const [a, n] = react.exports.useState(!0), [s, r] = react.exports.useState(), {
            gameService: i
        } = react.exports.useContext(Context), [m, d] = react.exports.useState(0), [E, u] = react.exports.useState(null), [w] = useActor(i), B = react.exports.useRef(0), g = w.context.state.fields[t], [C, Q] = react.exports.useState(!1), h = async F => {
            r(F), n(!0), await new Promise(T => setTimeout(T, POPOVER_TIME_MS$4)), n(!1)
        }, f = () => {
            u(null), d(0), i.send("item.harvested", {
                index: t
            })
        }, S = () => {
            if (g) {
                const F = CROPS()[g.name],
                    T = Date.now(),
                    N = isCropReady(T, g.plantedAt, F.harvestSeconds),
                    U = T - g.plantedAt < 1e3;
                !N && !U && Q(!0)
            }
        }, y = () => {
            Q(!1)
        }, I = () => {
            const F = Date.now();
            if (!(F - B.current < 100) && (B.current = F, !E)) {
                if ((g == null ? void 0 : g.reward) && isCropReady(F, g.plantedAt, CROPS()[g.name].harvestSeconds)) {
                    if (m < 1) {
                        d(T => T + 1);
                        return
                    }
                    u(g.reward);
                    return
                }
                if (!g) {
                    try {
                        i.send("item.planted", {
                            index: t,
                            item: e
                        }), plantAudio.play(), h(React.createElement("div", {
                            className: "flex items-center justify-center text-xs text-white text-shadow overflow-visible"
                        }, React.createElement("img", {
                            src: ITEM_DETAILS[e].image,
                            className: "w-4 mr-1"
                        }), React.createElement("span", null, "-1")))
                    } catch {
                        h(React.createElement("img", {
                            className: "w-5",
                            src: cancel
                        }))
                    }
                    return
                }
                try {
                    i.send("item.harvested", {
                        index: t
                    }), harvestAudio.play(), h(React.createElement("div", {
                        className: "flex items-center justify-center text-xs text-white text-shadow overflow-visible"
                    }, React.createElement("img", {
                        src: ITEM_DETAILS[g.name].image,
                        className: "w-4 mr-1"
                    }), React.createElement("span", null, `+${g.multiplier||1}`)))
                } catch {
                    h(React.createElement("img", {
                        className: "w-5",
                        src: cancel
                    }))
                }
                d(0)
            }
        }, D = w.matches("playing") || w.matches("autosaving");
        return React.createElement("div", {
            onMouseEnter: S,
            onMouseLeave: y,
            className: classNames("relative group", A),
            style: {
                width: `${GRID_WIDTH_PX}px`,
                height: `${GRID_WIDTH_PX}px`
            }
        }, React.createElement(Soil, {
            className: "absolute bottom-0",
            field: g,
            showCropDetails: C
        }), React.createElement("div", {
            className: classNames("transition-opacity pointer-events-none absolute -bottom-2 left-1", {
                "opacity-100": m > 0,
                "opacity-0": m === 0
            })
        }, React.createElement(HealthBar, {
            percentage: 100 - m * 50
        })), React.createElement("div", {
            className: classNames("transition-opacity absolute -bottom-2 w-full z-20 pointer-events-none flex justify-center", {
                "opacity-100": a,
                "opacity-0": !a
            })
        }, s), D && React.createElement("img", {
            src: selectBox,
            style: {
                opacity: .1
            },
            className: "absolute inset-0 w-full opacity-0 sm:group-hover:opacity-100 sm:hover:!opacity-100 z-20 cursor-pointer",
            onClick: I
        }), React.createElement(CropReward, {
            reward: E,
            onCollected: f,
            fieldIndex: t
        }))
    },
    CropZoneOne = () => {
        const {
            selectedItem: e
        } = react.exports.useContext(Context);
        return React.createElement("div", {
            className: "absolute flex justify-center flex-col ",
            style: {
                width: `${GRID_WIDTH_PX*3}px`,
                height: `${GRID_WIDTH_PX*3}px`,
                left: `${GRID_WIDTH_PX*13}px`,
                top: `${GRID_WIDTH_PX*.85}px`
            }
        }, React.createElement("div", {
            className: "flex justify-between"
        }, React.createElement(Field, {
            selectedItem: e,
            fieldIndex: 0
        }), React.createElement(Field, {
            selectedItem: e,
            fieldIndex: 1
        })), React.createElement("div", {
            className: "flex justify-center"
        }, React.createElement(Field, {
            selectedItem: e,
            fieldIndex: 2
        })), React.createElement("div", {
            className: "flex justify-between"
        }, React.createElement(Field, {
            selectedItem: e,
            fieldIndex: 3
        }), React.createElement(Field, {
            selectedItem: e,
            fieldIndex: 4
        })))
    };
var goblinHead = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAAPJJREFUOE9jZMABBHjk/+OS+/DlISO6HIYASAHIEJ06dbBadTs2uJ6bh36B2VeabjKgGwY2CN12mCHoBoH4yIbBbAAZyggyJHiPLlwBNu8guwpmGMhVggGKDE45PAxrXS4zgA0CuWDXG1OwGW4ip3EFDYo4yCCYy0FssEEgk6X12MCGkWIQTB/YIFgYgQRhAGQoMkC2/WrTTQbtOnVwgIP0vN9wHxzw8FhDDnDkwAYZCNMMZjffYtCuVQMbBAKw2MOIfuSoxxdY6EmAKIMOl+5kELayBZv79thhBttud4y0hNUgkAZYQGJzFc4EiU0xqVkEAMqLdbuJ513PAAAAAElFTkSuQmCC",
    heart = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAIBAMAAADZ48iGAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAA////9nV6JitE5DtEW1VdTgAAAAF0Uk5TAEDm2GYAAAAuSURBVAjXY2AwZjZgYGBWMVJmYDAScXIxYDBxcYGTzC4uzgwMQA5QDQOzMQMDAJEWBev0tPusAAAAAElFTkSuQmCC";
const CropZoneTwo = () => {
    const [e, A] = react.exports.useState(!1), {
        gameService: t,
        selectedItem: a
    } = react.exports.useContext(Context), [{
        context: {
            state: n
        }
    }] = useActor(t), [s] = useScrollIntoView(), r = () => {
        A(!1), s(Section.Town)
    }, i = n.inventory["Pumpkin Soup"];
    return React.createElement(React.Fragment, null, i ? React.createElement(React.Fragment, null, React.createElement("img", {
        src: heart,
        className: "absolute z-10 animate-float",
        style: {
            width: `${GRID_WIDTH_PX*.3}px`,
            left: `${GRID_WIDTH_PX*-.6}px`,
            bottom: `${GRID_WIDTH_PX*5.7}px`
        }
    }), React.createElement("img", {
        src: goblin$1,
        className: "absolute z-10 pointer-events-none",
        style: {
            width: `${GRID_WIDTH_PX*5}px`,
            left: `${GRID_WIDTH_PX*-3}px`,
            bottom: `${GRID_WIDTH_PX*3.25}px`
        }
    }), React.createElement("img", {
        src: pumpkinSoup,
        className: "absolute ",
        style: {
            width: `${GRID_WIDTH_PX*.75}px`,
            left: `${GRID_WIDTH_PX*.2}px`,
            bottom: `${GRID_WIDTH_PX*4.5}px`
        }
    })) : React.createElement(React.Fragment, null, " ", React.createElement("img", {
        src: questionMark,
        className: "absolute z-10 animate-float",
        style: {
            width: `${GRID_WIDTH_PX*.3}px`,
            left: `${GRID_WIDTH_PX*3.35}px`,
            bottom: `${GRID_WIDTH_PX*2.7}px`
        }
    }), React.createElement("img", {
        src: goblin$1,
        className: "absolute z-10 hover:img-highlight cursor-pointer",
        onClick: () => A(!0),
        style: {
            width: `${GRID_WIDTH_PX*5}px`,
            left: `${GRID_WIDTH_PX*1}px`,
            bottom: `${GRID_WIDTH_PX*.25}px`
        }
    })), React.createElement("div", {
        className: "absolute flex justify-center flex-col",
        onClick: i ? void 0 : () => A(!0),
        style: {
            width: `${GRID_WIDTH_PX*3}px`,
            height: `${GRID_WIDTH_PX*3}px`,
            left: `${GRID_WIDTH_PX*1}px`,
            bottom: `${GRID_WIDTH_PX*.6}px`
        }
    }, React.createElement("div", {
        className: "flex justify-between"
    }, React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 5
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 6
    })), React.createElement("div", {
        className: "flex justify-center"
    }, React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 7
    })), React.createElement("div", {
        className: "flex justify-between"
    }, React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 8
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 9
    }))), React.createElement(Modal, {
        centered: !0,
        show: e,
        onHide: () => A(!1)
    }, React.createElement(Panel, null, React.createElement("img", {
        src: close,
        className: "h-6 top-4 right-4 absolute cursor-pointer",
        onClick: () => A(!1)
    }), React.createElement("div", {
        className: "flex items-start"
    }, React.createElement("img", {
        src: goblinHead,
        className: "w-16 img-highlight mr-2"
    }), React.createElement("div", {
        className: "flex-1"
    }, React.createElement("span", {
        className: "text-shadow block"
    }, "This is Goblin land!"), React.createElement("span", {
        className: "text-shadow block mt-4"
    }, "I will trade this land for some creamy pumpkin soup."), React.createElement("img", {
        src: pumpkinSoup,
        className: "w-8 img-highlight float-right mr-1 mb-1"
    }), React.createElement(Button, {
        className: "text-sm",
        onClick: r
    }, "Go to the kitchen"))))))
};
var goblinWatering = "data:image/gif;base64,R0lGODdhYABAAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAAAYABAAIQAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSUZPD7+rjQAlem+Si/YdkQSTol0Pzks6PV1PToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8CAgjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsFgZKJsD41pAIBi42eh0bM12vwVx+erMrtvxZXopAQN9hocBBAN5giRrBQWHiHCNJokCkZJ9l4yVIokEBIZ0BngEnZ6fZYalAgeAqYNwdJsAgbGWdAhnZQkBCsC4JKUECAnHAQsBvsDNwrYGy8e+ygwBDdjOuAEOAQzH1mXW2NnBsdzeDOprp2gP7+/mnhC8aNEi8Pnvzyv6D/z94AEcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM84IAQAh+QQJBwAAACwnABcAHgATAIQAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSUZPD7+rjQAlem+Si/YdkQSTol0Pzks6PV1PToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFmiAgjkFpBmOqrmkgCEP8omzdvnA8zDZ74jmZqUfaAY8zwoDWcxUKSKBLwLQFCAJoNEkliq4ELG5qoBKqRBOwLDhQ0V7AtHREleKtKeJUSgQUgAp4ZQQICYcBCwF+gYFeAQaLh36KDAENjYBpDgEMh5Yllg2jCg8Pgk2cDKuWAmc0DaayDzYQfCiRpiOxp7J4Kboio5ilv8bHvyEAIfkECQcAAAAsJwAXACAAEwCEAAAAFxQkPolIY8dNJlxC9nV6GBQkGBUlGTw+/q40AJXpvkovLOj12HZEEk6JdD85dT06AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZ0gII5BaQZjqq5rIAhD/KJs3b5wPMy2feI5mamnCuyAyBlhQCMCXIVCEugSNIkBgkA6VVqdJIKY+jJYCVewCWgWHKxpsKhaQqJK8mIVcSolAgqBeSJmBAgJiAELAX+BgQwMcgEGjIh/iw0BDpsKkJIPAQ2ImSWZm5yCkJE1AaANr5kCaCinDo4AqjUQfSiUKae3gz2oCsIpnsZEq3IhACH5BAkHAAAALCcAFwAhABMAhAAAABcUJD6JSGPHTSZcQvZ1ehgUJBgVJRk8Pv6uNACV6b5KLxJOiSzo9dh2RHQ/OXU9OgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWdICCOQWkGY6qubCAIQ/yibN2+cDzMdn/iOZmptwrsgMgZYUAjilyFQhLoEjSdAYJAOlVanaksQYurGqyEKxhgAp4FB6t6/ZxVy+z5uvRCnEoJAQqDCnQiZwQICYsBCwGBDIQNDXQBBo+LgY4OAQyehJUPAQ6LnCWcAJ6RhXuiDq+cAmk0n4MqkywQfyiXKrW3lIbAkcJOk8HFRLg1IQAh+QQJBwAAACwnABcAIQASAIQAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSUZPD7+rjQAlem+Si8STonYdkR0Pzl1PTos6PUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFmyAgjkFpBmOqrmwgCEP8omzdvnA8zHZ/4jmZqbcK7IDIGWFAI4pchUIS6BI0nQGCQDpVWp2pLEGLqxqshCsYYAKeBQerev2cVcvs+br0QpxKCQEKg3QjZwQICYoBCwGBDIMKhWwGjoqBjQ0BDJCEdAEOAQ2KmiWanJ2Se6ENrZoCaSionmAPfyiVKQwQELSTNby9qim8vyMQPRAhADs=",
    cabbageSoup = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAMAAACg0N8BAAAABGdBTUEAALGPC/xhBQAAAFFQTFRFAAAA////V1ZW+P7//fz8//3+/v/+4OTtpKetAQMH4uXwUSxUAgID4uXv6LeW3uPspqmvV1dY/v78/v//QCcf4OTuaDhsuG9Q9nV6cz45tVCIi0pAGAAAAAF0Uk5TAEDm2GYAAAA+SURBVAjXDchHDsAwDMRApvdqW5H3/w+N5kKAkGvNwBciNUDTpTG9tC75Qy93XQzS6YXJ4hbmzcxu2I914QeFYQPOPloLeQAAAABJRU5ErkJggg==";
const CropZoneThree = () => {
    const [e, A] = react.exports.useState(!1), {
        gameService: t,
        selectedItem: a
    } = react.exports.useContext(Context), [{
        context: {
            state: n
        }
    }] = useActor(t), s = n.inventory.Sauerkraut;
    return React.createElement(React.Fragment, null, s ? React.createElement(React.Fragment, null, React.createElement("img", {
        src: goblin$1,
        className: "absolute z-10",
        style: {
            width: `${GRID_WIDTH_PX*5}px`,
            left: `${GRID_WIDTH_PX*2}px`,
            top: `${GRID_WIDTH_PX*-3.25}px`
        }
    }), React.createElement("img", {
        src: cabbageSoup,
        className: "absolute ",
        style: {
            width: `${GRID_WIDTH_PX*.3}px`,
            left: `${GRID_WIDTH_PX*5}px`,
            top: `${GRID_WIDTH_PX*-1.5}px`
        }
    })) : React.createElement(React.Fragment, null, React.createElement("img", {
        src: goblinWatering,
        className: "absolute z-20 hover:img-highlight cursor-pointer",
        onClick: () => A(!0),
        style: {
            width: `${GRID_WIDTH_PX*5}px`,
            left: `${GRID_WIDTH_PX*.2}px`,
            top: `${-GRID_WIDTH_PX*1.5}px`
        }
    })), React.createElement("div", {
        className: "absolute flex justify-between flex-col",
        onClick: s ? void 0 : () => A(!0),
        style: {
            width: `${GRID_WIDTH_PX*4}px`,
            height: `${GRID_WIDTH_PX*2.3}px`,
            left: `${GRID_WIDTH_PX*3}px`,
            top: `${GRID_WIDTH_PX*.22}px`
        }
    }, React.createElement("div", {
        className: "flex justify-between items-center"
    }, React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 10
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 11
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 12
    })), React.createElement("div", {
        className: "flex justify-between items-center z-10"
    }, React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 13
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 14
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 15
    }))), React.createElement(Modal, {
        centered: !0,
        show: e,
        onHide: () => A(!1)
    }, React.createElement(Panel, null, React.createElement("div", {
        className: "flex items-start"
    }, React.createElement("img", {
        src: goblinHead,
        className: "w-16 img-highlight mr-2"
    }), React.createElement("div", {
        className: "flex-1"
    }, React.createElement("span", {
        className: "text-shadow block"
    }, "The only thing I like more than farming is Sauerkraut"), React.createElement("img", {
        src: cabbageSoup,
        className: "w-8 img-highlight float-right mr-1"
    }))))))
};
var jumpingGoblin = "data:image/gif;base64,R0lGODdhYABAAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAAAYABAAIMAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSX///8ZPD4/KDJ0Pzl1PToAAAAAAAAAAAAEyRDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CoVBeoWgPTUkAgGHi52Gxoy/V+BWHx5sotm9FVdSYwaNvvAcIgLadsCwV3eGB9FnkCgXZkBmgEaIWGBJJ2jAIHjXyQE1aCbXGaGGRcCAkJCI+gc454qXNVBAqSCp+tFWQJAgtcC1uZtYwECQvDw3m+v1XFCrPHtRIMVwEMztTV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+w3EQAh+QQJBwAAACwnABYAEgARAIMAAAAXFCQ+iUhjx032dXomXEIYFCQYFSUZPD50Pzn///8/KDJ1PToAAAAAAAAAAAAEXBDISau9OOsaug9aIAhDOYKXOJamgE7euLLuGwxynt+oSBC6nUsSKAiAwdOQWDDKVIYaR6UURF8UqnV0WMKKzWAnO0KMEgIFAqEQvaIFRCCRWNjtRawBxPh4+hMRACH5BAkHAAAALCcAFQASABIAgwAAABcUJD6JSGPHTSZcQvZ1ehgUJBgVJf///xk8Pj8oMnQ/OXU9OgAAAAAAAAAAAARoEMhJq50h63CxEEP4cVfwgeEwWtmJihlmuq8aEFygFjRtDq0Cr3e6CTIEASFZ/BiOyZzG9RQcjjHKjEhiMRGJBKJbIiiWCnJJsPgs1JXMYj7Psj6JtyJ9vDwJCQwBgkpwEgYZgoKIFBEAIfkECQcAAAAsJwAUABIAEgCDAAAAFxQkPolIY8dNJlxC9nV6GBQkGBUl////GTw+PygydD85dT06AAAAAAAAAAAABGYQyEmrnSHrcLEQQ/hxV/CB4TBa2YmKGWa6tBAQXKAWtWsOrQLP9zHYCLabgIA8GQWHow2w6Y1ilNkHkUggpqWmryO5KZgKUqe1+CywrE9iQX+DK0bCPKBI4zoGGQwBg4FkZYODFhEAIfkECQcAAAAsJwAUABIAEACDAAAAFxQkPolIY8dNJlxC9nV6GBQkGBUl////GTw+PygydD85dT06AAAAAAAAAAAABGQQyBmqDTNTIYbnmCYFXOcNYHaV5mcBAcrOIDFUQlHQLClUhNzMZ/gFMQGCklUUHIwhGI73i25KiEQC8RNJg0PriJMgKJQKn7hISAgWnAWJIAYYKot8PnD3Shh7CgoMfhQVUmIRACH5BAkHAAAALCcAFAASABEAgwAAABcUJD6JSGPHTSZcQvZ1ehgUJBgVJf///xk8Pj8oMnQ/OXU9OgAAAAAAAAAAAARkEMgZqg0zUyGG51h2cZ03gBUQnCRpngExVEJRtLgQoESdtzGdikAEcgw6QkhFIyEFB91y8xNqmhxEIoGQijiJHm5nBSAJYYKCuD5PDRbBgjMPwDUSxmK/VygYeBQXF4GFhod4EQAh+QQJBwAAACwnABYAEgARAIMAAAAXFCQ+iUhjx032dXomXEIYFCQYFSUZPD7///8/KDJ0Pzl1PToAAAAAAAAAAAAEYBDIGaoNM18hhucYJgUDZ3ZeSYqBQBBn3LKFG58zVdQ3KFItU9Ag+GlORMGhmBkFe5WjAGFKIBCJIlNCLCB4SEHBaAjsCopdulBuOgULTtzYZCzud4WC4QZeLH2BgoNuEQAh+QQJBwAAACwnABcAEgAQAIMAAAAXFCQ+iUhjx00mXEL2dXoYFCQYFSX///8ZPD50Pzk/KDJ1PToAAAAAAAAAAAAEXhDISau92IbNQwaBIAyk6FGdOJKDuYGtqrJtQAybUBTyWoaCDUHX69mCIIKyqLKdQLmmyBB8ToBT0QGpYZoqwqUAkUggXldRQqSQKUJPKiERUCgWeLyTYvAwOhx/ExEAIfkECQcAAAAsJwAXABIAEACDAAAAFxQkPolIY8dNJlxC9nV6GBQkGBUl////GTw+PygydD85dT06AAAAAAAAAAAABGMQyBmqDTNTIYbnmCYFXOcNoAiQ5YmGWVXOICzTdEBgAVrgM9JAVvgFOQaBTrkkEGZJwUH55FmANRjlKUAkEghtrEJQOBUk8YqTECw4C506SUgs7veKCmCo5BVoexMMFwEMGhEAOw==",
    goblinDig = "data:image/gif;base64,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";
const CropZoneFour = () => {
    const [e, A] = react.exports.useState(!1), {
        gameService: t,
        selectedItem: a
    } = react.exports.useContext(Context), [{
        context: {
            state: n
        }
    }] = useActor(t), s = n.inventory["Roasted Cauliflower"];
    return React.createElement(React.Fragment, null, s ? React.createElement(React.Fragment, null, React.createElement("img", {
        src: jumpingGoblin,
        className: "absolute z-10 -scale-x-100",
        style: {
            width: `${GRID_WIDTH_PX*5}px`,
            left: `${GRID_WIDTH_PX*4}px`,
            top: `${GRID_WIDTH_PX*-3.25}px`
        }
    }), React.createElement("img", {
        src: cauliflowerRice,
        className: "absolute ",
        style: {
            width: `${GRID_WIDTH_PX*.8}px`,
            left: `${GRID_WIDTH_PX*5.3}px`,
            top: `${GRID_WIDTH_PX*-1.5}px`
        }
    })) : React.createElement(React.Fragment, null, React.createElement("img", {
        src: goblinDig,
        className: "absolute z-20 hover:img-highlight cursor-pointer -scale-x-100",
        onClick: () => A(!0),
        style: {
            width: `${GRID_WIDTH_PX*5}px`,
            left: `${GRID_WIDTH_PX*4.8}px`,
            top: `${GRID_WIDTH_PX*3}px`
        }
    })), React.createElement("div", {
        className: "absolute flex justify-between flex-col",
        onClick: s ? void 0 : () => A(!0),
        style: {
            width: `${GRID_WIDTH_PX*4}px`,
            height: `${GRID_WIDTH_PX*2.3}px`,
            left: `${GRID_WIDTH_PX*3}px`,
            top: `${GRID_WIDTH_PX*3}px`
        }
    }, React.createElement("div", {
        className: "flex justify-between items-center"
    }, React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 16
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 17
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 18
    })), React.createElement("div", {
        className: "flex justify-between items-center z-10"
    }, React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 19
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 20
    }), React.createElement(Field, {
        selectedItem: a,
        fieldIndex: 21
    }))), React.createElement(Modal, {
        centered: !0,
        show: e,
        onHide: () => A(!1)
    }, React.createElement(Panel, null, React.createElement("img", {
        src: close,
        className: "h-6 top-4 right-4 absolute cursor-pointer",
        onClick: () => A(!1)
    }), React.createElement("div", {
        className: "flex items-start"
    }, React.createElement("img", {
        src: goblinHead,
        className: "w-16 img-highlight mr-2"
    }), React.createElement("div", {
        className: "flex-1"
    }, React.createElement("span", {
        className: "text-shadow block"
    }, "I will keep digging until I find some Cauliflowers to roast!"), React.createElement("img", {
        src: cauliflowerRice,
        className: "w-8 img-highlight float-right mr-1"
    }))))))
};
var goblin = "data:image/gif;base64,R0lGODdhEgAQAMQAAAAAABcUJD6JSGPHTSZcQvZ1ehgUJBgVJf///xk8Pj8oMnQ/OQAAAHU9Ovd2Iv/eH//5TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAAAEgAQAAAFaSAgjkFpBmNKCsLgsqgqBmzrDnB61vZrAgEcbwgjDEqCQoHIowlKhOTQaXhGUQGCllcVHKwxIJL5DK9qiETC8TDrolMHRGYiKLSKkgzISggWLAs0bgBVBAkLiYlZhIUliwp5jSMEJ1kqIQAh+QQJBwAAACwAAAAAEgAQAAAFaSAgjkFpBmNKCsLgsmh6sq07wCUQ3EJA168AYVASFAq/ZA9HMCp/wp6O0HzCCDFdlOYTGHrZFe0rOEhVOusZvUUkEo4HWkZQUBUoB4QtrN9zbCwJAgssCz5hIl8ECQuOjkKJigENJ5RhIQAh+QQJBwAAACwAAAAAEgAQAAAFaSAgjkFpBmNKCsLgsqgqBmzrDnB61vZrAgEcbwgjDEqCQoHIowlKhCSzFoiiqoQolWV4EmJAZK0rODzBqylap0UkEo6HjK3IKlAOiAxKqPdLc04JAgssCzRrAF0ECQuOjlWJigENJ5RoIQAh+QQJBwAAACwAAAEAEgAPAAAFaCAgjkFpBmNKCsLgsqgqBmzrDnB61vZrAgEcbwgjDEqCQoHIowlKhCSzFoiiqoQolWV4EmJAZK0rODzBqylap0UkEo6HLJwlKLKKkgOiYyWiCywLTmhdBAkBC4qKNF8qBigNJwENkCMhACH5BAkHAAAALAAAAQASAA8AAAVoICCOQWkGY0oKwuCyqCoGbOsOsFzW9luSNJ5QECCgArjCkEcb7ArKJYxALAoI1FrQQKQeTTyu4FCNraRmlVWASCQcDxmghCUosIqSA5IKJqgLLAtBaVwECQELioo0RioGKA0nAQ2QIyEAIfkECQcAAAAsAAABABIADwAABWQgII5BaQZjSgrC4LKoKgZs6w5wetb2awIBHG8IIwxKgkKByKMJSoQksxaIoqqEKJVleBJiQGStKzg8waspWqdFJBKOh2yGVWQVJQdE5UwIFiwLNGsAXQQJC4mJVYSFAQ0nj2ghACH5BAkHAAAALAAAAQASAA8AAAVkICCOQWkGY0oKwuCyqCoGbOsOcHrW9msCARxvCCMMSoJCgcijCUqEJLMWiKKqhCiVZXgSYkBkrSs4PMGrKVqnRSQSjodsVhUsWIuSA6JyJhaAgDRrAF0Ef3kKClWEhQENJ49oIQAh+QQJBwAAACwAAAAAEgAQAAAFZSAgjmRpjkGqBicqCEP8smfwwvEwk+uNyypAQOcrzgiDlKBQMPpsghRh6bwFpqwrYWp9GaIEmlB5+woOUbGrquZxEYmE49GSChavRcoBKUETC4GBNm0AXwSAegoKV4WGAQ0rkGohACH5BAkHAAAALAAAAAASABAAAAVqICCOQWkGY0oKwuCyqCoGbOsOsFzW9luSNJ5QECCgArjCkEcb7ArKJYxALAoI1FrQQKQeTTyu4FCNraRmlVWASCQcD9msRFBgFSUHRM1KCBYsCzRpIlwECQuJiUWEhSWLCniNKQ0nAQ0qIQA7";
const WheatGoblin = () => {
        const [e, A] = react.exports.useState(!1), {
            gameService: t
        } = react.exports.useContext(Context), [{
            context: {
                state: a
            }
        }] = useActor(t);
        return React.createElement(React.Fragment, null, React.createElement("div", {
            className: "absolute z-10",
            style: {
                right: `${GRID_WIDTH_PX*30}px`,
                top: `${GRID_WIDTH_PX*30}px`,
                width: `${GRID_WIDTH_PX}px`
            }
        }, a.inventory["Radish Pie"] ? React.createElement(React.Fragment, null, React.createElement("img", {
            src: heart,
            className: "absolute z-10 animate-float w-3 -top-6 left-4"
        }), React.createElement("img", {
            src: goblin,
            className: "z-10 w-full",
            style: {
                width: `${GRID_WIDTH_PX*1}px`,
                transform: "scaleX(-1)"
            }
        }), React.createElement("img", {
            src: radishPie,
            className: "absolute ",
            style: {
                width: `${GRID_WIDTH_PX*.7}px`,
                left: `-${GRID_WIDTH_PX*.86}px`,
                bottom: `${GRID_WIDTH_PX*.42}px`
            }
        })) : React.createElement(React.Fragment, null, " ", React.createElement("img", {
            src: questionMark,
            className: "absolute z-10 animate-float w-3 -top-8 left-4"
        }), React.createElement("img", {
            src: goblin,
            className: "z-10 w-full hover:img-highlight cursor-pointer",
            onClick: () => A(!0),
            style: {
                width: `${GRID_WIDTH_PX*1}px`,
                transform: "scaleX(-1)"
            }
        }))), React.createElement(Modal, {
            centered: !0,
            show: e,
            onHide: () => A(!1)
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: () => A(!1)
        }), React.createElement("div", {
            className: "flex items-start"
        }, React.createElement("img", {
            src: goblinHead,
            className: "w-16 img-highlight mr-2"
        }), React.createElement("div", {
            className: "flex-1"
        }, React.createElement("span", {
            className: "text-shadow block"
        }, "Goblin Farmer"), React.createElement("span", {
            className: "text-shadow block mt-4"
        }, "Do you want to know the secret to growing wheat? Perhaps a radish pie will refresh my memory"), React.createElement("img", {
            src: radishPie,
            className: "w-8 img-highlight float-right mr-1 mb-1"
        }))))))
    },
    Crops = () => React.createElement(React.Fragment, null, React.createElement("div", {
        style: {
            width: `${GRID_WIDTH_PX*25}px`,
            height: `${GRID_WIDTH_PX*12}px`,
            left: `calc(50% - ${GRID_WIDTH_PX*13}px)`,
            top: `calc(50% - ${GRID_WIDTH_PX*23}px)`
        },
        className: "absolute"
    }, React.createElement("span", {
        id: Section.Crops,
        className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    }), React.createElement(CropZoneOne, null), React.createElement(CropZoneTwo, null), React.createElement(CropZoneThree, null), React.createElement(CropZoneFour, null)), React.createElement(WheatGoblin, null));
var chick = "data:image/gif;base64,R0lGODlhCgAMAKIAAP2xADQ0NMiVM7y8vP/wPopXBf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZGI5ZGE3OC1hNDE3LTJhNDctODg2MS0xMGYwZjY0MDlhMTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI2OTlBRjU2RjVEMTFFQzg0MTJEOUZEQzI2MzA1MTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI2OTlBRjQ2RjVEMTFFQzg0MTJEOUZEQzI2MzA1MTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1MDUyMGYwLTIxMDItYWY0Zi1iMzgxLTA2ZDI5NjQ4NjNhMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3ZGI5ZGE3OC1hNDE3LTJhNDctODg2MS0xMGYwZjY0MDlhMTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJIwAGACwAAAAACgAMAAADJmi63K4lukJqYbTalcM2BQAQHnFBmSmBQqsJZ9G6pzFE+MAMPK8kACH5BAkjAAYALAAAAQAKAAsAAAMmaFqsboXI8qKczgYMASAbQS2W2EBCegljkaojycTGMBS3/di8kgAAIfkECSMABgAsAAAAAAoADAAAAyhoWqxuhcjyopzOBgwBIBtBLZZYCZc4FkJ7CWvrjiRDG8NQ6PmT/4oEACH5BAUjAAYALAAAAQAKAAsAAAMmaFqsboXI8qKczgYMASAbQS2WWAmXOBZCewlr647GwNzDM+y7kgAAOw==",
    dragonfly = "data:image/gif;base64,R0lGODdhUABQAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAUABQAIIAAAAAAABdpStjsS5qvjDL2/wAAAAAAAADsgi63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikMlZoOpuo51NAFZCkzii2ULWOtgUttnvdiqXkFfgJWTvTMjf0IedWafW2HM6U6918OAGDAQSGBISFh4tEiYuOi4eNhI+UkYaTg5WalwRIA6ChoIFHoqKkRqahqEWqo3dLsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DRuQkAIfkECQoAAAAsAAAAAFAAUACCAAAAAAAAXaUrY7Euar4wy9v8AAAAAAAAA7MIutz+MMpJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHKpITgJgqiAyXhCpdSFVTrNArbYIzjq/T655XE3q6YV3vB3YB6w0gPxPBynl9PtdH15fH13gHOCcYR6hk93iXsvghQDlZaVaA+TJ5sSl5eZDp0loxCflqENpSOrDqeYYaJ9ZbS1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLPCQA7",
    sharkRight = "./assets/shark-right.b5992259.gif",
    sharkLeft = "./assets/shark-left.fe30309c.gif";
const randomBetweenMaxInclusive = (e, A) => Math.floor(Math.random() * (A - e + 1) + e),
    blankPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
    imageSources = [sharkLeft, blankPng, sharkRight, blankPng],
    getSharkPosition = () => {
        const e = randomBetweenMaxInclusive(0, 73);
        return {
            top: randomBetweenMaxInclusive(0, 90),
            left: e
        }
    },
    Shark = () => {
        const e = react.exports.useRef(null),
            [A, t] = react.exports.useState(getSharkPosition()),
            [a, n] = react.exports.useState(1),
            s = () => {
                t(getSharkPosition())
            },
            r = () => {
                const i = a === 3,
                    m = a + 1;
                n(i ? 0 : m)
            };
        return react.exports.useEffect(() => {
            r()
        }, [A]), react.exports.useEffect(() => (e.current = setInterval(s, randomBetweenMaxInclusive(6e4, 9e4)), () => clearInterval(e.current)), []), React.createElement("div", {
            className: "absolute top-1/2 -translate-y-20 w-full",
            style: {
                height: "280px",
                left: "-200px",
                width: "calc(100% + 180px)"
            }
        }, React.createElement("img", {
            className: "absolute",
            src: imageSources[a],
            alt: "shark",
            style: {
                top: `${A.top}%`,
                left: `${A.left}%`
            }
        }))
    };
var goblinSwimming = "./assets/goblin_swimming.70b3a6c1.gif",
    goblinSnorkling = "data:image/gif;base64,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",
    swimmer = "data:image/gif;base64,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",
    waterBoat = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAcCAYAAAA5pQx5AAADN0lEQVRYhdWY30uTURjHv6/MgS0pbwJFJlvMxB9b4I0DGZpB0C7WXTfrLjCGXgwvhP6AwCB2oYwGQkS7kd20C4MiM4Y1I0KTFquhQxMvhaASzXi72M6797znvHt/beo+N9v7nOec83zPr/c8rwCdTAX8YvD8H73uhln8dQ4A8CiTFZT9mm1T2ZYc1QJlx9PxqK7O8ull3YEBQE9oVPo/E4kx5Xr7VULaUhNfVfhUwC+Sjo82Vk0FYBS7d4h6Ntuv3TuEmUhMVbiNZ5TPMq/jt5++mQpGDxfW16nnn/9aDLcxMnhFc8AY4dVmmQhe+7hvOBjzHBiuMTKo7UMJnwr4xdCNq6qzTAR7vF1MeWFjG9PxKF49eQqgNDhW/JR1HJ3NlO337l+uTS+ScCLa7aKXlnyW5QH2trcxwQHA7UAPFjJ5ro8RP2WdifsTaNv8AABYyOSxtrvPtSlxTubEndk+Zp/biGjefubNslaQjYLtzU2f2P+wInqreAC3q0USXW/B9bwbEHizTu1xIhqAquj0S/rUrQbPlyfUSJtmUYrnvs6AUoA2jmDXwEWuf29xj7E5Optxqc1BG4uscK6fRttWURVO0BLcSMhnnRLudrVQy/343Xu4BjpOIURtrJ4NTeTPVrF0USCiu8Njlho+iUPLCk3XXnwWZiIx9IRGJfGE7vAYeot7ddljp40NKGcwEYjT8aiUXTEzn1zCV5f2sieXkmqQW5sR5h7MUc8dHJsW8lOdyX3JPT2fXmZucd+TS4Y6qickf+cRvecHAMQeZ5HyzUt21ddZyjcPRO4CqOTB8tuc1X2vB2VaqoxBisViP8zrLOWbx63tO1IiL18BZpF/bCCopY1HG6uwe4ek35qTKIgY9wiU8J3ZPsE5mROfdz1D+EcQAJgBqBXVRJFBIeLND0BWtYT7dcI5mRMBILwSlGyHre2M3/D1yyYDOhlWXm+yezxREAGe8HKB88sRAFq8Et5gnCXkogFgp99e+jPuEfjf3AyIP6sctrZXFd7EqQOMewS5Y3J4sY4hngKJgqj5eRmo7PlGR3upc2hk8ZJgQFrNmmkpt3IjUhZM0D3jNaV8eDIogqsn/wGvgXPLQWoqFAAAAABJRU5ErkJggg==",
    frog = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAMAAAAI/bVFAAAABGdBTUEAALGPC/xhBQAAAGxQTFRFAAAAVnk6OFYxruJnotReqd1jhKpMsuVtwfCAZoQ5t+h0qeNUd7QyicZTotowquAum9dOpNZfs6JX5GOKlsJYt+l0reJmaopAs+ZuS3UxFBIdxvl07//4gMI2zfWVe55HeLo4j9AyS2kvJ0Etti8CcgAAAAF0Uk5TAEDm2GYAAAB8SURBVAjXPc3XDsQgDERRb6/pCSUQMMz//+PStFeahyNZMlEKbSUwyiqMZbA1lbA7f3i3f4UQmmCWOXzDvNRTcMgxZIK84sjhtkp6TdBDb/pBY4oUHUZ9nA494k4U/QZ05w5Qzme6ZAjxfiZlistjU8rH8j/ZubUhsUT0A+nGDzWH2AQIAAAAAElFTkSuQmCC";
const Frog = () => {
        const [e, A] = react.exports.useState(!1), t = () => {
            A(!0), frogAudio.play()
        };
        return React.createElement(React.Fragment, null, React.createElement("img", {
            src: frog,
            className: "absolute hover:img-highlight cursor-pointer z-10",
            onClick: t,
            style: {
                width: `${GRID_WIDTH_PX*.7}px`,
                right: `${GRID_WIDTH_PX*5.1}px`,
                top: `${GRID_WIDTH_PX*3.5}px`
            }
        }), React.createElement(Modal, {
            centered: !0,
            show: e,
            onHide: () => A(!1)
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: () => A(!1)
        }), React.createElement("div", {
            className: "flex items-start"
        }, React.createElement("img", {
            src: frog,
            className: "w-12 img-highlight mr-2"
        }), React.createElement("div", {
            className: "flex-1"
        }, React.createElement("span", {
            className: "text-shadow block"
        }, "Lilly the Frog"), React.createElement("span", {
            className: "text-shadow block mt-4"
        }, "Ribbbbbit!"))))))
    },
    Water = () => React.createElement("div", {
        style: {
            height: "650px",
            width: "1650px",
            left: "calc(50% - 1100px)",
            top: "calc(50% - 320px)"
        },
        className: "absolute"
    }, React.createElement("div", {
        className: "h-full w-full relative"
    }, React.createElement("span", {
        id: Section.Water,
        className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    }), React.createElement("img", {
        src: chick,
        className: "absolute right-0 w-5 top-8"
    }), React.createElement("img", {
        src: dragonfly,
        className: "absolute right-16 w-10 bottom-36 animate-float"
    }), React.createElement(Frog, null), React.createElement(Shark, null), React.createElement("img", {
        src: goblinSwimming,
        className: "absolute ",
        style: {
            width: `${GRID_WIDTH_PX*5}px`,
            left: `${GRID_WIDTH_PX*5.5}px`,
            top: `${GRID_WIDTH_PX*2}px`
        }
    }), React.createElement("img", {
        src: goblinSnorkling,
        className: "absolute ",
        style: {
            width: `${GRID_WIDTH_PX*3.5}px`,
            left: `${GRID_WIDTH_PX*3}px`,
            top: `${GRID_WIDTH_PX*12}px`
        }
    }), React.createElement("img", {
        src: swimmer,
        className: "absolute ",
        style: {
            width: `${GRID_WIDTH_PX*.85}px`,
            left: `${GRID_WIDTH_PX*61}px`,
            top: `${GRID_WIDTH_PX*2.5}px`,
            transform: "scaleX(-1)"
        }
    }), React.createElement("img", {
        src: waterBoat,
        className: "absolute",
        style: {
            width: `${GRID_WIDTH_PX*4.3}px`,
            right: `${GRID_WIDTH_PX*6.4}px`,
            top: `${GRID_WIDTH_PX*4.3}px`
        }
    }))),
    Beta = () => React.createElement(Panel, null, React.createElement("span", {
        className: "text-shadow"
    }, "Beta is only accessible to our OG farmers."), React.createElement("span", {
        className: "text-shadow text-xs block mt-4"
    }, "Stay tuned for updates. We will be going live soon!"));
var humanDeath$1 = "./assets/suspicious_goblin.ea6c0c3a.gif";
const NoFarm = () => {
    var s, r;
    const {
        authService: e
    } = react.exports.useContext(Context$1), [A] = useActor(e), t = () => {
        e.send("EXPLORE")
    }, a = () => {
        e.send("CREATE_FARM")
    }, n = () => {
        e.send("CONNECT_TO_DISCORD")
    };
    return React.createElement(React.Fragment, null, !!((s = A.context.token) == null ? void 0 : s.userAccess.createFarm) || !!((r = A.context.token) == null ? void 0 : r.discordId) ? React.createElement(Button, {
        onClick: a,
        className: "overflow-hidden mb-2"
    }, "Create Farm") : React.createElement("div", {
        className: "flex flex-col items-center"
    }, React.createElement("div", {
        className: "flex items-center mt-4 -mb-4 relative"
    }, React.createElement("img", {
        src: humanDeath$1,
        className: "w-12"
    }), React.createElement("img", {
        src: idle,
        className: "w-12 relative bottom-1",
        style: {
            transform: "scaleX(-1)"
        }
    }), React.createElement("img", {
        src: questionMark,
        className: "absolute z-10 animate-float",
        style: {
            right: "18px",
            width: "13px",
            top: "-27px"
        }
    })), React.createElement("span", {
        className: "text-sm text-shadow p-2 text-center mb-4"
    }, "Beta is currently open for testers on Discord."), React.createElement("span", {
        className: "text-sm text-shadow p-2 text-center mb-2"
    }, "Only 100,000 spots available!"), React.createElement(Button, {
        onClick: n,
        className: "overflow-hidden mb-2"
    }, "Connect to Discord")), React.createElement(Button, {
        onClick: t,
        className: "overflow-hidden"
    }, "Explore a friend's farm"))
};
var goblinDonation = "./assets/goblin_donation.109b941f.gif";
const CreatingFarm = () => React.createElement("div", {
    className: "flex flex-col items-center p-1"
}, React.createElement("p", {
    className: "mb-1 text-center"
}, "Sending your donation and creating your farm."), React.createElement("img", {
    src: goblinDonation,
    alt: "donation loading",
    className: "w-full"
}), React.createElement("p", {
    className: "mb-1 text-center underline"
}, "Do not refresh your browser!"));
var upArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANBAMAAABiGeI2AAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAwMvcWmmIGBQl////ppnnKQAAAAF0Uk5TAEDm2GYAAAA5SURBVAjXY2BgMGYAAmZBAyBp6CIMZIq4OBoAmS5ADoQ0UnFxUoaSzCYuzgZQlQxGSspwktnYgAEATmIItCr5aZYAAAAASUVORK5CYII=",
    downArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANBAMAAABiGeI2AAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAwMvcWmmIGBQl////ppnnKQAAAAF0Uk5TAEDm2GYAAABBSURBVAjXNcvBDcAgDEPRL2UC2glIFqCBDcj+M+EeuDxZsQM2B/DVK1ftq8mhc6lYcpMyyF5PYN5cb+mhvf0RJhx61QkaI5a88gAAAABJRU5ErkJggg==",
    arrowRight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMBAMAAABGh1qtAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAwMvcWmmIGBQl////ppnnKQAAAAF0Uk5TAEDm2GYAAAA/SURBVAjXY2BgYDZgAAETYSDBbGziCOQauri4ALkmQArIhVIgQSEDBiMlFUclEKUopAzSYKQE1m+kDDYFZBgAndgJfr1otdoAAAAASUVORK5CYII=",
    humanDeath = "./assets/human_death.4768086b.gif";
const Blocked = () => {
        const {
            authService: e
        } = react.exports.useContext(Context$1), A = () => {
            removeSession(metamask.myAccount), e.send("REFRESH")
        };
        return React.createElement("div", {
            className: "flex flex-col text-center text-shadow items-center p-1"
        }, React.createElement("div", {
            className: "flex mb-3 items-center ml-8"
        }, React.createElement("img", {
            src: humanDeath,
            alt: "Warning",
            className: "w-full"
        })), React.createElement("p", {
            className: "text-center mb-3"
        }, "Beta testers only!"), React.createElement("p", {
            className: "text-center mb-2 text-xs"
        }, "You don't have access to the game yet."), React.createElement("p", {
            className: "text-center mb-4 text-xs"
        }, "Make sure you have joined the", " ", React.createElement("a", {
            className: "underline hover:text-white",
            href: "https://discord.gg/sunflowerland",
            target: "_blank",
            rel: "noreferrer"
        }, "Sunflower Land Discord server,"), ' go to the #verify channel and have the "farmer" role.'), React.createElement(Button, {
            onClick: A,
            className: "overflow-hidden mb-2"
        }, React.createElement("span", null, "Try again")))
    },
    roundToOneDecimal = e => Math.round(e * 10) / 10;
var CharityAddress;
(function(e) {
    e.TheWaterProject = "0xBCf9bf2F0544252761BCA9c76Fe2aA18733C48db", e.PCF = "0x8c6A1870D922279dB6F91CB6798592c7A7133BBD"
})(CharityAddress || (CharityAddress = {}));
const CHARITIES = lodash_shuffle([{
        name: "The Water Project",
        info: "You can provide clean, safe and reliable water today.",
        url: "https://thewaterproject.org/donate-ethereum",
        address: CharityAddress.TheWaterProject
    }, {
        name: "Purple Community Fund",
        info: "To help poverty stricken families and communities transform their own lives with our skills training, education, health and nutrition programmes.",
        url: "https://www.p-c-f.org/",
        address: CharityAddress.PCF
    }]),
    CharityDetail = ({
        url: e,
        name: A,
        info: t,
        address: a,
        onDonateAndPlayClick: n
    }) => {
        const s = r => {
            window.open(r, "_blank")
        };
        return React.createElement(OuterPanel, {
            className: "flex-col inline-flex items-center justify-center w-full"
        }, React.createElement("div", {
            className: "flex flex-col items-center mb-3 whitespace-normal"
        }, React.createElement("h5", {
            className: "text-sm text-shadow underline mb-3 text-center"
        }, A), React.createElement("p", {
            className: "text-xs text-center text-shadow mb-2 px-5 two-line-ellipsis"
        }, t)), React.createElement("div", {
            className: "flex w-full z-10"
        }, React.createElement(Button, {
            className: "w-full mr-1",
            onClick: r => {
                s(e), r.preventDefault()
            }
        }, React.createElement("span", {
            className: "text-xs mr-1"
        }, "About"), React.createElement("img", {
            src: questionMark,
            className: "scale-110",
            alt: "question-mark"
        })), React.createElement(Button, {
            className: "w-full ml-1",
            onClick: () => n(a)
        }, React.createElement("span", {
            className: "text-xs whitespace-nowrap"
        }, "Donate & Play"))))
    },
    CreateFarm = () => {
        var Q;
        const [e, A] = react.exports.useState(1), [t, a] = react.exports.useState(), [n, s] = react.exports.useState(0), {
            authService: r
        } = react.exports.useContext(Context$1), [i] = useActor(r), [m, d] = react.exports.useState(!1), E = async h => {
            await new Promise(f => setTimeout(f, 1e3)), r.send("CREATE_FARM", {
                charityAddress: t,
                donation: e,
                captcha: h
            })
        }, u = h => {
            A(roundToOneDecimal(Number(h.target.value)))
        }, w = () => {
            A(h => roundToOneDecimal(h + .1))
        }, B = () => {
            A(e === 1 ? 1 : h => roundToOneDecimal(h - .1))
        }, g = h => {
            a(h), d(!0)
        }, C = h => {
            if (h < 0 && s(0), h > CHARITIES.length - 1) {
                s(CHARITIES.length - 1);
                return
            }
            s(h)
        };
        return ((Q = i.context.token) == null ? void 0 : Q.userAccess.createFarm) ? m ? React.createElement(RecaptchaWrapper, {
            sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
            onChange: E,
            onExpired: () => d(!1),
            className: "w-full m-4 flex items-center justify-center"
        }) : React.createElement("form", {
            className: "mb-4 relative"
        }, React.createElement("div", {
            className: "flex flex-col text-shadow items-center"
        }, React.createElement("h2", {
            className: "text-base mb-2"
        }, "Donate to play."), React.createElement("p", {
            className: "text-xs mb-3 text-center"
        }, "To start a farm, we require a minimum donation of 1 Matic to support the operating costs of Sunflower Land."), React.createElement("p", {
            className: "text-xs mb-3 text-center"
        }, "10% of this donation will go to a charity of your choice.")), React.createElement("div", {
            className: "flex flex-col items-center mb-3"
        }, React.createElement("div", {
            className: "relative"
        }, React.createElement("input", {
            type: "number",
            className: "text-shadow shadow-inner shadow-black bg-brown-200 w-24 p-1 text-center",
            step: "0.1",
            min: 1,
            value: e,
            required: !0,
            onChange: u,
            onBlur: () => {
                e < 1 && A(1)
            }
        }), React.createElement("img", {
            src: upArrow,
            alt: "increment donation value",
            className: "cursor-pointer absolute -right-4 top-0",
            onClick: w
        }), React.createElement("img", {
            src: downArrow,
            alt: "decrement donation value",
            className: "cursor-pointer absolute -right-4 bottom-0",
            onClick: B
        })), React.createElement("span", {
            className: "text-[10px] text-shadow mt-2"
        }, "Minimum of 1 MATIC")), React.createElement("p", {
            className: "text-center mb-3 mt-10"
        }, "Select a charity"), React.createElement(Carousel, {
            activeIndex: n,
            onSelect: C,
            prevIcon: React.createElement("img", {
                src: arrowLeft,
                alt: "left-arrow",
                className: "h-5 cursor-pointer absolute left-2 sm:left-4",
                onClick: () => C(n - 1)
            }),
            nextIcon: React.createElement("img", {
                src: arrowRight,
                alt: "right-arrow",
                className: "h-5 cursor-pointer absolute right-2 sm:right-4",
                onClick: () => C(n + 1)
            })
        }, CHARITIES.map(h => React.createElement(CarouselItem, {
            key: h.url
        }, React.createElement(CharityDetail, l(c({}, h), {
            onDonateAndPlayClick: g
        })))))) : React.createElement(Blocked, null)
    },
    Loading = ({
        text: e
    }) => React.createElement("span", {
        className: "text-shadow loading"
    }, e || "Loading");
var logo = "data:image/png;base64,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",
    clouds = "./assets/clouds.684ed59f.png",
    sunflowers = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdoAAACQBAMAAABdfrciAAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAAY8dN/+s2JlxCPolI93Yi+6og/94fcz45//lOvkovWiADuAAAAAF0Uk5TAEDm2GYAAAOaSURBVHja7Zi/b9NAFMcjlSlbJKaMHlDZQI4YmEC5KSuKEBlBckvXCiJlpAhVGUEgNVOHIIT/St7ZTu7e3Tvb9d0QpO9niNqL38v7vNwPO6MRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwEkyLon7JKl0phK2/7mtHHTqtlT13ztiJwqHqxdsaUBnujthYdh22spBp29b/lkv3+kSfy7Xm3LU87uSbMfl+tOyun75dm2G061keTY9KDlsO23FoJS2YlC0LVVIfC6yrLjQf9nJAtWHbGmMKN5nTwr9Rz3cupJbDj7fQphND04O205bOSidrRiUxpZMistb4ltBctX7dWPF6ttsfy9pTGe6peHlqmydHW0Hn2Thz6YByWHbw1YISmYrByWxpbFfdYW6yI/V+4fG+tW32I51VD1WDVcZgv1qO/gkC2E2DUkO2y7bUghKZysGpbP9nh0Kz55S3U1jd0L192HbukfZeTP4JQv1qz4YWg6+gK03m4Ykh20fWxaU1lZaQOls7a/JNPZKqD5kq1u0ErojrOTjwSCdYUFbaTYNSQ7bPrbssxPajsUFlMrWWRCmsdv+u1TTIu9LGbv9Oh4M4hkWtK013J1iQHLYhmzNI6cblNrW3doT2lq79YYZetUHbesLvYNyzPu1Mx8lVR+y1Rbd67ZXctiKtuyR0zm+k9vyBZTQ9vXEuoPesMay6sO2TYu+qsnUfXjhs2NlZkT/XaqxuOq6l+qVHLaC7YZ5KD8o1nZnfjJzg+JtTfKZUgtzD2I1llW/6rLNzm9ypZQ1A+g//jjDiti61Ydtqwu3Hc+3PZPD1rN1dtvcD4qy3bCfzPiHbWJtWXIqXKn8pbbfq8nENNauvtu2uKyuV/O8aiR9+wRfyexg2PJ9LmjbWPDZVD3hPxqSHLa+Lb+rylnQNNaWeez9oChbFjY6ywl6peqfTyaPTWM/2NW32R5bpDO9uKA357lWpSv4SraWFqu+y5YsnNm0V+rV2YDksPVt3VvXH05QjO2O77bXflCErZO8uaOqCs/pxW6srv7ZKJ8tOm3tfaWybb59vpKn5mCwqu+2JQt3NtGHzgckh61oK/wedwyKtGU3Pm94ULQtS27bkplwP9TDlu0rlW2zHRz6Va/khWm0XX2r7cHiRqcqrg+zSV8xIDlsRVvh18cmaBZn6z2MukExtk7yf4awnWALcUa7AAAAAElFTkSuQmCC";
const releaseVersion = CONFIG.RELEASE_VERSION,
    Splash = () => React.createElement("div", {
        className: "bg-blue-600 w-full h-full flex relative items-center justify-center"
    }, React.createElement("div", {
        className: `absolute 
      z-50 
      top-0 
      left-0
      flex
      w-full
      align-items-center
      justify-center
      text-center
      bg-brown-300
      p-6
      text-xs
      sm:text-sm 
      h-8
      text-white`
    }, "SFL is not tradable until May 9th. Beware of scams"), React.createElement("div", {
        className: "relative mb-96 animate-float z-10"
    }, React.createElement("img", {
        src: pumpkin,
        className: "absolute w-8 -rotate-[20deg] z-10 -top-5 sm:-left-3 sm:-rotate-[30deg] sm:w-12 sm:-top-7"
    }), React.createElement("img", {
        src: logo
    })), React.createElement("div", {
        className: "bg-repeat w-full h-full absolute inset-0",
        style: {
            backgroundImage: `url(${clouds})`
        }
    }), React.createElement("img", {
        src: sunflowers,
        className: "absolute w-full bottom-0"
    }), React.createElement("div", {
        className: "absolute bottom-0 right-0 m-1 pointer-events-auto",
        style: {
            zIndex: 1100
        }
    }, React.createElement(InnerPanel, null, React.createElement("p", {
        className: "text-xs sm:text-sm text-shadow text-white p-1"
    }, React.createElement("a", {
        className: "underline",
        href: "https://github.com/sunflower-land/sunflower-land/releases",
        target: "_blank",
        rel: "noopener noreferrer"
    }, releaseVersion == null ? void 0 : releaseVersion.split("-")[0])))));
var minting = "./assets/minting.8df1c1f8.gif",
    richBegger = "./assets/rich_begger.5ae0fd9b.gif",
    syncingAnimation = "./assets/syncing.2364d1a3.gif";
const IMAGE_LIST = [goblinDonation, humanDeath, humanDeath, minting, richBegger, syncingAnimation, background];

function preloadImage(e) {
    return new Promise((A, t) => {
        const a = new Image;
        a.onload = function() {
            A(a)
        }, a.onerror = a.onabort = function() {
            t(e)
        }, a.src = e
    })
}

function useImagePreloader() {
    const [e, A] = react.exports.useState(!1);
    return react.exports.useEffect(() => {
        let t = !1;
        async function a() {
            if (t) return;
            const n = [];
            for (const s of IMAGE_LIST) n.push(preloadImage(s));
            await Promise.all(n), !t && A(!0)
        }
        return a(), () => {
            t = !0
        }
    }, []), {
        imagesPreloaded: e
    }
}
const StartFarm = () => {
        const {
            authService: e
        } = react.exports.useContext(Context$1), [A, t] = useActor(e), {
            imagesPreloaded: a
        } = useImagePreloader(), n = () => {
            t("START_GAME")
        }, s = async () => {
            t("EXPLORE")
        }, r = A.context.farmId;
        return React.createElement(React.Fragment, null, a ? React.createElement(React.Fragment, null, React.createElement("p", {
            className: "text-shadow text-small mb-2 px-1"
        }, "Farm ID: ", r), React.createElement(Button, {
            onClick: n,
            className: "overflow-hidden mb-2"
        }, "Let's farm!"), React.createElement(Button, {
            onClick: s,
            className: "overflow-hidden"
        }, "Explore a friend's farm")) : React.createElement(Loading, null))
    },
    VisitFarm = () => {
        const {
            authService: e
        } = react.exports.useContext(Context$1), A = t => {
            t.preventDefault();
            const a = parseInt(t.target.farmId.value);
            isNaN(a) || a <= 0 || e.send("VISIT", {
                farmId: a
            })
        };
        return React.createElement(React.Fragment, null, React.createElement("form", {
            onSubmit: A
        }, React.createElement("span", {
            className: "text-shadow text-small mb-2 px-1"
        }, "Enter Farm ID:", " "), React.createElement("input", {
            type: "number",
            name: "farmId",
            className: "text-shadow shadow-inner shadow-black bg-brown-200 w-24 p-2 m-2 text-center"
        }), React.createElement("div", {
            className: "flex"
        }, React.createElement(Button, {
            className: "overflow-hidden mr-1",
            type: "button",
            onClick: () => e.send("LOAD_FARM")
        }, "Back"), React.createElement(Button, {
            className: "overflow-hidden ml-1",
            type: "submit"
        }, "Visit"))))
    },
    Web3Missing = () => {
        const e = () => {
            window.open("https://docs.sunflower-land.com/guides/getting-setup#metamask-setup", "_blank")
        };
        return React.createElement("div", {
            className: "flex flex-col text-center text-shadow items-center p-1"
        }, React.createElement("div", {
            className: "flex mb-3 items-center"
        }, React.createElement("img", {
            src: alert,
            alt: "Warning",
            className: "w-3 mr-3"
        })), React.createElement("p", {
            className: "text-center mb-3"
        }, "Web3 Not Found"), React.createElement("p", {
            className: "text-center mb-4 text-xs"
        }, "Check out this guide to help you get started."), React.createElement(Button, {
            onClick: e,
            className: "overflow-hidden mb-2"
        }, React.createElement("span", null, "Go to setup guide")))
    };
var metamaskIcon = "data:image/png;base64,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";
const WrongChain = () => {
        const [e, A] = react.exports.useState(!1), [t] = useIsMobile(), a = () => {
            window.open("https://docs.sunflower-land.com/guides/getting-setup#polygon-setup", "_blank")
        };
        react.exports.useEffect(() => {
            (async () => {
                const r = await metamask.checkDefaultNetwork();
                A(r)
            })()
        }, []);
        const n = async () => {
            await metamask.initialiseNetwork()
        };
        return React.createElement("div", {
            className: "flex flex-col text-center text-shadow items-center p-1"
        }, React.createElement("div", {
            className: "flex mb-3 items-center"
        }, React.createElement("img", {
            src: alert,
            alt: "Warning",
            className: "w-3 mr-3"
        })), React.createElement("p", {
            className: "text-center mb-3"
        }, "You're not connected to Polygon"), React.createElement("p", {
            className: "text-center mb-4 text-xs"
        }, "Check out this guide to help you get connected."), React.createElement(Button, {
            onClick: a,
            className: "overflow-hidden mb-2"
        }, React.createElement("span", null, "Go to guide")), (!e || !t) && React.createElement(Button, {
            onClick: n,
            className: "overflow-hidden mb-2"
        }, React.createElement("img", {
            src: metamaskIcon,
            alt: "Metamask Icon",
            className: "mr-2"
        }), React.createElement("span", null, "Add or Switch Network")))
    },
    Chickens = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [{
            context: {
                state: A
            }
        }] = useActor(e);
        return React.createElement(React.Fragment, null, A.inventory["Chicken Coop"] && React.createElement("img", {
            src: coop,
            style: {
                width: `${GRID_WIDTH_PX*2}px`,
                right: `${GRID_WIDTH_PX*1.1}px`,
                top: `${GRID_WIDTH_PX*0}px`
            },
            id: Section["Chicken Coop"],
            className: "absolute"
        }))
    };
var barn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABXCAMAAAC3HXLTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABFUExURQAAAL5KL3M+Of///+rUquSmcsKFaaImM2IgKuQ7RPZ1erhvUCYrRLtcP8BnTNF4UJlENNd2Qz6JSEqiaodbR5BZQgAAAD+OkBgAAAAXdFJOU/////////////////////////////8A5kDmXgAAAAlwSFlzAAAOwwAADsMBx2+oZAAABK1JREFUWEetmIt22zgMRGO1ru16X97d5v8/dTEDgAD4kORt55xQGIm6gYZ04qOPzxO6dLLTuzoB3rYvX4u+bJtd2tEheNuu1x58vR6jD8DAXq/fOuHcEXoXPMdCx+gdcGBvnc6gl+DA3u+PTvf7MXoBzljoe5KeOUJPwRX7uN0fxqQe95v0fISegDuscHuwkA/RA7gPQSL1jh92AJfgPXQHHkIQGloW3h37gQXB4ne7LuBJCAoeMgZ4P5AEnoYg4HnG6HgvkAYeu1Umy7FjueB0zB/RBu66JVPBNiYZsoF1Y/dogmdLhgENsxw7Bu3m4Nkyfgi1YInjIDS5wcuQnATSrrPkkNHb5wf+iucl080gyRkjZSzN8YA2cQEGM81Disb/AoIdKwi5W0cDq5/uYwczD46OVjAqxZKQwc1rq6bYx2ISGAdHf1MwLMCKJI5xNN+BgVAcSkW6hwjG4mm3xrCx+EnHQWNVPBcPW0MZPqTSPQN3KYiMGIrX7ZbAIGRw84uME634DPaHJtK87QotQ/7UvE6aeuDVB1ig1lvL2LZbzlju5sEQdJjZkPx1UgVY7jFwGw2sntv3eB8ruMsYPyBkcPPaqmlvH49gD8Hx1XdgRQCH8iBjZ7Ds/dixXHAaq+IDTIY362XyDNxliAayIZUDGA1mcPNjxwKSQwGHz2BhMFMtez9mrB1GWXyABYLWwGCm2YOkYGmGByDYILpTWPUBlnsM1EavSOL27fexg7wKP4D55AkMT/CYsdyOQwaHz2A+viKJb54fkzFjw6F0ZPgAC8SZxPV+0nHQWBUfYDJ8SKV7JuJSEBkxFD+AQcjg5lcZF3D4DBZGev4+87MZc9MdZAzbvILlbh4aEjivMj3AZPqgY1Qynt3HNgxgEByn58yvMpbRaOonYGHIHCKJk8F/BUpjUumpWb6ZsXuWY8dEOE2G9NvO7WMb5WyTIRpIe4/yIGPzLO01RRPvBrmAw2ewP7Q2GBlLOXtfoRzt/s2MYVHha/nsfYWC//c+jm/7Wfqt3cEehYMPMsbPHAspuoLlMAELU+ZY2+oDK19LiwKtNMXJcCbjjLXN0JTRlu7ZjCsWdVZFexQO3sl4HwtVtIIFOgF7CAKu2OdCfSDa9yRj7bUu2eWC40oVrUnrvg6wQPdD2H5r4gzVLJA+im7f9tnOwT16Bh5CQB16GlX0tFOmMZAu44r93ZaoyagiOxHquy4ZV+wfKIoy2E4lVXTquGL/hOn0tA+zqItCVdEKlrmwe1i5UaHQ9APTo8v7ijX2DDijy/sKYIcle1OOTu8rgB2X7H052t5XAPvX8hHf0UVIROv7CmS7zu4dXWQjAG3vK7AtJuCL7dylJrcQpdutgW0FQsdgmxiaghl61s3uX4ov64umYBmqflUUiJ1XTfJf0wALyQSbSsEtwC/5MPLfsEg+6K8jcD9/AX4+ZaJ8HFWvc+CXTf8qt76Wi3d5bZeX6bK9jqPo5i8X72fBy4xlYtIpcNI+WCrTObBNFq3BzDit8rmObTrnDxn//Y8KHdgiyyoL+N9dsWObzvmGAVLBLplYFsMAS/XzDUPtgu30UqfBPzrZ6aVsWpOdFn1+/gdnxC8MMokAAgAAAABJRU5ErkJggg==",
    disc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATBAMAAABvvEDBAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAAJitEWmmIi5u0////wMvcOcop7gAAAAF0Uk5TAEDm2GYAAABmSURBVAjXjc7RDYAwCATQqxOUdIGG6AANcQFDF9B2/1UE7ADy9XIJcADAzIhhVQ1uw9Sr6dA5p94eddOwcPPIwoq9h8b1W2XtNpR1ryGd8ePJSBJ/JQNFTNKsQRKf7LXIQF9VIscLpnkjRCFtFEoAAAAASUVORK5CYII=";
const Action = ({
        text: e,
        icon: A,
        onClick: t,
        className: a
    }) => React.createElement("div", {
        onClick: t,
        className: classNames("cursor-pointer", a),
        "data-html2canvas-ignore": "false"
    }, React.createElement("div", {
        className: "absolute w-10 h-10 -left-2 -top-1 flex items-center justify-center"
    }, React.createElement("img", {
        src: disc,
        className: "w-full absolute inset-0"
    }), React.createElement("img", {
        src: A,
        className: "w-2/3 z-10"
    })), React.createElement(InnerPanel, {
        className: "text-white text-shadow text-xs w-fit"
    }, React.createElement("span", {
        className: "pl-7"
    }, e))),
    ToastContext = react.exports.createContext({
        removeToast: console.log,
        setToast: console.log,
        toastList: []
    }),
    MAX_TOAST = 5,
    ToastProvider = ({
        children: e
    }) => {
        const [A, t] = react.exports.useState([]), a = s => {
            A.length > 4 && t(A.slice(0, MAX_TOAST));
            const r = Date.now();
            window.setTimeout(() => {
                n(r)
            }, s.timeout || 3e3);
            const i = c({
                id: r
            }, s);
            t(m => [i, ...m])
        }, n = s => {
            t(r => [...r.filter(({
                id: i
            }) => i !== s)])
        };
        return React.createElement(ToastContext.Provider, {
            value: {
                removeToast: n,
                setToast: a,
                toastList: A
            }
        }, e)
    },
    Stock = ({
        item: e
    }) => {
        const {
            gameService: A
        } = react.exports.useContext(Context), [{
            context: {
                state: t
            }
        }] = useActor(A), a = t.stock[e.name] || new Decimal(0);
        return React.createElement("span", {
            className: "w-32 -mt-4 sm:mr-auto bg-blue-600 text-shadow border text-xxs p-1 rounded-md"
        }, `${a} in stock`)
    },
    CraftingItems$1 = ({
        items: e,
        onClose: A,
        isBulk: t = !1
    }) => {
        const [a, n] = react.exports.useState(Object.values(e)[0]), {
            setToast: s
        } = react.exports.useContext(ToastContext), {
            gameService: r,
            shortcutItem: i
        } = react.exports.useContext(Context), [m, d] = react.exports.useState(!1), [{
            context: {
                state: E
            }
        }] = useActor(r), u = E.inventory, w = (y = 1) => a.ingredients.some(I => I.amount.mul(y).greaterThan(u[I.item] || 0)), B = (y = 1) => E.balance.lessThan(a.price.mul(y)), g = (y = 1) => {
            r.send("item.crafted", {
                item: a.name,
                amount: y
            }), s({
                content: "SFL -$" + a.price.mul(y)
            }), a.ingredients.map(I => {
                s({
                    content: I.item + " -" + I.amount.mul(y)
                })
            }), i(a.name)
        }, C = async y => {
            await new Promise(I => setTimeout(I, 1e3)), r.send("SYNC", {
                captcha: y
            }), A()
        }, Q = () => {
            d(!0)
        };
        if (m) return React.createElement(RecaptchaWrapper, {
            sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
            onChange: C,
            onExpired: () => d(!1),
            className: "w-full m-4 flex items-center justify-center"
        });
        const h = a.supply === 0,
            f = () => h ? null : a.disabled ? React.createElement("span", {
                className: "text-xs mt-1 text-shadow"
            }, "Locked") : (S == null ? void 0 : S.equals(0)) ? React.createElement("div", null, React.createElement("p", {
                className: "text-xxs no-wrap text-center my-1 underline"
            }, "Sold out"), React.createElement("p", {
                className: "text-xxs text-center"
            }, "Sync your farm to the Blockchain to restock"), React.createElement(Button, {
                className: "text-xs mt-1",
                onClick: Q
            }, "Sync")) : React.createElement(React.Fragment, null, React.createElement(Button, {
                disabled: B() || w() || (S == null ? void 0 : S.lessThan(1)),
                className: "text-xs mt-1",
                onClick: () => g()
            }, "Craft ", t && "1"), t && React.createElement(Button, {
                disabled: B(10) || w(10) || (S == null ? void 0 : S.lessThan(10)),
                className: "text-xs mt-1 whitespace-nowrap",
                onClick: () => g(10)
            }, "Craft 10")),
            S = E.stock[a.name] || new Decimal(0);
        return React.createElement("div", {
            className: "flex"
        }, React.createElement("div", {
            className: "w-3/5 flex flex-wrap h-fit"
        }, Object.values(e).map(y => React.createElement(Box, {
            isSelected: a.name === y.name,
            key: y.name,
            onClick: () => n(y),
            image: ITEM_DETAILS[y.name].image,
            count: u[y.name]
        }))), React.createElement(OuterPanel, {
            className: "flex-1 w-1/3"
        }, React.createElement("div", {
            className: "flex flex-col justify-center items-center p-2 relative"
        }, React.createElement(Stock, {
            item: a
        }), React.createElement("span", {
            className: "text-shadow text-center"
        }, a.name), React.createElement("img", {
            src: ITEM_DETAILS[a.name].image,
            className: "h-16 img-highlight mt-1",
            alt: a.name
        }), React.createElement("span", {
            className: "text-shadow text-center mt-2 sm:text-sm"
        }, a.description), React.createElement("div", {
            className: "border-t border-white w-full mt-2 pt-1"
        }, a.ingredients.map((y, I) => {
            const D = ITEM_DETAILS[y.item],
                F = new Decimal(u[y.item] || 0).lessThan(y.amount);
            return React.createElement("div", {
                className: "flex justify-center items-end",
                key: I
            }, React.createElement("img", {
                src: D.image,
                className: "h-5 me-2"
            }), React.createElement("span", {
                className: classNames("text-xs text-shadow text-center mt-2 ", {
                    "text-red-500": F
                })
            }, y.amount.toNumber()))
        }), React.createElement("div", {
            className: "flex justify-center items-end"
        }, React.createElement("img", {
            src: token,
            className: "h-5 mr-1"
        }), React.createElement("span", {
            className: classNames("text-xs text-shadow text-center mt-2 ", {
                "text-red-500": B()
            })
        }, `$${a.price.toNumber()}`))), f())))
    };

function mintCooldown({
    item: e,
    itemsMintedAt: A
}) {
    const a = (A || {})[e];
    if (!a) return 0;
    const n = a + 7 * 24 * 60 * 60 * 1e3 - Date.now();
    return n < 0 ? 0 : n / 1e3
}
const TAB_CONTENT_HEIGHT = 360,
    Items = ({
        items: e,
        selected: A,
        inventory: t,
        onClick: a
    }) => {
        const {
            ref: n,
            showScrollbar: s
        } = useShowScrollbar(TAB_CONTENT_HEIGHT), r = Object.values(e);
        return React.createElement("div", {
            ref: n,
            style: {
                maxHeight: TAB_CONTENT_HEIGHT,
                minHeight: TAB_CONTENT_HEIGHT * 2 / 3
            },
            className: classNames("overflow-y-auto w-3/5 pt-1 mr-2", {
                scrollable: s
            })
        }, React.createElement("div", {
            className: "flex flex-wrap h-fit"
        }, r.map(i => React.createElement(Box, {
            isSelected: A === i.name,
            key: i.name,
            onClick: () => a(i),
            image: ITEM_DETAILS[i.name].image,
            count: t[i.name]
        }))))
    },
    Rare = ({
        onClose: e,
        items: A,
        hasAccess: t,
        canCraft: a = !0
    }) => {
        var F;
        const [n, s] = react.exports.useState(Object.values(A)[0]), {
            gameService: r
        } = react.exports.useContext(Context), [{
            context: {
                state: i,
                itemsMintedAt: m
            }
        }] = useActor(r), [d, E] = react.exports.useState(!0), [u, w] = react.exports.useState(), [B, g] = react.exports.useState(!1);
        console.log({
            itemsMintedAt: m
        }), react.exports.useEffect(() => {
            (async () => {
                const N = await metamask.getInventory().totalSupply();
                w(N), E(!1)
            })()
        }, []);
        const C = i.inventory,
            Q = (T = 1) => n.ingredients.some(N => N.amount.mul(T).greaterThan(C[N.item] || 0)),
            h = (T = 1) => i.balance.lessThan(n.price.mul(T)),
            f = () => {
                g(!0)
            },
            S = async T => {
                await new Promise(N => setTimeout(N, 1e3)), r.send("MINT", {
                    item: n.name,
                    captcha: T
                }), e()
            };
        if (d) return React.createElement("div", {
            className: "h-60"
        }, React.createElement("span", {
            className: "loading"
        }, "Loading..."));
        let y = 0;
        u && n.supply && (y = n.supply - ((F = u[n.name]) == null ? void 0 : F.toNumber()));
        const I = y <= 0,
            D = () => {
                if (I) return null;
                if (!t && n.disabled) return React.createElement("span", {
                    className: "text-xs text-center mt-1"
                }, "Coming soon");
                const T = mintCooldown({
                    item: n.name,
                    itemsMintedAt: m
                });
                if (T > 0) return React.createElement("div", {
                    className: "text-center"
                }, React.createElement("a", {
                    href: "https://docs.sunflower-land.com/crafting-guide/farming-and-gathering#crafting-limits",
                    className: "underline text-xs hover:text-blue-500 mt-1 block",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Already minted"), React.createElement("span", {
                    className: "text-xs text-center"
                }, "Available in ", secondsToString(T)));
                if (n.requires && !i.inventory[n.requires]) return React.createElement("div", {
                    className: "flex items-center"
                }, React.createElement("img", {
                    src: ITEM_DETAILS[n.requires].image,
                    className: "w-6 h-6 mr-1"
                }), React.createElement("span", {
                    className: "text-xs text-shadow text-center mt-2"
                }, `${n.requires}s only`));
                if (!!a) return React.createElement(React.Fragment, null, React.createElement(Button, {
                    disabled: h() || Q(),
                    className: "text-xs mt-1",
                    onClick: f
                }, "Craft"))
            };
        return B ? React.createElement(React.Fragment, null, React.createElement(RecaptchaWrapper, {
            sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
            onChange: S,
            onExpired: () => g(!1),
            className: "w-full m-4 flex items-center justify-center"
        }), React.createElement("p", {
            className: "text-xxs p-1 m-1 text-center"
        }, "Crafting an item will sync your farm to the blockchain.")) : React.createElement("div", {
            className: "flex"
        }, React.createElement(Items, {
            items: A,
            selected: n.name,
            inventory: C,
            onClick: s
        }), React.createElement(OuterPanel, {
            className: "flex-1 min-w-[42%] flex flex-col justify-between items-center"
        }, React.createElement("div", {
            className: "flex flex-col justify-center items-center p-2 relative w-full"
        }, I && React.createElement("span", {
            className: "bg-blue-600 text-shadow border text-xxs absolute left-0 -top-4 p-1 rounded-md"
        }, "Sold out"), !!n.supply && y > 0 && React.createElement("span", {
            className: "bg-blue-600 text-shadow border  text-xxs absolute left-0 -top-4 p-1 rounded-md"
        }, `${y} left`), React.createElement("span", {
            className: "text-shadow text-center"
        }, n.name), React.createElement("img", {
            src: ITEM_DETAILS[n.name].image,
            className: "h-16 img-highlight mt-1",
            alt: n.name
        }), React.createElement("span", {
            className: "text-shadow text-center mt-2 sm:text-sm"
        }, n.description), a && React.createElement("div", {
            className: "border-t border-white w-full mt-2 pt-1"
        }, n.ingredients.map((T, N) => {
            const U = ITEM_DETAILS[T.item],
                v = new Decimal(C[T.item] || 0).lessThan(T.amount);
            return React.createElement("div", {
                className: "flex justify-center items-end",
                key: N
            }, React.createElement("img", {
                src: U.image,
                className: "h-5 me-2"
            }), React.createElement("span", {
                className: classNames("text-xs text-shadow text-center mt-2 ", {
                    "text-red-500": v
                })
            }, T.amount.toNumber()))
        }), React.createElement("div", {
            className: "flex justify-center items-end"
        }, React.createElement("img", {
            src: token,
            className: "h-5 mr-1"
        }), React.createElement("span", {
            className: classNames("text-xs text-shadow text-center mt-2 ", {
                "text-red-500": h()
            })
        }, `${n.price.toNumber()}`))), D()), React.createElement("a", {
            href: `https://opensea.io/assets/matic/0x22d5f9b75c524fec1d6619787e582644cd4d7422/${KNOWN_IDS[n.name]}`,
            className: "underline text-xs hover:text-blue-500 mt-1",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Open Sea")))
    },
    BarnSale = ({
        onClose: e
    }) => {
        var s;
        const [A, t] = react.exports.useState("animals"), {
            authService: a
        } = react.exports.useContext(Context$1), [n] = useActor(a);
        return React.createElement(Panel, {
            className: "pt-5 relative"
        }, React.createElement("div", {
            className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement(Tab, {
            isActive: A === "animals",
            onClick: () => t("animals")
        }, React.createElement("img", {
            src: chicken,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Animals")), React.createElement(Tab, {
            isActive: A === "rare",
            onClick: () => t("rare")
        }, React.createElement("img", {
            src: coop,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Rare"))), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1",
            onClick: e
        })), React.createElement("div", {
            style: {
                minHeight: "200px"
            }
        }, A === "animals" && React.createElement(CraftingItems$1, {
            items: ANIMALS,
            onClose: e
        }), A === "rare" && React.createElement(Rare, {
            items: BARN_ITEMS,
            onClose: e,
            hasAccess: !!((s = n.context.token) == null ? void 0 : s.userAccess.mintCollectible)
        })))
    },
    Barn = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = React.useState(!1), n = !A.matches("readonly"), s = () => {
            a(!0), barnAudio.play()
        };
        return React.createElement("div", {
            className: "absolute",
            style: {
                width: `${GRID_WIDTH_PX*5.5}px`,
                left: `${-GRID_WIDTH_PX*2.25}px`,
                top: `${-GRID_WIDTH_PX*5}px`
            }
        }, React.createElement("div", {
            className: classNames({
                "cursor-pointer": n,
                "hover:img-highlight": n
            })
        }, React.createElement("img", {
            src: barn,
            alt: "barn",
            onClick: s,
            className: "w-full"
        }), n && React.createElement(Action, {
            className: "absolute bottom-12 left-16",
            text: "Barn",
            icon: chicken,
            onClick: s
        })), React.createElement(Modal, {
            centered: !0,
            show: t,
            onHide: () => a(!1)
        }, React.createElement(BarnSale, {
            onClose: () => a(!1)
        })))
    },
    Animals = () => React.createElement("div", {
        style: {
            height: `${GRID_WIDTH_PX*6}px`,
            width: `${GRID_WIDTH_PX*20}px`,
            left: `calc(50% -  ${GRID_WIDTH_PX*8}px)`,
            top: `calc(50% -  ${GRID_WIDTH_PX*32}px)`
        },
        className: "absolute"
    }, React.createElement("div", {
        className: "h-full w-full relative"
    }, React.createElement("span", {
        id: Section.Animals,
        className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    }), React.createElement(Barn, null), React.createElement(Chickens, null)));

function useInterval(e, A) {
    const t = react.exports.useRef(e);
    react.exports.useLayoutEffect(() => {
        t.current = e
    }, [e]), react.exports.useEffect(() => {
        if (!A && A !== 0) return;
        const a = setInterval(t.current, A);
        return () => clearInterval(a)
    }, [A])
}
const ToastManager = () => {
    const {
        toastList: e
    } = react.exports.useContext(ToastContext), [A, t] = react.exports.useState(!1);
    return react.exports.useEffect(() => {
        e.length >= 1 ? t(!0) : t(!1)
    }, [e]), React.createElement("div", null, A && React.createElement("div", {
        className: "text-shadow p-0.5 text-white shadow-lg flex flex-col items-end mr-2 sm:block fixed top-20 left-2 z-[99999]"
    }, React.createElement(Panel, null, e.map(({
        content: a,
        id: n,
        icon: s
    }) => React.createElement("div", {
        className: "flex items-center relative",
        key: n
    }, s && React.createElement("img", {
        className: "h-6 mr-4",
        src: s,
        alt: "toast-icon"
    }), React.createElement("span", null, a))))))
};
var goblinKing = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAABjCgsuAAAABGdBTUEAALGPC/xhBQAAAKJQTFRFAAAA+/fH/Olx/8URQBkNywobPxkNPhkPuEcqkVkPgDAXRhoLw5QoZS8XYy8h/OdQ/sUW/udz46lF2qg1HjQflHc6/9Uk/880WiwS+3B39703URsDT2dHPygyW1sdQRYFWmkY1FxBViEPdD85gJw463xe/7sb//HX49OyGBMkx7SWzFU3XCIQMEcrFCwSNRMIPolIozQYqL9nQU4GFxQka3sjbQUddwAAAAF0Uk5TAEDm2GYAAAEySURBVDjL7Y/ZdoMgFEXpPDdt0oyaSeNQuYAo/P+v9YIkWqUPeelTzorEtT17cS8hl1zybxFntsWVOMMRn2J0PcLT+1WZ9IQPsVqu8PT2ta607hs3yzs0/upXfUNI8XB/i+dgGPyZPhr23UEhE0qB0gSN7rSqOjTz6GaqQ6UaiH0ADWAMC09GXdf6GHxXDkoKOyQ7oNLBXyt8a/u0H0zfQmMMlq6dULdI7sFB2A8F5XYwF6Rz209AVVNk00p5DNVsYUZN3xYzI8gOlJ4r1rju2lwwW7ynDXtR6ggHKbI4iqI4KwjZzF2f8GcehuEr475+vo3jeJtnxeYEOZOPfDxhXx7DCHmOT9b2UeB7yZhXIDoqTCLdYVxzCeOnCf4PhbJUQRCosuwyzoCZ8JL4DBsf69AfuCtEq15OH5cAAAAASUVORK5CYII=",
    sign = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAA2CAYAAAC7i6XpAAACLElEQVR4nO2aMWvbQBTH/zKqhiZQDMagZm4mEfBWheKhc9vP4VmDF89eMnjuByj9Ak1GdzAl9mw8NXNqKIW2kGQwweogTpzts+6sXMHy/X+b5Yd478c73kk6gBBCCCGEEEJcwTMJStpx+r8T2XcGo7HWla8LSNpxmnRiOxlVm1QntPBPWWRw9tpiXtViMZ0AAAYfx4Udqu1MIBM56/YtpVY9ooteLrQIrUwhMowaVhKrIrNuH9FFD8C4MG6lZVWD5t3xw4rI+eyXpRT3n/W6L++eb8TIyz7vzG2D5vun4coNXerQ9Xq3DOJ8MNUAs4ntmkgg60zdSkw6cb6iff3EHiquuYnKz2I6ER2b+nKgamK71o3bCKOG0o886X1AP7FdXOICsdTDqKF0IE96L2nHqW5iuypSpsiJmPQb+0yXu7CIdScqTzVdAFGjmvS1LbGkBJRpEcq0CGVahDItQpkWoUyLUKZFKNMiKzJN3t+RDNXT4sazOYWaoXrs9oDsTfv6myNihnhjNBiNvfxjkBBKdkOIBAy+TpJi5K+TRmeN3p7H6atggePmEQDg7uc9bhYBvl7rz99UjafUanSio+l7OA2A+oss/Pcf4O/y4DwCAFo+8LJkrUYyT5Ci5T8irGc3nd8+4geCkunuP2Vr5abdIsYyr6SjIVeKYyKHRNlajWR+Xj77AGR7KrGhF9cOjafUajxFwjft9/Lv+bfRlx1yrBQu1UoIIYQQQohT/APID+l1j6kHzAAAAABJRU5ErkJggg==",
    easterBunny = "./assets/easter_bunny_eggs.14a07275.gif";
const Flags = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [{
            context: {
                state: A
            }
        }] = useActor(e), t = Object.values(FLAGS).filter(a => a.name in A.inventory);
        return React.createElement(React.Fragment, null, React.createElement("div", {
            style: {
                width: `${GRID_WIDTH_PX*3}px`,
                right: `${GRID_WIDTH_PX*43.8}px`,
                top: `${GRID_WIDTH_PX*35.5}px`
            },
            className: "flex absolute justify-center"
        }, t.map((a, n) => React.createElement("img", {
            key: n,
            style: {
                width: `${GRID_WIDTH_PX*1.2}px`
            },
            id: Section.Flags,
            src: ITEM_DETAILS[a.name].image,
            alt: a.name
        }))))
    },
    Scarecrows = ({
        inventory: e
    }) => e.Kuebiko ? React.createElement("img", {
        style: {
            width: `${GRID_WIDTH_PX*2}px`
        },
        src: kuebiko,
        alt: "Scarecrow"
    }) : e.Scarecrow ? React.createElement("img", {
        style: {
            width: `${GRID_WIDTH_PX*1.3}px`
        },
        src: scarecrow,
        alt: "Scarecrow"
    }) : e.Nancy ? React.createElement("img", {
        style: {
            width: `${GRID_WIDTH_PX*1.2}px`
        },
        src: nancy,
        alt: "Scarecrow"
    }) : null,
    Beavers = ({
        inventory: e
    }) => e["Foreman Beaver"] ? React.createElement("img", {
        style: {
            width: `${GRID_WIDTH_PX*1.2}px`
        },
        src: foreman,
        alt: "Foreman Beaver"
    }) : e["Apprentice Beaver"] ? React.createElement("img", {
        style: {
            width: `${GRID_WIDTH_PX*1.2}px`
        },
        src: apprentice,
        alt: "Apprentice Beaver"
    }) : e["Woody the Beaver"] ? React.createElement("img", {
        style: {
            width: `${GRID_WIDTH_PX*1.2}px`
        },
        src: beaver,
        alt: "Woddy the Beaver"
    }) : null,
    NyonStatue = () => {
        const [e, A] = react.exports.useState(!1);
        return React.createElement(React.Fragment, null, React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*1.8}px`
            },
            className: "hover:img-highlight cursor-pointer",
            src: nyonStatue,
            alt: "Nyon Statue",
            onClick: () => A(!0)
        }), React.createElement(Modal, {
            centered: !0,
            show: e,
            onHide: () => A(!1)
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: () => A(!1)
        }), React.createElement("div", {
            className: "flex flex-col items-cetner justify-content-between"
        }, React.createElement("div", {
            className: "flex justify-content m-2"
        }, React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*1.5}px`
            },
            className: "img-highlight mr-2",
            src: nyonStatue,
            alt: "Nyon Statue"
        }), React.createElement("div", {
            className: "ml-2 mt-3"
        }, React.createElement("span", {
            className: "text-shadow text-xs block"
        }, "In memory of"), React.createElement("span", {
            className: "text-shadow block"
        }, "Nyon Lann"))), React.createElement("div", {
            className: "flex-1 ml-2 mr-2"
        }, React.createElement("span", {
            className: "text-shadow block mb-2 text-xs"
        }, "The legendary knight responsible for clearing the goblins from the mines. Shortly after his victory he died by poisoning from a Goblin conspirator. The Sunflower Citizens erected this statue with his armor to commemorate his conquests."))))))
    },
    Decorations = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [{
            context: {
                state: A
            }
        }] = useActor(e);
        return React.createElement(React.Fragment, null, React.createElement(Flags, null), A.inventory["Sunflower Rock"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*4}px`,
                right: `${GRID_WIDTH_PX*11.5}px`,
                top: `${GRID_WIDTH_PX*22}px`
            },
            id: Section["Sunflower Rock"],
            className: "absolute",
            src: sunflowerRock,
            alt: "Sunflower rock"
        }), A.inventory["Christmas Tree"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*2}px`,
                right: `${GRID_WIDTH_PX*16}px`,
                top: `${GRID_WIDTH_PX*1}px`
            },
            id: Section["Christmas Tree"],
            className: "absolute",
            src: christmasTree,
            alt: "Christmas Tree"
        }), A.inventory["Sunflower Statue"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*2}px`,
                left: `${GRID_WIDTH_PX*45.5}px`,
                top: `${GRID_WIDTH_PX*32}px`
            },
            id: Section["Sunflower Statue"],
            className: "absolute",
            src: sunflowerStatue,
            alt: "Sunflower Statue"
        }), A.inventory["Potato Statue"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*1.5}px`,
                left: `${GRID_WIDTH_PX*52}px`,
                top: `${GRID_WIDTH_PX*39}px`
            },
            id: Section["Potato Statue"],
            className: "absolute",
            src: potatoStatue,
            alt: "Potato Statue"
        }), A.inventory["Sunflower Tombstone"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*1}px`,
                left: `${GRID_WIDTH_PX*30}px`,
                top: `${GRID_WIDTH_PX*36.8}px`
            },
            id: Section["Sunflower Tombstone"],
            className: "absolute",
            src: sunflowerTombstone,
            alt: "Sunflower tombstone"
        }), A.inventory["Farm Cat"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*1.5}px`,
                right: `${GRID_WIDTH_PX*39.55}px`,
                top: `${GRID_WIDTH_PX*28.2}px`
            },
            id: Section["Farm Cat"],
            className: "absolute z-10",
            src: cat,
            alt: "Farm cat"
        }), A.inventory["Farm Dog"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*1}px`,
                right: `${GRID_WIDTH_PX*37.8}px`,
                top: `${GRID_WIDTH_PX*32}px`
            },
            id: Section["Farm Dog"],
            className: "absolute",
            src: dog,
            alt: "Farm dog"
        }), A.inventory.Gnome && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*1}px`,
                right: "481px",
                top: "441px"
            },
            id: Section.Gnome,
            className: "absolute",
            src: gnome$1,
            alt: "Gnome"
        }), React.createElement("div", {
            className: "flex justify-center absolute",
            style: {
                width: `${GRID_WIDTH_PX*3}px`,
                left: `${GRID_WIDTH_PX*38}px`,
                top: `${GRID_WIDTH_PX*34}px`
            },
            id: Section.Scarecrow
        }, React.createElement(Scarecrows, {
            inventory: A.inventory
        })), A.inventory["Nyon Statue"] && React.createElement("div", {
            className: "flex justify-center absolute",
            style: {
                width: `${GRID_WIDTH_PX*3}px`,
                left: `${GRID_WIDTH_PX*42.5}px`,
                top: `${GRID_WIDTH_PX*41}px`
            },
            id: Section["Nyon Statue"]
        }, React.createElement(NyonStatue, null)), A.inventory.Fountain && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*2.5}px`,
                left: `${GRID_WIDTH_PX*35}px`,
                top: `${GRID_WIDTH_PX*28}px`
            },
            id: Section.Fountain,
            onClick: () => fountainAudio.play(),
            className: "absolute hover:img-highlight cursor-pointer",
            src: fountain,
            alt: "Fountain"
        }), A.inventory["Goblin Crown"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*3}px`,
                right: `${GRID_WIDTH_PX*27.5}px`,
                bottom: `${GRID_WIDTH_PX*5.5}px`
            },
            id: Section["Goblin Crown"],
            className: "absolute",
            src: goblinKing,
            alt: "GoblinKing"
        }), React.createElement("div", {
            className: "flex justify-center absolute",
            style: {
                width: `${GRID_WIDTH_PX*2}px`,
                right: `${GRID_WIDTH_PX*24}px`,
                top: `${GRID_WIDTH_PX*49}px`
            },
            id: Section.Beaver
        }, React.createElement(Beavers, {
            inventory: A.inventory
        })), A.inventory["Homeless Tent"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*2}px`,
                right: `${GRID_WIDTH_PX*34.5}px`,
                top: `${GRID_WIDTH_PX*31}px`
            },
            id: Section.Tent,
            className: "absolute",
            src: homelessTent,
            alt: "Homeless Tent"
        }), React.createElement("div", {
            className: "flex justify-center absolute",
            style: {
                width: `${GRID_WIDTH_PX*3.5}px`,
                left: `${GRID_WIDTH_PX*48.8}px`,
                top: `${GRID_WIDTH_PX*32.5}px`
            }
        }, React.createElement("img", {
            src: sign,
            className: "w-full"
        }), React.createElement("div", {
            className: "flex flex-col absolute",
            style: {
                width: "130px",
                top: `${GRID_WIDTH_PX*.65}px`,
                left: `${GRID_WIDTH_PX*.2}px`,
                color: "#ead4aa",
                textAlign: "center",
                textShadow: "1px 1px #723e39"
            }
        }, React.createElement("p", {
            style: {
                fontSize: "8px"
            }
        }, "Farm"), A.id)), A.inventory["Farmer Bath"] && React.createElement("div", {
            className: "flex justify-center absolute",
            style: {
                width: `${GRID_WIDTH_PX*2}px`,
                left: `${GRID_WIDTH_PX*48.8}px`,
                top: `${GRID_WIDTH_PX*39}px`
            },
            id: Section.Bath
        }, React.createElement("img", {
            src: farmerBath,
            className: "w-full"
        }), React.createElement("img", {
            src: swimmer,
            style: {
                position: "absolute",
                width: `${GRID_WIDTH_PX*.85}px`,
                top: `${GRID_WIDTH_PX*.5}px`,
                left: `${GRID_WIDTH_PX*.5}px`
            }
        })), A.inventory["Easter Bunny"] && React.createElement("img", {
            style: {
                width: `${GRID_WIDTH_PX*2.5}px`,
                right: `${GRID_WIDTH_PX*49}px`,
                top: `${GRID_WIDTH_PX*24}px`
            },
            id: Section["Easter Bunny"],
            className: "absolute",
            src: easterBunny,
            alt: "Easter Bunny"
        }))
    },
    Minting = () => React.createElement("div", {
        className: "flex flex-col items-center p-2"
    }, React.createElement("span", {
        className: "text-shadow text-center"
    }, "Minting"), React.createElement("img", {
        src: minting,
        className: "w-1/2 mt-2 mb-3 ml-8"
    }), React.createElement("span", {
        className: "text-shadow text-xs text-center"
    }, "Please be patient while our minions mint something special for you.")),
    Success = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context);
        return React.createElement("div", {
            className: "flex flex-col items-center"
        }, React.createElement("img", {
            src: secure,
            className: "w-16 my-4"
        }), React.createElement("span", {
            className: "text-center mb-2"
        }, "Woohoo! Your items are secured on the Blockchain!"), React.createElement(Button, {
            onClick: () => e.send("REFRESH")
        }, "Continue"))
    },
    Syncing = () => React.createElement("div", {
        className: "flex flex-col items-center p-2"
    }, React.createElement("span", {
        className: "text-shadow text-center"
    }, "Syncing"), React.createElement("img", {
        src: syncingAnimation,
        className: "h-20 mt-2 mb-3 -ml-8"
    }), React.createElement("span", {
        className: "text-shadow text-xs text-center"
    }, "Please bear with us while we sync all of your data on chain."), React.createElement("span", {
        className: "text-shadow text-xs text-center underline mt-2"
    }, "Do not refresh your browser")),
    Withdrawing = () => React.createElement("span", {
        className: "loading"
    }, "Withdrawing"),
    Blacklisted = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), A = () => {
            e.send("CONTINUE")
        };
        return React.createElement("div", {
            className: "flex flex-col items-center p-2"
        }, React.createElement("span", {
            className: "text-shadow text-center"
        }, "Goblins detected!"), React.createElement("img", {
            src: humanDeath$1,
            className: "w-1/4 mt-2"
        }), React.createElement("span", {
            className: "text-shadow text-xs text-center mt-2 mb-2"
        }, "The anti-bot detection system is relatively new and has picked up some strange behaviour. Some actions may be temporarily restricted."), React.createElement("a", {
            href: "https://forms.gle/ajhNS6kr3c6U3YLT9",
            className: "underline text-center text-xs hover:text-blue-500 mt-1 mb-2 block",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "Share details to help us improve our system"), React.createElement(Button, {
            onClick: A
        }, "Continue Playing"))
    };
class SpriteSheetInstance extends React.Component {}
const ID = function() {
    return "_" + Math.random().toString(36).substr(2, 9)
};
class Spritesheet extends React.Component {
    constructor(A) {
        super(A);
        x(this, "renderElements", () => {
            const {
                image: A,
                className: t,
                style: a,
                widthFrame: n,
                heightFrame: s,
                background: r,
                backgroundSize: i,
                backgroundRepeat: m,
                backgroundPosition: d,
                onClick: E,
                onDoubleClick: u,
                onMouseMove: w,
                onMouseEnter: B,
                onMouseLeave: g,
                onMouseOver: C,
                onMouseOut: Q,
                onMouseDown: h,
                onMouseUp: f
            } = this.props, S = {
                position: "relative",
                overflow: "hidden",
                width: `${n}px`,
                height: `${s}px`,
                transform: `scale(${this.spriteScale})`,
                transformOrigin: "0 0",
                backgroundImage: `url(${r})`,
                backgroundSize: i,
                backgroundRepeat: m,
                backgroundPosition: d
            }, y = {
                overflow: "hidden",
                backgroundRepeat: "no-repeat",
                display: "table-cell",
                backgroundImage: `url(${A})`,
                width: `${n}px`,
                height: `${s}px`,
                transformOrigin: "0 50%"
            }, I = React.createElement("div", {
                className: "react-responsive-spritesheet-container__move",
                style: y
            }), D = React.createElement("div", {
                className: "react-responsive-spritesheet-container",
                style: S
            }, I);
            return React.createElement("div", {
                className: `react-responsive-spritesheet ${this.id} ${t}`,
                style: a,
                onClick: () => E(this.setInstance()),
                onDoubleClick: () => u(this.setInstance()),
                onMouseMove: () => w(this.setInstance()),
                onMouseEnter: () => B(this.setInstance()),
                onMouseLeave: () => g(this.setInstance()),
                onMouseOver: () => C(this.setInstance()),
                onMouseOut: () => Q(this.setInstance()),
                onMouseDown: () => h(this.setInstance()),
                onMouseUp: () => f(this.setInstance())
            }, D)
        });
        x(this, "init", () => {
            const {
                image: A,
                widthFrame: t,
                heightFrame: a,
                autoplay: n,
                getInstance: s,
                onInit: r
            } = this.props, i = new Image;
            i.src = A, i.onload = () => {
                if (document && document.querySelector(`.${this.id}`)) {
                    this.imageSprite = i, this.cols = this.imageSprite.width === t ? 1 : this.imageSprite.width / t, this.rows = this.imageSprite.height === a ? 1 : this.imageSprite.height / a, this.spriteEl = document.querySelector(`.${this.id}`), this.spriteElContainer = this.spriteEl.querySelector(".react-responsive-spritesheet-container"), this.spriteElMove = this.spriteElContainer.querySelector(".react-responsive-spritesheet-container__move"), this.resize(!1), window.addEventListener("resize", this.resize), this.moveImage(!1), setTimeout(() => {
                        this.resize(!1)
                    }, 10), n !== !1 && this.play(!0);
                    const m = this.setInstance();
                    s(m), r(m)
                }
            }, i.onerror = () => {
                throw new Error(`Failed to load image ${i.src}`)
            }
        });
        x(this, "resize", (A = !0) => {
            const {
                widthFrame: t,
                onResize: a
            } = this.props;
            this.isResponsive && (this.spriteScale = this.spriteEl.offsetWidth / t, this.spriteElContainer.style.transform = `scale(${this.spriteScale})`, this.spriteEl.style.height = `${this.getInfo("height")}px`, A && a && a(this.setInstance()))
        });
        x(this, "play", (A = !1) => {
            const {
                onPlay: t,
                timeout: a
            } = this.props;
            this.isPlaying || setTimeout(() => {
                t(this.setInstance()), this.setIntervalPlayFunctions(), this.isPlaying = !0
            }, A ? a : 0)
        });
        x(this, "setIntervalPlayFunctions", () => {
            this.intervalSprite && clearInterval(this.intervalSprite), this.intervalSprite = setInterval(() => {
                this.isPlaying && this.moveImage()
            }, 1e3 / this.fps)
        });
        x(this, "moveImage", (A = !0) => {
            const {
                onEnterFrame: t,
                onEachFrame: a,
                loop: n,
                onLoopComplete: s
            } = this.props, r = Math.floor(this.frame / this.cols), i = this.frame - this.cols * r;
            this.spriteElMove.style.backgroundPosition = `-${this.props.widthFrame*i}px -${this.props.heightFrame*r}px`, t && t.map(m => {
                m.frame === this.frame && m.callback && m.callback()
            }), A && (this.direction === "rewind" ? this.frame -= 1 : this.frame += 1, a && a(this.setInstance())), this.isPlaying && (this.direction === "forward" && (this.frame === this.steps || this.frame === this.endAt) || this.direction === "rewind" && (this.frame === -1 || this.frame === this.endAt)) && (n ? (s && s(this.setInstance()), this.completeLoopCicles += 1, this.frame = this.startAt ? this.startAt : this.direction === "rewind" ? this.steps - 1 : 0) : this.pause())
        });
        x(this, "pause", () => {
            const {
                onPause: A
            } = this.props;
            this.isPlaying = !1, clearInterval(this.intervalSprite), A(this.setInstance())
        });
        x(this, "goToAndPlay", A => {
            this.frame = A || this.frame, this.play()
        });
        x(this, "goToAndPause", A => {
            this.pause(), this.frame = A || this.frame, this.moveImage()
        });
        x(this, "setStartAt", A => (this.startAt = A ? A - 1 : 0, this.startAt));
        x(this, "setEndAt", A => (this.endAt = A, this.endAt));
        x(this, "setDirection", A => (this.direction = A === "rewind" ? "rewind" : "forward", this.direction));
        x(this, "getInfo", A => {
            switch (A) {
                case "direction":
                    return this.direction;
                case "frame":
                    return this.frame;
                case "fps":
                    return this.fps;
                case "steps":
                    return this.steps;
                case "width":
                    return this.spriteElContainer.getBoundingClientRect().width;
                case "height":
                    return this.spriteElContainer.getBoundingClientRect().height;
                case "scale":
                    return this.spriteScale;
                case "isPlaying":
                    return this.isPlaying;
                case "isPaused":
                    return !this.isPlaying;
                case "completeLoopCicles":
                    return this.completeLoopCicles;
                default:
                    throw new Error(`Invalid param \`${A}\` requested by Spritesheet.getinfo(). See the documentation on https://github.com/danilosetra/react-responsive-spritesheet`)
            }
        });
        const {
            isResponsive: t,
            startAt: a,
            endAt: n,
            fps: s,
            steps: r,
            direction: i
        } = A;
        this.id = `react-responsive-spritesheet--${ID()}`, this.spriteEl = this.spriteElContainer = this.spriteElMove = this.imageSprite = this.cols = this.rows = null, this.intervalSprite = !1, this.isResponsive = t, this.startAt = this.setStartAt(a), this.endAt = this.setEndAt(n), this.fps = s, this.steps = r, this.completeLoopCicles = 0, this.isPlaying = !1, this.spriteScale = 1, this.direction = this.setDirection(i), this.frame = this.startAt ? this.startAt : this.direction === "rewind" ? this.steps - 1 : 0
    }
    componentDidMount() {
        this.init()
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize)
    }
    setFps(A) {
        this.fps = A, this.setIntervalPlayFunctions()
    }
    setInstance() {
        return {
            play: this.play,
            pause: this.pause,
            goToAndPlay: this.goToAndPlay,
            goToAndPause: this.goToAndPause,
            setStartAt: this.setStartAt,
            setEndAt: this.setEndAt,
            setFps: this.setFps,
            setDirection: this.setDirection,
            getInfo: this.getInfo
        }
    }
    render() {
        return this.renderElements()
    }
}
Spritesheet.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    image: PropTypes.string.isRequired,
    widthFrame: PropTypes.number.isRequired,
    heightFrame: PropTypes.number.isRequired,
    isResponsive: PropTypes.bool,
    steps: PropTypes.number.isRequired,
    fps: PropTypes.number.isRequired,
    direction: PropTypes.string,
    timeout: PropTypes.number,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    startAt: PropTypes.number,
    endAt: PropTypes.oneOfType([PropTypes.oneOf([!1]), PropTypes.number]),
    background: PropTypes.string,
    backgroundSize: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
    getInstance: PropTypes.func,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onInit: PropTypes.func,
    onResize: PropTypes.oneOfType([PropTypes.oneOf([!1]), PropTypes.func]),
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onLoopComplete: PropTypes.oneOfType([PropTypes.oneOf([!1]), PropTypes.func]),
    onEachFrame: PropTypes.oneOfType([PropTypes.oneOf([!1]), PropTypes.func]),
    onEnterFrame: PropTypes.oneOfType([PropTypes.oneOf([!1]), PropTypes.array])
};
Spritesheet.defaultProps = {
    className: "",
    style: {},
    isResponsive: !0,
    direction: "forward",
    timeout: 0,
    autoplay: !0,
    loop: !1,
    startAt: 0,
    endAt: !1,
    background: "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "",
    getInstance: () => {},
    onClick: () => {},
    onDoubleClick: () => {},
    onMouseMove: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onMouseOver: () => {},
    onMouseOut: () => {},
    onMouseDown: () => {},
    onMouseUp: () => {},
    onInit: () => {},
    onResize: !1,
    onPlay: () => {},
    onPause: () => {},
    onLoopComplete: !1,
    onEachFrame: !1,
    onEnterFrame: !1
};
var sparkSheet$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAccAAABCCAMAAAAVKO1fAAAABGdBTUEAALGPC/xhBQAAADZQTFRFAAAAbnSG9+qZ06uTSZlHe4SckJuyISdCr7rN0Nnm6/D3xoJXPohIN0JmWmmJjJy1wczd/uhhIKmyTwAAAAF0Uk5TAEDm2GYAAAJdSURBVHja7ZnRkqIwEEVVAoZECPn/n93uIK5TtS9b002ZmXPKB58O1r10QuRyAQAAAAAAAAAAAAAAAAAAAADomUoE9AgfEzY9MjTwnzVWivwJQ0OP9Mgt80EJ1NMuxOSfFEE9rrOxArrm++Wr52V+MUXJPmpNOLecraOOyuBSo2cgjupNyDW7qOsbtjXOwnAbWo0dBeKrVndxUXvWqD3G3gLxUtdtK0U+JRUPtVONt3mOUT4xvRe5dRCInzrlrLeJtfup9qoxDYOO5HuPcrt3EIiLep/zKvJk7D7UfnvjTYpMX+ax9BCIg/qyyJiLOmVVl81FrTXaqkdZUqXGNGiNce4tEAf1shZdsktTy2U81FqjqXocp6jbY2w1SqWdBWKvLovYdcxTWlvk2V7darRUj3GUJnVJTWnSHm/DSYF8Z4gcs1adysW+rmubnGyv3pdVO7VWp0VKk9M0aY1mPZ4TiLX6cS+69S51VapcYSsPa/XzMcdOHa5RH3PG26TcpM25BptDxymBmKvFve7nUpWnprb72Yf6oNj1qJvjvM1aZJIaRR5sDh3/DqR+eNbivt/VmHORW6Sp7Xo81H+LNOvxepX2tmGIMo5zc4fqF4jNmckx6+aWBTvLk/CaddmWFfzx8WrtUTbHQU4d06BbpOyW4YRf/b2DgmMgTd7c8nffvvt2oQ7PHuWv1f1Jx6rGXgNR+bKrS9t+O1EH6bHVGNujjl2NvQYi8sei78OWvtQhjPrucTSvsddA1L686EgdxheBQJ63yUFP6vCCQAAAAAAAAAAAAAAAAAAAAOAn8AfUKk06RJ2nJgAAAABJRU5ErkJggg==",
    dropSheet$2 = "data:image/png;base64,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",
    empty$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABCBAMAAADKwbf5AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAISdC6/D3PohIN0JmWmmJjJy1wczdoS7sqgAAAAF0Uk5TAEDm2GYAAACuSURBVEjH7ZQxCsJAEEUDEXshyQECWkfiDXZjbeHPtoJxtpXAZq7vxhP8FFrNqx8PdmeYojAMwzB+gIhssPeq+ub1mPVlU1znx5Y4r3/j2rL6Ttb4KZK6H9e4xBsXn3yY26PEROmj+CEkiFJ62UQdAAR9Unqd/zEBunD6oc4jzXEh9QqqUIijnnpe9ZgwdZReVkGXF+DIMfVXmYB7x67YxWccvcBln+nsphjGn/gAR5UzncGFU8gAAAAASUVORK5CYII=";
const TimeLeftPanel = ({
        text: e = "",
        showTimeLeft: A = !1,
        timeLeft: t
    }) => {
        const [a, n] = react.exports.useState(secondsToMidString(t));
        return react.exports.useEffect(() => {
            const s = Date.now(),
                r = setInterval(() => {
                    const i = t - (Date.now() - s) / 1e3;
                    n(secondsToMidString(i)), (i <= 0 || !A) && clearInterval(r)
                }, 1e3);
            return () => clearInterval(r)
        }, [A, t]), React.createElement(InnerPanel, {
            className: classNames("ml-10 transition-opacity absolute whitespace-nowrap sm:opacity-0 bottom-5 w-fit left-5 z-20 pointer-events-none", {
                "opacity-100": A,
                "opacity-0": !A
            })
        }, React.createElement("div", {
            className: "flex flex-col text-xxs text-white text-shadow ml-2 mr-2"
        }, React.createElement("span", {
            className: "flex-1"
        }, e), React.createElement("span", {
            className: "flex-1"
        }, a)))
    },
    POPOVER_TIME_MS$3 = 1e3,
    HITS$3 = 3,
    Gold = ({
        rockIndex: e
    }) => {
        const {
            gameService: A,
            selectedItem: t
        } = react.exports.useContext(Context), [a] = useActor(A), [n] = useActor(A), [s, r] = react.exports.useState(!0), [i, m] = react.exports.useState(!1), [d, E] = react.exports.useState(), [u, w] = react.exports.useState(0), [B, g] = react.exports.useState(!1), C = react.exports.useRef(null), Q = react.exports.useRef(), h = react.exports.useRef(), [f, S] = react.exports.useState(!1), y = a.matches("readonly"), I = "Iron Pickaxe", D = n.context.state.gold[e], F = !canMine$2(D);
        react.exports.useEffect(() => {
            const R = k => {
                C.current && !C.current.contains(k.target) && w(0)
            };
            return document.addEventListener("click", R, !0), () => {
                document.removeEventListener("click", R, !0)
            }
        }, []);
        const T = async R => {
            E(R), r(!0), await new Promise(k => setTimeout(k, POPOVER_TIME_MS$3)), r(!1)
        }, N = () => {
            F && S(!0)
        }, U = () => {
            S(!1)
        }, v = () => {
            var O, Y, K;
            const R = (O = Q.current) == null ? void 0 : O.getInfo("isPlaying");
            if (y) {
                miningAudio.play(), (Y = Q.current) == null || Y.goToAndPlay(0);
                return
            }
            if (!(n.context.state.inventory["Iron Pickaxe"] || new Decimal(0)).lessThanOrEqualTo(0))
                if (t == I && !R) miningAudio.play(), (K = Q.current) == null || K.goToAndPlay(0), w(V => V + 1), u > 0 && u === HITS$3 - 1 && (P(), miningFallAudio.play(), w(0));
                else return
        }, P = async () => {
            var R;
            try {
                A.send("gold.mined", {
                    index: e
                }), g(!0), (R = h.current) == null || R.goToAndPlay(0), T(React.createElement("div", {
                    className: "flex"
                }, React.createElement("img", {
                    src: gold,
                    className: "w-5 h-5 mr-2"
                }), React.createElement("span", {
                    className: "text-sm text-white text-shadow"
                }, `+${D.amount}`))), await new Promise(k => setTimeout(k, 2e3)), g(!1)
            } catch (k) {
                T(React.createElement("span", {
                    className: "text-xs text-white text-shadow"
                }, k.message))
            }
        }, L = () => {
            var R, k;
            y || t === I && ((R = n.context.state.inventory[I]) == null ? void 0 : R.gte(1)) || ((k = C.current) == null || k.classList.add("cursor-not-allowed"), m(!0))
        }, J = () => {
            var R, k;
            y || t === I && ((R = n.context.state.inventory[I]) == null ? void 0 : R.gte(1)) || ((k = C.current) == null || k.classList.remove("cursor-not-allowed"), m(!1))
        }, b = GOLD_RECOVERY_TIME, G = getTimeLeft(D.minedAt, b), M = 100 - G / b * 100;
        return React.createElement("div", {
            className: "relative z-10",
            onMouseEnter: N,
            onMouseLeave: U
        }, !F && React.createElement("div", {
            onMouseEnter: L,
            onMouseLeave: J,
            ref: C,
            className: "group cursor-pointer  w-full h-full",
            onClick: v
        }, React.createElement(Spritesheet, {
            className: "group-hover:img-highlight pointer-events-none transform z-10",
            style: {
                width: `${GRID_WIDTH_PX*5}px`,
                imageRendering: "pixelated"
            },
            getInstance: R => {
                Q.current = R
            },
            image: sparkSheet$2,
            widthFrame: 91,
            heightFrame: 66,
            fps: 24,
            steps: 5,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: R => {
                R.pause()
            }
        }), React.createElement("div", {
            className: `absolute top-8 transition pointer-events-none w-28 z-20 ${i?"opacity-100":"opacity-0"}`
        }, React.createElement(Label, {
            className: "p-2"
        }, "Equip ", I.toLowerCase()))), React.createElement(Spritesheet, {
            style: {
                width: `${GRID_WIDTH_PX*5}px`,
                opacity: B ? 1 : 0,
                transition: "opacity 0.2s ease-in",
                imageRendering: "pixelated"
            },
            className: "pointer-events-none z-20",
            getInstance: R => {
                h.current = R
            },
            image: dropSheet$2,
            widthFrame: 91,
            heightFrame: 66,
            fps: 18,
            steps: 7,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: R => {
                R.pause()
            }
        }), React.createElement("img", {
            src: empty$2,
            className: "absolute top-0 pointer-events-none -z-10",
            style: {
                width: `${GRID_WIDTH_PX*5}px`
            }
        }), React.createElement("div", {
            className: classNames("transition-opacity pointer-events-none absolute top-12 left-9", {
                "opacity-100": u > 0,
                "opacity-0": u === 0
            })
        }, React.createElement(HealthBar, {
            percentage: B ? 0 : 100 - u / 3 * 100
        })), F && React.createElement(React.Fragment, null, React.createElement("div", {
            className: "absolute",
            style: {
                top: "106px",
                left: "29px"
            }
        }, React.createElement(ProgressBar, {
            percentage: M,
            seconds: G
        }), React.createElement(TimeLeftPanel, {
            text: "Recovers in:",
            timeLeft: G,
            showTimeLeft: f
        }))), React.createElement("div", {
            className: classNames("transition-opacity absolute top-24 w-40 left-20 z-20 pointer-events-none", {
                "opacity-100": s,
                "opacity-0": !s
            })
        }, d))
    };
var sparkSheet$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAccAAABCBAMAAADQ2ABeAAAABGdBTUEAALGPC/xhBQAAAC1QTFRFAAAAUFVsdKp8oa/DYWqHe4ehISdCytTjPohIjJy1N0JmWmmJ6/D3/uhhwczdX4B5dAAAAAF0Uk5TAEDm2GYAAAJ9SURBVGje7ZgxSxxBFMcnJxx3xQlCgu3hJ5Csh72spEkXB7+BhQlWkWmusFqutLzx4GqZC0fK3A0cARNkk41YBpKBbU3W+Qy+2dV0iW9kNznN+3XC3z//9968tyhjBEEQBEEQBEEQBEEQxN+mRUXOL+dU5AN5gOY/WBwq8reYf/7I/RKc36HWORj/Hdrccr+T3qtT4oo0Xs02924zIbExXuNsmTn4kEgfcdPkINVB3has9WFlqVnT+pgPLw1+kAti1cf6orLUbGjf+3hfegxyXfyyThHWWWWppbUxuilyaDP0IBcCIU5WbyrAWMtqUkNHQD5Az9HmRWLnCEV2rn84xFjLt1WkZsw688EMJ1506i/YjYQaRbez7WEd67SC1Kx+VshxD/xVUSRudx6dFkV6WMc6qyD1tVzPMnwS8w2380WRfLuLt/6sb6ybaXmp2e6bJEk+adxhqysQJ8bginz8HMQfuOjirUcznLVXavBWWh6psY0PMN5qNJFwd773MYMMQx6shc/ECazwIspaKZv1S0/N9n4orY/cXUPI61aN9MR9JjFJll+HnK/Bg3XHeJhirMewlX3EPxO8UrPGnv2ptbJJjJFH1mo9dUV+vV1cWxb7nIciQX1WC+txlsj+7X9o+aUG+Rksu4IuYmYTZbDsU3gqkwNMkafiIw/DTf7U3/rPZ8cvNWu4DR44c0xLIjgOsTN/hxDX3N3pbMFitsu29kvNGjsjLeVUHfcw6mhXT+RAqR7Gu7a0yYNgK9xYKd3aLzXIX4K5OkZ1hEU72h01nHVt6Ql/EYQb7fKt/VIz1stBqhuFGmm9ktOuwtorNUEQBEEQBEEQBEEQxMPlCgiQ0gHzt4teAAAAAElFTkSuQmCC",
    dropSheet$1 = "data:image/png;base64,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",
    empty$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABCBAMAAADKwbf5AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAISdC6/D3PohIjJy1N0JmWmmJwczdT8tPvAAAAAF0Uk5TAEDm2GYAAACYSURBVEjH7dMxDsIwDIXhVOECDNAVRYGukXoBJNywU7lcgLp7JfD1Sdm6vW4M/udveFYU5yzLsixrFW2wOyKlK8zvqhozqquidc7TCeTNwmWaMX54hBDOohivmIU6fmpMCK/fLNKVOYRwX+tHhDVEkDd6EeZBbsgWv1yax3IANN3vByEauW8dxo/yIu4T+Kjtr2TfzLL+tS/fQSI9eC8QJQAAAABJRU5ErkJggg==";
const POPOVER_TIME_MS$2 = 1e3,
    HITS$2 = 3,
    Stone = ({
        rockIndex: e
    }) => {
        const {
            gameService: A,
            selectedItem: t
        } = react.exports.useContext(Context), [a] = useActor(A), [n] = useActor(A), [s, r] = react.exports.useState(!0), [i, m] = react.exports.useState(!1), [d, E] = react.exports.useState(), [u, w] = react.exports.useState(0), [B, g] = react.exports.useState(!1), C = react.exports.useRef(null), Q = react.exports.useRef(), h = react.exports.useRef(), [f, S] = react.exports.useState(!1), y = a.matches("readonly"), I = "Pickaxe", D = n.context.state.stones[e], F = !canMine$1(D);
        react.exports.useEffect(() => {
            const R = k => {
                C.current && !C.current.contains(k.target) && w(0)
            };
            return document.addEventListener("click", R, !0), () => {
                document.removeEventListener("click", R, !0)
            }
        }, []);
        const T = async R => {
            E(R), r(!0), await new Promise(k => setTimeout(k, POPOVER_TIME_MS$2)), r(!1)
        }, N = () => {
            F && S(!0)
        }, U = () => {
            S(!1)
        }, v = () => {
            var O, Y, K;
            const R = (O = Q.current) == null ? void 0 : O.getInfo("isPlaying");
            if (y) {
                miningAudio.play(), (Y = Q.current) == null || Y.goToAndPlay(0);
                return
            }
            if (!(n.context.state.inventory.Pickaxe || new Decimal(0)).lessThanOrEqualTo(0))
                if (t == I && !R) miningAudio.play(), (K = Q.current) == null || K.goToAndPlay(0), w(V => V + 1), u > 0 && u === HITS$2 - 1 && (P(), miningFallAudio.play(), w(0));
                else return
        }, P = async () => {
            var R;
            w(0);
            try {
                A.send("stone.mined", {
                    index: e
                }), g(!0), (R = h.current) == null || R.goToAndPlay(0), T(React.createElement("div", {
                    className: "flex"
                }, React.createElement("img", {
                    src: stone,
                    className: "w-5 h-5 mr-2"
                }), React.createElement("span", {
                    className: "text-sm text-white text-shadow"
                }, `+${D.amount}`))), await new Promise(k => setTimeout(k, 2e3)), g(!1)
            } catch (k) {
                T(React.createElement("span", {
                    className: "text-xs text-white text-shadow"
                }, k.message))
            }
        }, L = () => {
            var R, k;
            y || t === I && ((R = n.context.state.inventory[I]) == null ? void 0 : R.gte(1)) || ((k = C.current) == null || k.classList.add("cursor-not-allowed"), m(!0))
        }, J = () => {
            var R, k;
            y || t === I && ((R = n.context.state.inventory[I]) == null ? void 0 : R.gte(1)) || ((k = C.current) == null || k.classList.remove("cursor-not-allowed"), m(!1))
        }, b = STONE_RECOVERY_TIME, G = getTimeLeft(D.minedAt, b), M = 100 - G / b * 100;
        return React.createElement("div", {
            className: "relative z-10",
            onMouseEnter: N,
            onMouseLeave: U
        }, !F && React.createElement("div", {
            onMouseEnter: L,
            onMouseLeave: J,
            ref: C,
            className: "group cursor-pointer  w-full h-full",
            onClick: v
        }, React.createElement(Spritesheet, {
            className: "group-hover:img-highlight pointer-events-none transform z-10",
            style: {
                width: `${GRID_WIDTH_PX*5}px`,
                imageRendering: "pixelated"
            },
            getInstance: R => {
                Q.current = R
            },
            image: sparkSheet$1,
            widthFrame: 91,
            heightFrame: 66,
            fps: 24,
            steps: 5,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: R => {
                R.pause()
            }
        }), React.createElement("div", {
            className: `absolute top-10 transition pointer-events-none w-28 z-20 ${i?"opacity-100":"opacity-0"}`
        }, React.createElement(Label, {
            className: "p-2"
        }, "Equip ", I.toLowerCase()))), React.createElement(Spritesheet, {
            style: {
                width: `${GRID_WIDTH_PX*5}px`,
                opacity: B ? 1 : 0,
                transition: "opacity 0.2s ease-in",
                imageRendering: "pixelated"
            },
            className: "pointer-events-none z-20",
            getInstance: R => {
                h.current = R
            },
            image: dropSheet$1,
            widthFrame: 91,
            heightFrame: 66,
            fps: 18,
            steps: 7,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: R => {
                R.pause()
            }
        }), React.createElement("img", {
            src: empty$1,
            className: "absolute top-0 pointer-events-none -z-10",
            style: {
                width: `${GRID_WIDTH_PX*5}px`
            }
        }), React.createElement("div", {
            className: classNames("transition-opacity pointer-events-none absolute top-12 left-8", {
                "opacity-100": u > 0,
                "opacity-0": u === 0
            })
        }, React.createElement(HealthBar, {
            percentage: B ? 0 : 100 - u / 3 * 100
        })), F && React.createElement(React.Fragment, null, React.createElement("div", {
            className: "absolute",
            style: {
                top: "106px",
                left: "29px"
            }
        }, React.createElement(ProgressBar, {
            percentage: M,
            seconds: G
        }), React.createElement(TimeLeftPanel, {
            text: "Recovers in:",
            timeLeft: G,
            showTimeLeft: f
        }))), React.createElement("div", {
            className: classNames("transition-opacity absolute top-24 w-40 left-20 z-20 pointer-events-none", {
                "opacity-100": s,
                "opacity-0": !s
            })
        }, d))
    };
var sparkSheet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAccAAABCCAMAAAAVKO1fAAAABGdBTUEAALGPC/xhBQAAAGxQTFRFAAAA3trPv7qz08y/vMTQwrOX1cu0oZWBtK+oybecm6W1zca8en+YqpV9ycCqjYBusZBatZ2As77QJCpTdKp8uKqShIyjlqG34OjvsZ9yfFMgkGIn0trojJy1PohIN0Jm2eTpWmmJ/uhhwczd+klCGgAAAAF0Uk5TAEDm2GYAAAK5SURBVHja7ZjtjtowFETTdtuFhQQSgvNp4sTv/46dmwQKK63Uaq9R0p0jfiAhHdCM7VwTRYQQQgghhBBCCCGEEEIIIYQQQp7MwAjYI1lM2OyRm4b8Y40Di/wfNg17ZI9cMgtKYHjaF62hxjfn3FswdagIXsqyfHlIevoev/RAAqldA7x3Loxa8nXvolagTEHblmWk7g4cSDD1saoqyPX1k1oS9rIrdWvcJkmCIucqVWsMHEgYtT/X4Kfzo71p1NXDHWo1trsY/CjbsclU8egOH0gYtfdngPUxuqtGXx2ixrbdAezFscckXVUg+uro1E1SUMnLNfpq9RqjvZkKBIm8yj89+hUEoq+Gu+sn+VnkWCUB1HONTrFHU0xF7qRI7MjrJ9b7FQSirYbr1PU3+VnRfa+ealRTo7e9KW5F7u57jOwaAlFXO5zVXY9F3IwjlJ77UT3WqKVGa3gumiJr23QcVx96XEcg6mrsb4dF0kzDMGhCqMcaldRSI87SEhsynS4eIF1ZIJrqaH7iwl1Xx3pW6wxRj+q5RhW1macb9Bgn23iuUWdg/YtArF9c1t18jbE4tev6teuctfXx2Oir5VjVUpv5ypjhCRnH340psyzebtNVBaKpvkCGqyiEIj/0GKbwtq4v2up5WtVR53LlSFOUJ0VuCgyueBsP+ecvHU8LRFUtbtv8qhoIe8j77iRuay/a6uvtUUWNHrP0W5KivAJFFmaPHq93089dOj4OZFhw1nBjZdT1wdqjyDu4BZ0e79W3vwF0esQujONNlm2lSIMetf5k+DCQz8sDZj0uku5w6MeVgRUyqfulq3NjzGZTyGmKIveoVcif8autX2IgkF9EL/u8764sX53nUqWcqYW5kn/lQGb9I6tQ5+/56oEQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEBKU31OIyvSNJfRAAAAAAElFTkSuQmCC",
    dropSheet = "data:image/png;base64,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",
    empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABCBAMAAADKwbf5AAAABGdBTUEAALGPC/xhBQAAABtQTFRFAAAAm6W1JCpTPohIN0Jm2eTpWmmJjJy1wczdbGiphAAAAAF0Uk5TAEDm2GYAAACwSURBVEjH7ZQxCsJAEEUjUfAgwTqQnCCsm1bBJelNZlsLyfTC4hzbyeIBfhpt5rHl4/NnBrYoDMMwfsYuXDfYBxEJuD6qLumyITzp2xCeRlivgmTANpXP5cF4efkZ149JbnHdJKaLDkm5zRuw92sLmtdp+QHoGjx4IjcworfnEPipemSuAb1n5sVTB+qkOk9TRxQBvXT9EnnpTkR3ZJFN6zxNTqmhq5bNF/smDMP4Lx/4KkXAcxBPkgAAAABJRU5ErkJggg==";
const POPOVER_TIME_MS$1 = 1e3,
    HITS$1 = 3,
    Iron = ({
        rockIndex: e
    }) => {
        const {
            gameService: A,
            selectedItem: t
        } = react.exports.useContext(Context), [a] = useActor(A), [n] = useActor(A), [s, r] = react.exports.useState(!0), [i, m] = react.exports.useState(!1), [d, E] = react.exports.useState(), [u, w] = react.exports.useState(0), [B, g] = react.exports.useState(!1), C = react.exports.useRef(null), Q = react.exports.useRef(), h = react.exports.useRef(), [f, S] = react.exports.useState(!1), y = a.matches("readonly"), I = "Stone Pickaxe", D = n.context.state.iron[e], F = !canMine(D);
        react.exports.useEffect(() => {
            const R = k => {
                C.current && !C.current.contains(k.target) && w(0)
            };
            return document.addEventListener("click", R, !0), () => {
                document.removeEventListener("click", R, !0)
            }
        }, []);
        const T = async R => {
            E(R), r(!0), await new Promise(k => setTimeout(k, POPOVER_TIME_MS$1)), r(!1)
        }, N = () => {
            F && S(!0)
        }, U = () => {
            S(!1)
        }, v = () => {
            var O, Y, K;
            const R = (O = Q.current) == null ? void 0 : O.getInfo("isPlaying");
            if (y) {
                miningAudio.play(), (Y = Q.current) == null || Y.goToAndPlay(0);
                return
            }
            if (!(n.context.state.inventory["Stone Pickaxe"] || new Decimal(0)).lessThanOrEqualTo(0))
                if (t === I && !R) miningAudio.play(), (K = Q.current) == null || K.goToAndPlay(0), w(V => V + 1), u > 0 && u === HITS$1 - 1 && (P(), miningFallAudio.play(), w(0));
                else return
        }, P = async () => {
            var R;
            w(0);
            try {
                A.send("iron.mined", {
                    index: e
                }), g(!0), (R = h.current) == null || R.goToAndPlay(0), T(React.createElement("div", {
                    className: "flex"
                }, React.createElement("img", {
                    src: ironOre,
                    className: "w-5 h-5 mr-2"
                }), React.createElement("span", {
                    className: "text-sm text-white text-shadow"
                }, `+${D.amount}`))), await new Promise(k => setTimeout(k, 2e3)), g(!1)
            } catch (k) {
                T(React.createElement("span", {
                    className: "text-xs text-white text-shadow"
                }, k.message))
            }
        }, L = () => {
            var R, k;
            y || t === I && ((R = n.context.state.inventory[I]) == null ? void 0 : R.gte(1)) || ((k = C.current) == null || k.classList.add("cursor-not-allowed"), m(!0))
        }, J = () => {
            var R, k;
            y || t === I && ((R = n.context.state.inventory[I]) == null ? void 0 : R.gte(1)) || ((k = C.current) == null || k.classList.remove("cursor-not-allowed"), m(!1))
        }, b = IRON_RECOVERY_TIME, G = getTimeLeft(D.minedAt, b), M = 100 - G / b * 100;
        return React.createElement("div", {
            className: "relative z-10",
            onMouseEnter: N,
            onMouseLeave: U
        }, !F && React.createElement("div", {
            onMouseEnter: L,
            onMouseLeave: J,
            ref: C,
            className: "group cursor-pointer  w-full h-full",
            onClick: v
        }, React.createElement(Spritesheet, {
            className: "group-hover:img-highlight pointer-events-none transform z-10",
            style: {
                width: `${GRID_WIDTH_PX*5}px`,
                imageRendering: "pixelated"
            },
            getInstance: R => {
                Q.current = R
            },
            image: sparkSheet,
            widthFrame: 91,
            heightFrame: 66,
            fps: 24,
            steps: 5,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: R => {
                R.pause()
            }
        }), React.createElement("div", {
            className: `absolute top-5 transition pointer-events-none w-28 z-20 ${i?"opacity-100":"opacity-0"}`
        }, React.createElement(Label, {
            className: "p-2"
        }, "Equip ", I.toLowerCase()))), React.createElement(Spritesheet, {
            style: {
                width: `${GRID_WIDTH_PX*5}px`,
                opacity: B ? 1 : 0,
                transition: "opacity 0.2s ease-in",
                imageRendering: "pixelated"
            },
            className: "pointer-events-none z-20",
            getInstance: R => {
                h.current = R
            },
            image: dropSheet,
            widthFrame: 91,
            heightFrame: 66,
            fps: 18,
            steps: 7,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: R => {
                R.pause()
            }
        }), React.createElement("img", {
            src: empty,
            className: "absolute top-0 pointer-events-none -z-10",
            style: {
                width: `${GRID_WIDTH_PX*5}px`
            }
        }), React.createElement("div", {
            className: classNames("transition-opacity pointer-events-none absolute top-8 left-8", {
                "opacity-100": u > 0,
                "opacity-0": u === 0
            })
        }, React.createElement(HealthBar, {
            percentage: B ? 0 : 100 - u / 3 * 100
        })), F && React.createElement(React.Fragment, null, React.createElement("div", {
            className: "absolute",
            style: {
                top: "96px",
                left: "29px"
            }
        }, React.createElement(ProgressBar, {
            percentage: M,
            seconds: G
        }), React.createElement(TimeLeftPanel, {
            text: "Recovers in:",
            timeLeft: G,
            showTimeLeft: f
        }))), React.createElement("div", {
            className: classNames("transition-opacity absolute top-24 w-40 left-20 z-20 pointer-events-none", {
                "opacity-100": s,
                "opacity-0": !s
            })
        }, d))
    },
    Quarry = () => React.createElement(React.Fragment, null, React.createElement("div", {
        className: "absolute",
        style: {
            right: `${GRID_WIDTH_PX*5}px`,
            top: `${GRID_WIDTH_PX*25}px`
        }
    }, React.createElement(Stone, {
        rockIndex: 0
    })), React.createElement("div", {
        className: "absolute",
        style: {
            left: `${GRID_WIDTH_PX*15}px`,
            top: `${GRID_WIDTH_PX*43}px`
        }
    }, React.createElement(Stone, {
        rockIndex: 1
    })), React.createElement("div", {
        className: "absolute",
        style: {
            right: `${GRID_WIDTH_PX*10}px`,
            top: `${GRID_WIDTH_PX*50}px`
        }
    }, React.createElement(Stone, {
        rockIndex: 2
    })), React.createElement("div", {
        className: "absolute",
        style: {
            left: `${GRID_WIDTH_PX*25}px`,
            top: `${GRID_WIDTH_PX*20}px`
        }
    }, React.createElement(Iron, {
        rockIndex: 0
    })), React.createElement("div", {
        className: "absolute",
        style: {
            right: `${GRID_WIDTH_PX*1}px`,
            top: `${GRID_WIDTH_PX*40}px`
        }
    }, React.createElement(Iron, {
        rockIndex: 1
    })), React.createElement("div", {
        className: "absolute",
        style: {
            left: `calc(50% +  ${GRID_WIDTH_PX*25}px)`,
            top: `${GRID_WIDTH_PX*14}px`
        }
    }, React.createElement(Gold, {
        rockIndex: 0
    })));
var begger = "data:image/gif;base64,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",
    team = "./assets/team.a79a1a34.png";
const teamDonationMachine = createMachine({
        initial: "idle",
        context: {
            hasDonated: !1
        },
        states: {
            idle: {
                on: {
                    BEGGER_CLICK: {
                        target: "begging"
                    }
                }
            },
            begging: {
                on: {
                    DONATE: {
                        target: "donating"
                    },
                    CLOSE: {
                        target: "idle"
                    }
                }
            },
            donating: {
                invoke: {
                    src: async (e, A) => {
                        const {
                            donation: t
                        } = A;
                        await metamask.donateToTheTeam(t)
                    },
                    onDone: {
                        target: "donated",
                        actions: assign({
                            hasDonated: (e, A) => !0
                        })
                    },
                    onError: [{
                        target: "idle",
                        cond: (e, A) => A.data.message === ERRORS.REJECTED_TRANSACTION
                    }, {
                        target: "error"
                    }]
                }
            },
            donated: {
                after: {
                    1e3: {
                        target: "idle"
                    }
                }
            },
            error: {
                after: {
                    2e3: {
                        target: "idle"
                    }
                }
            }
        }
    }),
    TeamDonation = () => {
        const [e, A] = useMachine(teamDonationMachine), {
            gameService: t
        } = react.exports.useContext(Context), [a] = useActor(t), [n, s] = react.exports.useState(1), r = E => {
            s(roundToOneDecimal(Number(E.target.value)))
        }, i = () => {
            s(E => roundToOneDecimal(E + .1))
        }, m = () => {
            n === .2 ? s(.2) : n < .2 ? s(.1) : s(E => roundToOneDecimal(E - .1))
        }, d = () => {
            s(1), A("BEGGER_CLICK"), beggarAudio.play()
        };
        return React.createElement("div", {
            className: "z-5 absolute align-items-center w-[72px]",
            style: a.context.state.inventory["Homeless Tent"] ? {
                left: `calc(50% - ${GRID_WIDTH_PX*-13.6}px)`,
                top: `calc(50% - ${GRID_WIDTH_PX*17.8}px)`
            } : {
                left: `calc(50% - ${GRID_WIDTH_PX*-9.8}px)`,
                top: `calc(50% - ${GRID_WIDTH_PX*17.2}px)`
            }
        }, e.context.hasDonated ? React.createElement("img", {
            id: "rich_begger",
            src: richBegger,
            className: "absolute hover:cursor-pointer hover:img-highlight z-10",
            style: {
                width: `${GRID_WIDTH_PX*1.8}px`
            },
            onClick: d
        }) : React.createElement("img", {
            id: "begger",
            src: begger,
            className: "absolute hover:cursor-pointer hover:img-highlight z-10",
            style: {
                width: `${GRID_WIDTH_PX*1.8}px`
            },
            onClick: d
        }), React.createElement(Modal, {
            centered: !0,
            show: !e.matches("idle"),
            onHide: () => A("CLOSE")
        }, React.createElement(Panel, null, e.matches("begging") && React.createElement("div", {
            className: "flex flex-col items-center mb-1"
        }, React.createElement("img", {
            src: team,
            alt: "sunflower token",
            className: "w-full mb-3"
        }), React.createElement("div", {
            className: "flex flex-col text-shadow items-center"
        }, React.createElement("h2", {
            className: "text-sm sm:text-base mb-2 text-center pb-2"
        }, "Buy the team a coffee!"), React.createElement("p", {
            className: "sm:text-sm mb-3 text-center"
        }, "Sunflower Land is run by a small group of passionate developers who are 100% sleep deprived."), React.createElement("p", {
            className: "sm:text-sm mb-3 text-center"
        }, `You can send us a donation of Matic with which we can drink
                more coffee and stay awake longer pumping out awesome new
                features`), React.createElement("p", {
            className: "sm:text-sm  mb-3 text-center"
        }, "Every little bit counts!")), React.createElement("div", {
            className: "relative"
        }, React.createElement("input", {
            type: "number",
            className: "text-shadow shadow-inner shadow-black bg-brown-200 w-24 p-1 text-center",
            step: "0.1",
            min: .1,
            value: n,
            required: !0,
            onChange: r,
            onBlur: () => {
                n < .1 && s(.1)
            }
        }), React.createElement("img", {
            src: upArrow,
            alt: "increment donation value",
            className: "cursor-pointer absolute -right-4 top-0",
            onClick: i
        }), React.createElement("img", {
            src: downArrow,
            alt: "decrement donation value",
            className: "cursor-pointer absolute -right-4 bottom-0",
            onClick: m
        })), React.createElement("span", {
            className: "text-[10px] text-shadow mt-2 mb-3"
        }, "Amount in MATIC"), React.createElement("div", {
            className: "flex w-full"
        }, React.createElement(Button, {
            className: "w-full mr-1",
            onClick: () => A("CLOSE")
        }, React.createElement("span", {
            className: "text-xs whitespace-nowrap"
        }, "Close")), React.createElement(Button, {
            className: "w-full ml-1",
            onClick: () => A("DONATE", {
                donation: n
            })
        }, React.createElement("span", {
            className: "text-xs whitespace-nowrap"
        }, "Donate")))), e.matches("donating") && React.createElement("div", {
            className: "flex flex-col items-center"
        }, React.createElement("img", {
            id: "begger",
            src: begger,
            className: "w-24"
        }), React.createElement("p", {
            className: "loading mb-4"
        }, "Donating")), e.matches("donated") && React.createElement("div", {
            className: "flex flex-col items-center"
        }, React.createElement("img", {
            id: "richBegger",
            src: richBegger,
            className: "w-24"
        }), React.createElement("p", {
            className: "mb-4"
        }, "Thank you!")), e.matches("error") && React.createElement("div", {
            className: "flex flex-col items-center"
        }, React.createElement("img", {
            id: "richBegger",
            src: humanDeath
        }), React.createElement("p", {
            className: "my-4"
        }, "Oh no! Something went wrong!")))))
    };
var shakeSheet = "./assets/shake_sheet.b89d2e79.png",
    choppedSheet = "./assets/chopped_sheet.e610971d.png",
    stump = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOBAMAAADUAYG5AAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAuG9Q6tSqwoVpPolIPicx5KZycz45yX49mgAAAAF0Uk5TAEDm2GYAAABlSURBVAjXY2BgYC8vL2AAgbK0tHQQzZ5mbJwGEgpLTkszS0VmBIGkVIGMcLW0tKRSBgZW8SIlJfXCAAbH8tLy8vByEQbX8NBC8dDSEAYGVxAjBGSia3k5mGZgKS93ADMY3EuABABq4BlOdpE5TgAAAABJRU5ErkJggg==";
const POPOVER_TIME_MS = 1e3,
    HITS = 3,
    tool = "Axe",
    Tree = ({
        treeIndex: e
    }) => {
        const {
            gameService: A,
            selectedItem: t
        } = react.exports.useContext(Context), [a] = useActor(A), [n, s] = react.exports.useState(!0), [r, i] = react.exports.useState(!1), [m, d] = react.exports.useState(), [E, u] = react.exports.useState(0), [w, B] = react.exports.useState(!1), g = react.exports.useRef(null), C = react.exports.useRef(), Q = react.exports.useRef(), [h, f] = react.exports.useState(!1);
        react.exports.useEffect(() => {
            const M = R => {
                g.current && !g.current.contains(R.target) && u(0)
            };
            return document.addEventListener("click", M, !0), () => {
                document.removeEventListener("click", M, !0)
            }
        }, []);
        const S = a.context.state.trees[e],
            y = !canChop(S),
            I = async M => {
                d(M), s(!0), await new Promise(R => setTimeout(R, POPOVER_TIME_MS)), s(!1)
            }, D = () => {
                f(!0)
            }, F = () => {
                f(!1)
            }, T = getRequiredAxeAmount(a.context.state.inventory), N = a.context.state.inventory.Axe || new Decimal(0), U = (t === "Axe" || T.eq(0)) && N.gte(T), v = async () => {
                var R, k, O;
                if (a.matches("readonly")) {
                    (R = C.current) == null || R.goToAndPlay(0);
                    return
                }!U || ((k = C.current) == null ? void 0 : k.getInfo("isPlaying")) || (chopAudio.play(), (O = C.current) == null || O.goToAndPlay(0), u(Y => Y + 1), E > 0 && E === HITS - 1 && (P(), treeFallAudio.play(), u(0)))
            }, P = async () => {
                var M;
                u(0);
                try {
                    A.send("tree.chopped", {
                        index: e,
                        item: t
                    }), B(!0), (M = Q.current) == null || M.goToAndPlay(0), I(React.createElement("div", {
                        className: "flex"
                    }, React.createElement("img", {
                        src: wood,
                        className: "w-5 h-5 mr-2"
                    }), React.createElement("span", {
                        className: "text-sm text-white text-shadow"
                    }, `+${S.wood}`))), await new Promise(R => setTimeout(R, 2e3)), B(!1)
                } catch (R) {
                    if (R.message === CHOP_ERRORS.NO_AXES) {
                        I(React.createElement("div", {
                            className: "flex"
                        }, React.createElement("img", {
                            src: axe,
                            className: "w-4 h-4 mr-2"
                        }), React.createElement("span", {
                            className: "text-xs text-white text-shadow"
                        }, "No axes left")));
                        return
                    }
                    I(React.createElement("span", {
                        className: "text-xs text-white text-shadow"
                    }, R.message))
                }
            }, L = () => {
                var M;
                a.matches("readonly") || U || ((M = g.current) == null || M.classList.add("cursor-not-allowed"), i(!0))
            }, J = () => {
                var M;
                a.matches("readonly") || U || ((M = g.current) == null || M.classList.remove("cursor-not-allowed"), i(!1))
            }, b = getTimeLeft(S.choppedAt, TREE_RECOVERY_SECONDS), G = 100 - b / TREE_RECOVERY_SECONDS * 100;
        return React.createElement("div", {
            className: "relative",
            style: {
                height: "106px"
            }
        }, !y && React.createElement("div", {
            onMouseEnter: L,
            onMouseLeave: J,
            ref: g,
            className: "group cursor-pointer  w-full h-full",
            onClick: v
        }, React.createElement(Spritesheet, {
            className: "group-hover:img-highlight pointer-events-none transform",
            style: {
                width: `${GRID_WIDTH_PX*4}px`,
                transform: `translateX(-${GRID_WIDTH_PX*2.5}px)`,
                imageRendering: "pixelated"
            },
            getInstance: M => {
                C.current = M
            },
            image: shakeSheet,
            widthFrame: 266,
            heightFrame: 168,
            fps: 24,
            steps: 11,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: M => {
                M.pause()
            }
        }), React.createElement("div", {
            className: `absolute bottom-8 -right-[1rem] transition pointer-events-none w-28 z-20 ${r?"opacity-100":"opacity-0"}`
        }, React.createElement(Label, {
            className: "p-2"
        }, "Equip ", tool.toLowerCase()))), React.createElement(Spritesheet, {
            style: {
                width: `${GRID_WIDTH_PX*4}px`,
                transform: `translateX(-${GRID_WIDTH_PX*2.5}px)`,
                opacity: w ? 1 : 0,
                transition: "opacity 0.2s ease-in",
                imageRendering: "pixelated"
            },
            className: "absolute bottom-0 pointer-events-none",
            getInstance: M => {
                Q.current = M
            },
            image: choppedSheet,
            widthFrame: 266,
            heightFrame: 168,
            fps: 20,
            steps: 11,
            direction: "forward",
            autoplay: !1,
            loop: !0,
            onLoopComplete: M => {
                M.pause()
            }
        }), y && React.createElement(React.Fragment, null, React.createElement("img", {
            src: stump,
            className: "absolute",
            style: {
                width: `${GRID_WIDTH_PX}px`,
                bottom: "9px",
                left: "5px"
            },
            onMouseEnter: D,
            onMouseLeave: F
        }), React.createElement("div", {
            className: "absolute -bottom-4 left-1.5"
        }, React.createElement(ProgressBar, {
            percentage: G,
            seconds: b
        })), React.createElement(TimeLeftPanel, {
            text: "Recovers in:",
            timeLeft: b,
            showTimeLeft: h
        })), React.createElement("div", {
            className: classNames("transition-opacity pointer-events-none absolute top-4 left-2", {
                "opacity-100": E > 0,
                "opacity-0": E === 0
            })
        }, React.createElement(HealthBar, {
            percentage: w ? 0 : 100 - E / 3 * 100
        })), React.createElement("div", {
            className: classNames("transition-opacity absolute -bottom-5 w-40 -left-16 z-20 pointer-events-none", {
                "opacity-100": n,
                "opacity-0": !n
            })
        }, m))
    },
    Lumberjack = () => {
        const [e, A] = react.exports.useState(!1), [t] = useScrollIntoView(), a = () => {
            A(!1), t(Section.Town)
        };
        return React.createElement(React.Fragment, null, React.createElement("img", {
            src: questionMark,
            className: "absolute z-10 animate-float",
            style: {
                width: `${GRID_WIDTH_PX*.3}px`,
                right: `${GRID_WIDTH_PX*5}px`,
                top: `${GRID_WIDTH_PX*2.8}px`
            }
        }), React.createElement("img", {
            src: idle,
            onClick: () => A(!0),
            className: "absolute cursor-pointer hover:img-highlight",
            style: {
                width: `${GRID_WIDTH_PX*1}px`,
                right: `${GRID_WIDTH_PX*4.65}px`,
                top: `${GRID_WIDTH_PX*3.4}px`
            }
        }), React.createElement(Modal, {
            centered: !0,
            show: e,
            onHide: () => A(!1)
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: () => A(!1)
        }), React.createElement("div", {
            className: "flex items-start"
        }, React.createElement("img", {
            src: axe,
            className: "w-12 img-highlight mr-2"
        }), React.createElement("div", {
            className: "flex-1"
        }, React.createElement("span", {
            className: "text-shadow mr-4 block"
        }, "Something looks different about these trees..."), React.createElement("span", {
            className: "text-shadow block mt-4"
        }, "I wonder if I can craft something to chop them down?"), React.createElement(Button, {
            className: "text-sm",
            onClick: a
        }, "Go to the Blacksmith"))))))
    },
    Forest = () => React.createElement("div", {
        id: "forest",
        style: {
            height: `${GRID_WIDTH_PX*9}px`,
            width: `${GRID_WIDTH_PX*11}px`,
            left: `calc(50% - ${GRID_WIDTH_PX*-21.4}px)`,
            top: `calc(50% - ${GRID_WIDTH_PX*4}px)`
        },
        className: "absolute "
    }, React.createElement(Lumberjack, null), React.createElement("div", {
        className: "absolute",
        style: {
            height: `${GRID_WIDTH_PX*1.5}px`,
            width: `${GRID_WIDTH_PX*1.5}px`,
            right: `${GRID_WIDTH_PX*0}px`,
            top: `${GRID_WIDTH_PX*5.5}px`
        }
    }, React.createElement(Tree, {
        treeIndex: 0
    })), React.createElement("div", {
        className: "absolute",
        style: {
            height: `${GRID_WIDTH_PX*1.5}px`,
            width: `${GRID_WIDTH_PX*1.5}px`,
            left: `${GRID_WIDTH_PX*.5}px`,
            top: `${GRID_WIDTH_PX*.5}px`
        }
    }, React.createElement(Tree, {
        treeIndex: 1
    })), React.createElement("div", {
        className: "absolute",
        style: {
            height: `${GRID_WIDTH_PX*1.5}px`,
            width: `${GRID_WIDTH_PX*1.5}px`,
            right: `${GRID_WIDTH_PX*1}px`,
            top: `${GRID_WIDTH_PX*.5}px`
        }
    }, React.createElement(Tree, {
        treeIndex: 2
    })), React.createElement("div", {
        className: "absolute",
        style: {
            height: `${GRID_WIDTH_PX*1.5}px`,
            width: `${GRID_WIDTH_PX*1.5}px`,
            left: `${GRID_WIDTH_PX*4.5}px`,
            bottom: `${GRID_WIDTH_PX*.5}px`
        }
    }, React.createElement(Tree, {
        treeIndex: 3
    })), React.createElement("div", {
        className: "absolute",
        style: {
            height: `${GRID_WIDTH_PX*1.5}px`,
            width: `${GRID_WIDTH_PX*1.5}px`,
            left: `${GRID_WIDTH_PX*0}px`,
            bottom: `${GRID_WIDTH_PX*2}px`
        }
    }, React.createElement(Tree, {
        treeIndex: 4
    })));
var bank = "./assets/bank.af356bb9.gif",
    player = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOBAMAAAAGUYvhAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA/peb/cZPlFVC/q40xYFYGBQl+99rxn+FfQAAAAF0Uk5TAEDm2GYAAABZSURBVAjXY2BgS0tLYwCC9CKl8gQGBjb38vJyNwaGFCBVXpIAFC5XLwJKpLuXA2ECQwqIdklgYHMBAqA6NmMgMAPSoamhqWFItKloqChQnCE1NDQUaC7UHgAcbBnVY4PP/gAAAABJRU5ErkJggg==";
const shortAddress$1 = e => e ? `${e.slice(0,5)}...${e.slice(-4)}` : "";

function getTax(e) {
    return e.lessThan(10) ? 300 : e.lessThan(100) ? 250 : e.lessThan(1e3) ? 200 : e.lessThan(5e3) ? 150 : 100
}
const WithdrawTokens = ({
    onWithdraw: e
}) => {
    var y;
    const {
        authService: A
    } = react.exports.useContext(Context$1), [t] = useActor(A), {
        gameService: a
    } = react.exports.useContext(Context), [n] = useActor(a), [s, r] = react.exports.useState(new Decimal(0)), [i, m] = react.exports.useState(new Decimal(0)), [d, E] = react.exports.useState(!0);
    react.exports.useEffect(() => {
        E(!0), (async () => {
            const {
                game: D
            } = await getOnChainState({
                id: n.context.state.id,
                farmAddress: n.context.state.farmAddress
            });
            m(D.balance), E(!1)
        })()
    }, []);
    const u = I => typeof I != "string" ? I : new Decimal(0),
        w = () => {
            s > new Decimal(0) ? e(lib.toWei(s.toString())) : r(new Decimal(0))
        },
        B = I => {
            I.target.value === "" ? r(new Decimal(0)) : r(new Decimal(Number(I.target.value)))
        },
        g = () => {
            r(i.minus(new Decimal(.01)))
        },
        C = () => {
            u(s).plus(.1).toNumber() < i.toDecimalPlaces(2, 1).toNumber() && r(I => u(I).plus(.1))
        },
        Q = () => {
            u(s).toNumber() > .01 && u(s).minus(.1).toNumber() >= 0 && r(I => u(I).minus(.1))
        };
    if (d) return React.createElement("span", {
        className: "text-shadow loading"
    }, "Loading");
    const h = getTax(typeof s != "string" ? s : new Decimal(0)) / 10,
        f = (y = t.context.token) == null ? void 0 : y.userAccess.withdraw,
        S = u(s).gte(i) || u(s).lt(0);
    return f ? React.createElement(React.Fragment, null, React.createElement("div", {
        className: "flex flex-wrap"
    }, React.createElement("span", {
        className: "text-shadow  underline"
    }, "Choose amount to withdraw")), React.createElement("span", {
        className: "text-xs"
    }, i.toFixed(2), " is available on-chain"), React.createElement("div", {
        className: "h-16"
    }, React.createElement("div", {
        className: "flex items-center mt-2"
    }, React.createElement("div", {
        className: "relative mr-4"
    }, React.createElement("input", {
        type: "number",
        className: "text-shadow shadow-inner shadow-black bg-brown-200 w-32 p-2 text-center",
        step: "0.1",
        min: 0,
        value: typeof s == "string" ? "" : s.toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber(),
        onChange: B
    }), React.createElement("img", {
        src: upArrow,
        alt: "increment donation value",
        className: "cursor-pointer w-3 absolute -right-4 top-0",
        onClick: C
    }), React.createElement("img", {
        src: downArrow,
        alt: "decrement donation value",
        className: "cursor-pointer w-3 absolute -right-4 bottom-0",
        onClick: Q
    })), React.createElement(Button, {
        className: "w-24 ml-6",
        onClick: g
    }, "Max")), s.gt(0) && React.createElement(React.Fragment, null, React.createElement("span", {
        className: "text-xs"
    }, React.createElement("span", {
        className: "text-xs"
    }, h, "% fee"), React.createElement("a", {
        className: "underline ml-2",
        href: "https://docs.sunflower-land.com/fundamentals/withdrawing",
        target: "_blank",
        rel: "noreferrer"
    }, "(Read more)")))), React.createElement("div", {
        className: "flex items-center mt-4"
    }, React.createElement("span", {
        className: ""
    }, `You will receive: ${u(s).mul((100-h)/100).toFixed(1)}`), React.createElement("img", {
        src: token,
        className: "w-4 ml-2 img-highlight"
    })), React.createElement("div", {
        className: "flex items-center mt-2 mb-2"
    }, React.createElement("img", {
        src: player,
        className: "h-8 mr-2"
    }), React.createElement("div", null, React.createElement("p", {
        className: "text-shadow text-sm"
    }, "Sent to your wallet"), React.createElement("p", {
        className: "text-shadow text-sm"
    }, shortAddress$1(metamask.myAccount || "XXXX")))), React.createElement("div", {
        className: "flex items-center border-2 rounded-md border-black p-2 mt-2 mb-2 bg-[#e43b44]"
    }, React.createElement("img", {
        src: alert,
        alt: "alert",
        className: "mr-2 w-5 h-5/6"
    }), React.createElement("span", {
        className: "text-xs"
    }, "ANY PROGRESS THAT HAS NOT BEEN SYNCED ON CHAIN WILL BE LOST.")), React.createElement(Button, {
        onClick: w,
        disabled: S
    }, "Withdraw")) : React.createElement("span", null, "Available May 9th")
};

function cropIsPlanted({
    item: e,
    game: A
}) {
    return Object.values(A.fields).some(a => a.name === e)
}

function hasSeeds(e) {
    return Object.keys(e).some(A => A in SEEDS())
}

function canWithdraw({
    item: e,
    game: A
}) {
    return isSeed$1(e) || e in SKILL_TREE || e in FOODS() ? !1 : e === "Woody the Beaver" || e === "Apprentice Beaver" || e === "Foreman Beaver" ? Object.values(A.trees).every(t => canChop(t)) : e === "Kuebiko" && hasSeeds(A.inventory) ? !1 : e === "Scarecrow" || e === "Nancy" || e === "Kuebiko" ? Object.values(A.fields).length === 0 : e === "Easter Bunny" ? !cropIsPlanted({
        item: "Carrot",
        game: A
    }) : e === "Golden Cauliflower" ? !cropIsPlanted({
        item: "Cauliflower",
        game: A
    }) : e === "Mysterious Parsnip" ? !cropIsPlanted({
        item: "Parsnip",
        game: A
    }) : !0
}
const WithdrawItems = ({
        onWithdraw: e
    }) => {
        const {
            gameService: A
        } = react.exports.useContext(Context), [t] = useActor(A), [a, n] = react.exports.useState(!0), [s, r] = react.exports.useState({}), [i, m] = react.exports.useState({});
        react.exports.useEffect(() => {
            n(!0);
            const g = async () => {
                const {
                    game: C
                } = await getOnChainState({
                    id: t.context.state.id,
                    farmAddress: t.context.state.farmAddress
                });
                r(C.inventory), n(!1)
            };
            m({}), g()
        }, []);
        const d = () => {
                const g = Object.keys(i).map(Q => KNOWN_IDS[Q]),
                    C = Object.keys(i).map(Q => {
                        var h;
                        return lib.toWei((h = i[Q]) == null ? void 0 : h.toString(), getItemUnit(Q))
                    });
                e(g, C)
            },
            E = g => {
                m(C => l(c({}, C), {
                    [g]: (C[g] || new Decimal(0)).add(1)
                })), r(C => {
                    var Q;
                    return l(c({}, C), {
                        [g]: (Q = C[g]) == null ? void 0 : Q.minus(1)
                    })
                })
            },
            u = g => {
                r(C => l(c({}, C), {
                    [g]: (C[g] || new Decimal(0)).add(1)
                })), m(C => {
                    var Q;
                    return l(c({}, C), {
                        [g]: (Q = C[g]) == null ? void 0 : Q.minus(1)
                    })
                })
            };
        if (a) return React.createElement("span", {
            className: "text-shadow loading"
        }, "Loading");
        const w = Object.keys(s).filter(g => {
            var C;
            return (C = s[g]) == null ? void 0 : C.gt(0)
        });
        console.log({
            inventoryItems: w
        });
        const B = Object.keys(i).filter(g => {
            var C;
            return (C = i[g]) == null ? void 0 : C.gt(0)
        });
        return React.createElement(React.Fragment, null, React.createElement("span", {
            className: "text-shadow text-base"
        }, "Select items to withdraw"), React.createElement("div", {
            className: "flex flex-wrap h-fit"
        }, w.map(g => React.createElement(Box, {
            count: s[g],
            key: g,
            onClick: () => E(g),
            image: ITEM_DETAILS[g].image,
            locked: !canWithdraw({
                item: g,
                game: t.context.state
            })
        })), w.length < 4 && new Array(4 - w.length).fill(null).map((g, C) => React.createElement(Box, {
            disabled: !0,
            key: C
        }))), React.createElement("div", {
            className: "mt-2"
        }, React.createElement("span", {
            className: "text-shadow text-base"
        }, "Selected"), React.createElement("div", {
            className: "flex flex-wrap h-fit mt-2"
        }, B.map(g => React.createElement(Box, {
            count: i[g],
            key: g,
            onClick: () => u(g),
            image: ITEM_DETAILS[g].image
        })), B.length < 4 && new Array(4 - B.length).fill(null).map((g, C) => React.createElement(Box, {
            disabled: !0,
            key: C
        })))), React.createElement("div", {
            className: "flex items-center mt-2 mb-2"
        }, React.createElement("img", {
            src: player,
            className: "h-8 mr-2"
        }), React.createElement("div", null, React.createElement("p", {
            className: "text-shadow text-sm"
        }, "Sent to your wallet"), React.createElement("p", {
            className: "text-shadow text-sm"
        }, shortAddress$1(metamask.myAccount || "XXXX")))), React.createElement("span", {
            className: "text-center text-xs mb-4"
        }, "Once withdrawn, you will be able to view your items on Open Sea."), React.createElement("div", {
            className: "flex items-center border-2 rounded-md border-black p-2 mt-2 mb-2 bg-[#e43b44]"
        }, React.createElement("img", {
            src: alert,
            alt: "alert",
            className: "mr-2 w-5 h-5/6"
        }), React.createElement("span", {
            className: "text-xs"
        }, "ANY PROGRESS THAT HAS NOT BEEN SYNCED ON CHAIN WILL BE LOST.")), React.createElement(Button, {
            onClick: d,
            disabled: B.length <= 0
        }, "Withdraw"), React.createElement("span", {
            className: "text-xs underline"
        }, React.createElement("a", {
            href: "https://docs.sunflower-land.com/fundamentals/withdrawing",
            target: "_blank",
            rel: "noreferrer"
        }, "Read more")))
    },
    Withdraw = ({
        onClose: e
    }) => {
        const {
            gameService: A
        } = react.exports.useContext(Context), [t] = useActor(A), [a, n] = react.exports.useState("warning"), s = react.exports.useRef({
            ids: [],
            amounts: [],
            sfl: "0"
        }), [r, i] = react.exports.useState(!1), m = async w => {
            console.log({
                sfl: w
            }), s.current = {
                ids: [],
                amounts: [],
                sfl: w
            }, i(!0)
        }, d = async (w, B) => {
            s.current = {
                ids: w,
                amounts: B,
                sfl: "0"
            }, i(!0)
        }, E = async w => {
            await new Promise(B => setTimeout(B, 1e3)), A.send("WITHDRAW", l(c({}, s.current), {
                captcha: w
            })), e()
        };
        return t.context.whitelistedAt ? React.createElement("div", {
            className: "p-2 text-sm text-center"
        }, "The anti-bot detection system is relatively new and has picked up some strange behaviour. Withdrawing is temporarily restricted while the team investigates this case. Thanks for your patience!") : r ? React.createElement(React.Fragment, null, React.createElement(RecaptchaWrapper, {
            sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
            onChange: E,
            onExpired: () => i(!1),
            className: "w-full m-4 flex items-center justify-center"
        }), React.createElement("p", {
            className: "text-xxs p-1 m-1 text-center"
        }, "Any unsaved progress will be lost.")) : a === "tokens" ? React.createElement(WithdrawTokens, {
            onWithdraw: m
        }) : a === "items" ? React.createElement(WithdrawItems, {
            onWithdraw: d
        }) : React.createElement("div", {
            className: "p-2 flex flex-col justify-center"
        }, React.createElement("span", {
            className: "text-shadow text-sm text-center pb-2"
        }, "You can only withdraw items that you have synced to the blockchain."), React.createElement("div", {
            className: "flex items-center border-2 rounded-md border-black p-2 bg-[#e43b44]"
        }, React.createElement("img", {
            src: alert,
            alt: "alert",
            className: "mr-2 w-5 h-5/6"
        }), React.createElement("span", {
            className: "text-xs"
        }, "ANY PROGRESS THAT HAS NOT BEEN SYNCED ON CHAIN WILL BE LOST.")), React.createElement("div", {
            className: "flex mt-4"
        }, React.createElement(Button, {
            className: "mr-1",
            onClick: () => n("tokens")
        }, "SFL Tokens"), React.createElement(Button, {
            onClick: () => n("items")
        }, "SFL Items")))
    },
    EyeSvg = () => React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        className: "bi bi-eye-fill",
        viewBox: "0 0 16 16"
    }, React.createElement("path", {
        d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
    }), React.createElement("path", {
        d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
    })),
    CloseEyeSvg = () => React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        className: "bi bi-eye-slash-fill",
        viewBox: "0 0 16 16"
    }, React.createElement("path", {
        d: "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
    }), React.createElement("path", {
        d: "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
    })),
    SFLTokenInstructions = () => React.createElement("ol", null, React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "1."), React.createElement("span", null, 'Go to MetaMask and under "Assets" tab click SFL token')), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "2."), React.createElement("span", null, `Click "Send" on the token's main page`)), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "3."), React.createElement("span", null, 'Copy your farm address from above and paste into the "Add Recipient" field')), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "4."), React.createElement("span", null, 'In the "Amount" field, enter the amount of the token you want to deposit')), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "5."), React.createElement("span", null, 'Review the transaction detail and click "Confirm" to send')), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "6."), React.createElement("span", null, 'Once the transaction has completed successfully, open the menu inside Sunflower Land and click "Sync on Chain"'))),
    SFLItemsInstructions = () => React.createElement("ol", null, React.createElement("div", {
        className: "text-xs mb-3 text-center"
    }, React.createElement("span", null, "Only send items from the", React.createElement("a", {
        className: "underline ml-2",
        href: "https://docs.sunflower-land.com/fundamentals/withdrawing",
        target: "_blank",
        rel: "noreferrer"
    }, "Sunflower Land Collectibles"))), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "1."), React.createElement("span", null, 'Go to Opensea and click the "Transfer" button')), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "2."), React.createElement("span", null, 'Copy your farm address from above and paste into the "Address" field')), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "3."), React.createElement("span", null, "Follow the prompts")), React.createElement("li", {
        className: "flex text-xs mb-3"
    }, React.createElement("span", {
        className: "mr-1"
    }, "4."), React.createElement("span", null, 'Once the transaction has completed successfully, open the menu inside Sunflower Land and click "Sync on Chain"'))),
    TOOL_TIP_MESSAGE = "Copy Farm Address";
var Instructions;
(function(e) {
    e[e.token = 0] = "token", e[e.item = 1] = "item"
})(Instructions || (Instructions = {}));
const Deposit = () => {
        var g;
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = react.exports.useState(!1), [n, s] = react.exports.useState(TOOL_TIP_MESSAGE), [r, i] = react.exports.useState(!1), [m, d] = react.exports.useState(null), E = (g = A.context.state) == null ? void 0 : g.farmAddress, u = () => {
            navigator.clipboard.writeText(E), s("Copied!"), setTimeout(() => {
                s(TOOL_TIP_MESSAGE)
            }, 2e3)
        }, w = m === 0, B = m === 1;
        return React.createElement("div", null, React.createElement("div", {
            className: "h-14 w-full",
            style: {
                perspective: "1000px"
            }
        }, React.createElement("div", {
            className: "relative"
        }, React.createElement(OuterPanel, {
            className: "w-full transition-transform duration-700 h-14",
            style: {
                transformStyle: "preserve-3d",
                transform: t ? "rotateX(180deg)" : void 0
            }
        }, React.createElement("div", {
            className: "flex items-center absolute w-full h-full px-2 rotate-0",
            style: {
                backfaceVisibility: "hidden"
            }
        }, React.createElement("img", {
            src: farm,
            className: "h-8 mr-2 z-50"
        }), React.createElement("div", {
            className: "flex flex-1 justify-center items-center"
        }, React.createElement("span", null, shortAddress$1(E)), React.createElement("span", {
            className: "cursor-pointer ml-3",
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1),
            onClick: u
        }, React.createElement(CopySvg, null))), React.createElement("span", {
            className: "cursor-pointer",
            onClick: () => a(!0)
        }, React.createElement(EyeSvg, null))), React.createElement("div", {
            className: "flex items-center justify-center absolute w-full h-full px-2",
            style: {
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)"
            }
        }, React.createElement("span", {
            className: "text-[10px] sm:text-xs mt-2 break-all select-text"
        }, E), React.createElement("span", {
            className: "cursor-pointer ml-3 mt-2",
            onClick: () => a(!1)
        }, React.createElement(CloseEyeSvg, null)))), React.createElement("div", {
            className: `absolute top-12 right-16 mr-5 transition duration-400 pointer-events-none ${r?"opacity-100":"opacity-0"}`
        }, React.createElement(Label, null, n)))), React.createElement("span", {
            className: "text-sm sm:text-lg text-shadow underline block text-center mb-4 mt-6"
        }, "How to deposit?"), React.createElement("div", {
            className: "flex mb-3"
        }, React.createElement(Button, {
            className: classNames("mr-1", {
                "bg-brown-300": w
            }),
            onClick: () => d(0)
        }, "SFL Token"), React.createElement(Button, {
            className: classNames("ml-1", {
                "bg-brown-300": B
            }),
            onClick: () => d(1)
        }, "SFL Items")), w && React.createElement(SFLTokenInstructions, null), B && React.createElement(SFLItemsInstructions, null), React.createElement("div", {
            className: "flex items-center border-2 rounded-md border-black p-2 bg-[#e43b44]"
        }, React.createElement("img", {
            src: alert,
            alt: "alert",
            className: "mr-2 w-5 h-5/6"
        }), React.createElement("span", {
            className: "text-xs"
        }, "DO NOT SEND MATIC OR ANY OTHER NON SFL TOKENS TO YOUR FARM ADDRESS")))
    },
    BankModal = ({
        onClose: e
    }) => {
        const [A, t] = react.exports.useState("deposit");
        return React.createElement(Panel, {
            className: "pt-5 relative max-w-5xl"
        }, React.createElement("div", {
            className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement(Tab, {
            isActive: A === "deposit",
            onClick: () => t("deposit")
        }, React.createElement("img", {
            src: token,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Deposit")), React.createElement(Tab, {
            isActive: A === "withdraw",
            onClick: () => t("withdraw")
        }, React.createElement("img", {
            src: token,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Withdraw"))), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1",
            onClick: e
        })), React.createElement("div", {
            style: {
                minHeight: "200px"
            }
        }, A === "deposit" && React.createElement(Deposit, null), A === "withdraw" && React.createElement(Withdraw, {
            onClose: e
        })))
    },
    Bank = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = React.useState(!1), n = !A.matches("readonly"), s = () => {
            if (n) a(!0), bankAudio.play();
            else return
        };
        return React.createElement("div", {
            className: "z-10 absolute",
            style: {
                width: `${GRID_WIDTH_PX*2.7}px`,
                right: `${GRID_WIDTH_PX*3.8}px`,
                top: `${GRID_WIDTH_PX*4.65}px`
            }
        }, React.createElement("div", {
            className: classNames({
                "cursor-pointer": n,
                "hover:img-highlight": n
            })
        }, React.createElement("img", {
            src: bank,
            alt: "bank",
            onClick: s,
            className: "w-full"
        }), n && React.createElement(Action, {
            className: "absolute -bottom-6 left-2",
            text: "Bank",
            icon: token,
            onClick: s
        })), React.createElement(Modal, {
            show: t,
            onHide: () => a(!1),
            centered: !0
        }, React.createElement(BankModal, {
            onClose: () => a(!1)
        })))
    };
var smoke$1 = "data:image/gif;base64,R0lGODdhDwAlAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAADwAlAIEAAADAy9z///8AAAACNoSPqcutEdyBstqLs968X1EJUNQIJlmeiAkeJ8qKCDW9zkg3o8f3/s9jSWItRoCFWuCSypyhAAAh+QQJCgAAACwCAAEADQAkAIEAAADAy9z///8AAAACOYSPeaHtD6OctNr7RBSBvQ4JnNeIICBqx8ikHHIGJpl09ndi+s73q5hxNWTCWieVM9iWNADzZlwiCgAh+QQJCgAAACwDAAAADAAlAIEAAADAy9z///8AAAACPISPCaHtD6OctFoqoBDshe4Em7dlQHl8Y8mlnciByEeH34XneoPypXz49VywoUHFmiF/xOLtSIvKpE9AAQAh+QQJCgAAACwCAAAADQAlAIEAAADAy9z///8AAAACOYQdp8vtD6OctNopYhAZhq91zyY6icJBHGh+Z3vF8oylDre+KP6VBk/yAVzBFm60aREbRBejyQIUAAAh+QQJCgAAACwBAAkADgAcAIEAAADAy9z///8AAAACM4SPqRabAR2CQkgW6mV761tFEiSOTYem6soelSW9oZOFtUJSL07KdP2hBVuH3IlnXBhLBQAh+QQJCgAAACwBAAkADQAcAIEAAADAy9z///8AAAACN4RvgZsRwpB7Ubp6FN5GQOxd1aSNJYem6qp6X+QK4vLIjkeTcX670RTCTIS2E8I1oxWFJNPQUAAAIfkECQoAAAAsAQAHAA0AHgCBAAAAwMvc////AAAAAjeEj6mbEcKMezDOEGXeRlTmOdaUidyJpqf3KazHUPDihHNTs8oV0hcWe5h2LOBOaDwmVYihz1kAACH5BAkKAAAALAEABgAMAB8AgQAAAMDL3P///wAAAAI3hI95EYrcnIHRUTmxRkILplXbSJae0Dnoqq5pErgKhc5oXHNrLBo3JIF8LLjXgzEk9kzMDdBQAAAh+QQJCgAAACwBAAUADAAgAIEAAADAy9z///8AAAACM4SPeRGK7B6MbNL4MKi66Q+G4iiUVGkmQoAK6sqmB8wlVW3fzs3uDOpjeXI44uiI/FgABQAh+QQJCgAAACwCAAQACgAbAIEAAADAy9z///8AAAACMISPGZG3bR6MDEo7V217+g+GoUAiZECWQIqmBtsKr6BddQfcXMulMhL7OVq4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",
    soup = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMBAMAAACdPPCPAAAABGdBTUEAALGPC/xhBQAAACFQTFRFAAAAGBUl////GTw+GBQl9nV6Y8dNJlxCFxQkGBQkPolIdrFdFAAAAAF0Uk5TAEDm2GYAAABnSURBVAjXJYy7CYBAFAQ3MPBasARTG7AJW3jINXBgZKRiZHafUFDutkr1OdGwCwMAMcYDH4Zii1qiCN+x3nbeYsOMhYofsQ9qKWO9yMzkM2o3sbDxM7Cl7w1/5exaTZuJ/MuVc64HHpD2LEjvbcW+AAAAAElFTkSuQmCC";
const CraftingItems = ({
        items: e
    }) => {
        const [A, t] = react.exports.useState(Object.values(e)[0]), {
            setToast: a
        } = react.exports.useContext(ToastContext), {
            gameService: n,
            shortcutItem: s
        } = react.exports.useContext(Context), [{
            context: {
                state: r
            }
        }] = useActor(n), i = r.inventory, m = (B = 1) => A.ingredients.some(g => g.amount.mul(B).greaterThan(i[g.item] || 0)), d = (B = 1) => r.balance.lessThan(A.price.mul(B)), E = Object.keys(i).includes(A.name), u = !(d() || m()), w = (B = 1) => {
            n.send("item.crafted", {
                item: A.name,
                amount: B
            }), a({
                content: "SFL -$" + A.price.mul(B)
            }), A.ingredients.map(g => {
                a({
                    content: g.item + " -" + g.amount.mul(B)
                })
            }), s(A.name)
        };
        return React.createElement("div", {
            className: "flex"
        }, React.createElement("div", {
            className: "w-3/5 flex flex-wrap h-fit"
        }, Object.values(e).map(B => React.createElement(Box, {
            isSelected: A.name === B.name,
            key: B.name,
            onClick: () => t(B),
            image: ITEM_DETAILS[B.name].image,
            count: i[B.name]
        }))), React.createElement(OuterPanel, {
            className: "flex-1 w-1/3"
        }, React.createElement("div", {
            className: "flex flex-col justify-center items-center p-2 relative"
        }, React.createElement("span", {
            className: "text-shadow text-center"
        }, A.name), React.createElement("img", {
            src: ITEM_DETAILS[A.name].image,
            className: "h-16 img-highlight mt-1",
            alt: A.name
        }), React.createElement("span", {
            className: "text-shadow text-center mt-2 sm:text-sm"
        }, A.description), !E && React.createElement("div", {
            className: "border-t border-white w-full mt-2 pt-1"
        }, A.ingredients.map((B, g) => {
            const C = ITEM_DETAILS[B.item],
                Q = new Decimal(i[B.item] || 0).lessThan(B.amount);
            return React.createElement("div", {
                className: "flex justify-center items-end",
                key: g
            }, React.createElement("img", {
                src: C.image,
                className: "h-5 me-2"
            }), React.createElement("span", {
                className: classNames("text-xs text-shadow text-center mt-2 ", {
                    "text-red-500": Q
                })
            }, B.amount.toNumber()))
        }), React.createElement("div", {
            className: "flex justify-center items-end"
        }, React.createElement("img", {
            src: token,
            className: "h-5 mr-1"
        }), React.createElement("span", {
            className: classNames("text-xs text-shadow text-center mt-2 ", {
                "text-red-500": d()
            })
        }, `$${A.price.toNumber()}`))), React.createElement(Button, {
            disabled: E || !u,
            className: `${E?"pe-none":""} text-xs mt-1`,
            onClick: () => w()
        }, E ? "Already crafted" : "Craft"))))
    },
    Crafting$1 = ({
        onClose: e
    }) => {
        const [A, t] = react.exports.useState("foods");
        return React.createElement(Panel, {
            className: "pt-5 relative"
        }, React.createElement("div", {
            className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement(Tab, {
            isActive: A === "foods",
            onClick: () => t("foods")
        }, React.createElement("img", {
            src: food,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Food"))), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1",
            onClick: e
        })), React.createElement("div", {
            style: {
                minHeight: "200px"
            }
        }, A === "foods" && React.createElement(CraftingItems, {
            items: FOODS()
        })))
    },
    Bakery = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = React.useState(!1), n = !A.matches("readonly"), s = () => {
            a(!0), bakeryAudio.play()
        }, r = () => {
            a(!1)
        };
        return React.createElement("div", {
            className: "z-10 absolute",
            style: {
                width: `${GRID_WIDTH_PX*3}px`,
                right: `${GRID_WIDTH_PX*7}px`,
                top: `${GRID_WIDTH_PX*1}px`
            }
        }, React.createElement("img", {
            src: smoke$1,
            onClick: n ? s : void 0,
            className: "z-10",
            style: {
                position: "absolute",
                top: `-${GRID_WIDTH_PX*2.2}px`,
                left: `${GRID_WIDTH_PX*.5}px`,
                width: `${GRID_WIDTH_PX*1}px`
            }
        }), React.createElement("div", {
            className: classNames({
                "cursor-pointer": n,
                "hover:img-highlight": n
            })
        }, React.createElement("img", {
            src: bakery,
            alt: "bakery",
            onClick: n ? s : void 0,
            className: "w-full"
        }), n && React.createElement(Action, {
            className: "absolute bottom-14 left-0",
            text: "Kitchen",
            icon: soup,
            onClick: s
        })), React.createElement(Modal, {
            centered: !0,
            show: t,
            onHide: r
        }, React.createElement(Crafting$1, {
            onClose: r
        })))
    };
var blacksmith = "./assets/blacksmith_building.df51adb3.gif",
    hammer = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAwMvcvkovi5u0WmmIcz45GBQlmbZdhwAAAAF0Uk5TAEDm2GYAAABDSURBVAjXY2BgYEhgAAM2MTYwK8UwKQzMdxYD00ABsDibi7MYiE4KSTEGCrCphrG5gbihCQwQLlgxiAsCqWFQUyFcADzlCyeFMcRDAAAAAElFTkSuQmCC";
const Crafting = ({
        onClose: e
    }) => {
        var s;
        const [A, t] = react.exports.useState("craft"), {
            authService: a
        } = react.exports.useContext(Context$1), [n] = useActor(a);
        return React.createElement(Panel, {
            className: "pt-5 relative"
        }, React.createElement("div", {
            className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement(Tab, {
            isActive: A === "craft",
            onClick: () => t("craft")
        }, React.createElement("img", {
            src: hammer,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Tools")), React.createElement(Tab, {
            isActive: A === "nfts",
            onClick: () => t("nfts")
        }, React.createElement("img", {
            src: nft,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Rare"))), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1",
            onClick: e
        })), React.createElement("div", {
            style: {
                minHeight: "200px"
            }
        }, A === "craft" && React.createElement(CraftingItems$1, {
            items: TOOLS,
            isBulk: !0,
            onClose: e
        }), A === "nfts" && React.createElement(Rare, {
            items: BLACKSMITH_ITEMS,
            onClose: e,
            hasAccess: !!((s = n.context.token) == null ? void 0 : s.userAccess.mintCollectible)
        })))
    },
    Blacksmith = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = React.useState(!1), n = !A.matches("readonly"), s = () => {
            if (n) a(!0), blacksmithAudio.play();
            else return
        };
        return React.createElement("div", {
            className: "z-10 absolute",
            style: {
                width: `${GRID_WIDTH_PX*6}px`,
                left: `${GRID_WIDTH_PX*9}px`,
                top: `${GRID_WIDTH_PX*6}px`
            }
        }, React.createElement("div", {
            className: classNames({
                "cursor-pointer": n,
                "hover:img-highlight": n
            })
        }, React.createElement("img", {
            src: blacksmith,
            alt: "market",
            onClick: s,
            className: "w-full"
        }), n && React.createElement(Action, {
            className: "absolute -bottom-8 left-1",
            text: "Craft",
            icon: hammer,
            onClick: s
        })), React.createElement(Modal, {
            centered: !0,
            show: t,
            onHide: () => a(!1)
        }, React.createElement(Crafting, {
            onClose: () => a(!1)
        })))
    };
var plant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAvkovdD85PolIJlxCY8dNGBQlRgj2hQAAAAF0Uk5TAEDm2GYAAABASURBVAjXY2BLYwCB1NAEMGUaBqaCwVy2UNOENCAjNcQtFCjOluIaDJJOcQWrSnEGKWITcQSZwKakBNaRBlQPAD1xDcnZIECyAAAAAElFTkSuQmCC";
const MAX_BULK_SEED_BUY_AMOUNT = 10;

function makeBulkSeedBuyAmount(e) {
    return e.lessThan(MAX_BULK_SEED_BUY_AMOUNT) ? e.toDecimalPlaces(0, Decimal$1.ROUND_DOWN).toNumber() : MAX_BULK_SEED_BUY_AMOUNT
}
const Seeds = ({
        onClose: e
    }) => {
        const [A, t] = react.exports.useState(SEEDS()["Sunflower Seed"]), {
            setToast: a
        } = react.exports.useContext(ToastContext), {
            gameService: n,
            shortcutItem: s
        } = react.exports.useContext(Context), [{
            context: {
                state: r
            }
        }] = useActor(n), [i, m] = react.exports.useState(!1), [d, E] = react.exports.useState(!1), u = r.inventory, w = getBuyPrice(A, u), B = (D = 1) => {
            n.send("item.crafted", {
                item: A.name,
                amount: D
            }), a({
                content: "SFL -$" + w.mul(D).toString()
            }), s(A.name)
        }, g = () => {
            E(!0)
        }, C = async D => {
            await new Promise(F => setTimeout(F, 1e3)), n.send("SYNC", {
                captcha: D
            }), e()
        }, Q = (D = 1) => r.balance.lessThan(w.mul(D).toString()), h = A.name.split(" ")[0], f = CROPS()[h], S = r.stock[A.name] || new Decimal$1(0), y = makeBulkSeedBuyAmount(S);
        if (react.exports.useEffect(() => m(hasBoost({
                item: A.name,
                inventory: u
            })), [u, A.name, r.inventory]), d) return React.createElement(RecaptchaWrapper, {
            sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
            onChange: C,
            onExpired: () => E(!1),
            className: "w-full m-4 flex items-center justify-center"
        });
        const I = () => {
            var T;
            if (A.requires && !u[A.requires] || A.disabled) return React.createElement("span", {
                className: "text-xs mt-1 text-shadow"
            }, "Locked");
            if (S == null ? void 0 : S.equals(0)) return React.createElement("div", null, React.createElement("p", {
                className: "text-xxs no-wrap text-center my-1 underline"
            }, "Sold out"), React.createElement("p", {
                className: "text-xxs text-center"
            }, "Sync your farm to the Blockchain to restock"), React.createElement(Button, {
                className: "text-xs mt-1",
                onClick: g
            }, "Sync"));
            const F = INITIAL_STOCK[A.name];
            return F && ((T = u[A.name]) == null ? void 0 : T.gt(F)) ? React.createElement("span", {
                className: "text-xs mt-1 text-shadow text-center"
            }, "No space left") : React.createElement(React.Fragment, null, React.createElement(Button, {
                disabled: Q() || (S == null ? void 0 : S.lessThan(1)),
                className: "text-xs mt-1",
                onClick: () => B(1)
            }, "Buy 1"), y > 1 && React.createElement(Button, {
                disabled: Q(y),
                className: "text-xs mt-1",
                onClick: () => B(y)
            }, "Buy ", y))
        };
        return React.createElement("div", {
            className: "flex"
        }, React.createElement("div", {
            className: "w-3/5 flex flex-wrap h-fit"
        }, Object.values(SEEDS()).map(D => React.createElement(Box, {
            isSelected: A.name === D.name,
            key: D.name,
            onClick: () => t(D),
            image: ITEM_DETAILS[D.name].image,
            count: u[D.name]
        }))), React.createElement(OuterPanel, {
            className: "flex-1 w-1/3"
        }, React.createElement("div", {
            className: "flex flex-col justify-center items-center p-2 relative"
        }, React.createElement(Stock, {
            item: A
        }), React.createElement("span", {
            className: "text-shadow text-center"
        }, A.name), React.createElement("img", {
            src: ITEM_DETAILS[A.name].image,
            className: "w-8 sm:w-12 img-highlight mt-1",
            alt: A.name
        }), React.createElement("div", {
            className: "border-t border-white w-full mt-2 pt-1"
        }, React.createElement("div", {
            className: "flex justify-center items-center"
        }, React.createElement("img", {
            src: timer,
            className: "h-5 me-2"
        }), i && React.createElement("img", {
            src: lightning,
            className: "h-6 me-2"
        }), React.createElement("span", {
            className: "text-xs text-shadow text-center mt-2"
        }, secondsToMidString(getCropTime(f.name, u)))), React.createElement("div", {
            className: "flex justify-center items-end"
        }, React.createElement("img", {
            src: token,
            className: "h-5 mr-1"
        }), React.createElement("span", {
            className: classNames("text-xs text-shadow text-center mt-2", {
                "text-red-500": Q()
            })
        }, `$${w}`))), I())))
    },
    Plants = () => {
        const [e, A] = react.exports.useState(CROPS().Sunflower), {
            setToast: t
        } = react.exports.useContext(ToastContext), [a, n] = React.useState(!1), {
            gameService: s
        } = react.exports.useContext(Context), [{
            context: {
                state: r
            }
        }] = useActor(s), [i, m] = react.exports.useState(!1), d = r.inventory, E = (f = 1) => {
            s.send("item.sell", {
                item: e.name,
                amount: f
            }), t({
                content: "SFL +$" + B(e).mul(f).toString()
            })
        }, u = new Decimal(d[e.name] || 0), w = u.equals(0), B = f => getSellPrice(f, d), g = () => {
            E(1)
        }, C = () => {
            E(u.toNumber()), n(!1)
        }, Q = () => {
            u.equals(1) ? g() : n(!0)
        }, h = () => {
            n(!1)
        };
        return react.exports.useEffect(() => {
            m(hasSellBoost(d))
        }, [d, r.inventory]), React.createElement("div", {
            className: "flex"
        }, React.createElement("div", {
            className: "w-3/5 flex flex-wrap h-fit"
        }, Object.values(CROPS()).map(f => React.createElement(Box, {
            isSelected: e.name === f.name,
            key: f.name,
            onClick: () => A(f),
            image: ITEM_DETAILS[f.name].image,
            count: d[f.name]
        }))), React.createElement(OuterPanel, {
            className: "flex-1 w-1/3"
        }, React.createElement("div", {
            className: "flex flex-col justify-center items-center p-2 "
        }, React.createElement("span", {
            className: "text-shadow"
        }, e.name), React.createElement("img", {
            src: ITEM_DETAILS[e.name].image,
            className: "w-8 sm:w-12",
            alt: e.name
        }), React.createElement("span", {
            className: "text-shadow text-center mt-2 sm:text-sm"
        }, e.description), React.createElement("div", {
            className: "border-t border-white w-full mt-2 pt-1"
        }, React.createElement("div", {
            className: "flex justify-center items-end"
        }, React.createElement("img", {
            src: token,
            className: "h-5 mr-1"
        }), i && React.createElement("img", {
            src: lightning,
            className: "h-6 me-2"
        }), React.createElement("span", {
            className: "text-xs text-shadow text-center mt-2 "
        }, `$${B(e)}`))), React.createElement(Button, {
            disabled: u.lessThan(1),
            className: "text-xs mt-1",
            onClick: g
        }, "Sell 1"), React.createElement(Button, {
            disabled: w,
            className: "text-xs mt-1 whitespace-nowrap",
            onClick: Q
        }, "Sell All"))), React.createElement(Modal, {
            centered: !0,
            show: a,
            onHide: h
        }, React.createElement(Panel, {
            className: "md:w-4/5 m-auto"
        }, React.createElement("div", {
            className: "m-auto flex flex-col"
        }, React.createElement("span", {
            className: "text-sm text-center text-shadow"
        }, "Are you sure you want to ", React.createElement("br", {
            className: "hidden md:block"
        }), "sell all your ", e.name, "?"), React.createElement("span", {
            className: "text-sm text-center text-shadow mt-1"
        }, "Total: ", u.toNumber())), React.createElement("div", {
            className: "flex justify-content-around p-1"
        }, React.createElement(Button, {
            disabled: w,
            className: "text-xs",
            onClick: C
        }, "Yes"), React.createElement(Button, {
            disabled: w,
            className: "text-xs ml-2",
            onClick: h
        }, "No")))))
    },
    MarketItems = ({
        onClose: e
    }) => {
        var r;
        const [A, t] = react.exports.useState("buy"), {
            authService: a
        } = react.exports.useContext(Context$1), [n] = useActor(a), s = i => {
            t(i)
        };
        return React.createElement(Panel, {
            className: "pt-5 relative"
        }, React.createElement("div", {
            className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement(Tab, {
            isActive: A === "buy",
            onClick: () => s("buy")
        }, React.createElement("img", {
            src: seeds$1,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Buy")), React.createElement(Tab, {
            isActive: A === "sell",
            onClick: () => s("sell")
        }, React.createElement("img", {
            src: sunflowerPlant$1,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Sell")), React.createElement(Tab, {
            isActive: A === "rare",
            onClick: () => s("rare")
        }, React.createElement("img", {
            src: goldenCauliflower,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Rare"))), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1",
            onClick: e
        })), A === "buy" && React.createElement(Seeds, {
            onClose: e
        }), A === "sell" && React.createElement(Plants, null), A === "rare" && React.createElement(Rare, {
            items: MARKET_ITEMS,
            onClose: e,
            hasAccess: !!((r = n.context.token) == null ? void 0 : r.userAccess.mintCollectible)
        }))
    },
    Market = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = React.useState(!1), n = !A.matches("readonly"), s = () => {
            a(!0), marketAudio.play()
        };
        return React.createElement("div", {
            id: Section.Shop,
            className: classNames("absolute", {
                "cursor-pointer": n,
                "hover:img-highlight": n
            }),
            style: {
                width: `${GRID_WIDTH_PX*3}px`,
                left: `${GRID_WIDTH_PX*3}px`,
                top: `${GRID_WIDTH_PX*5}px`
            }
        }, React.createElement("img", {
            src: market,
            alt: "market",
            onClick: n ? s : void 0,
            className: "w-full"
        }), n && React.createElement(Action, {
            className: "absolute top-5 left-4",
            text: "Shop",
            icon: plant,
            onClick: s
        }), React.createElement(Modal, {
            centered: !0,
            show: t,
            onHide: () => a(!1)
        }, React.createElement(MarketItems, {
            onClose: () => a(!1)
        })))
    };
var wishingWell = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAtCAMAAAD8z0klAAAABGdBTUEAALGPC/xhBQAAADlQTFRFREtOAAAApnwyqsjT5NByyZxOWmJmYshMelgcboGIq8jTSplHYTglTWJpREtO5KZywoVpkFtCR0E783zRkgAAAAJ0Uk5T+wCB2/VOAAABxUlEQVQ4y5XUiZKDIAwGYOh6cChC3v9h988BYjud2c1urZjPEFHr/DMI8XbIveUvxJtyM0C6IWqtM3JzAaQPhLC7lHsWaPiu7VnKSYOWRxEmhw0YgTlpsINDyXEjMEetDVBHlYFaY9LbbNdNatNStRrhy0D+QRrPdwjxaOa4mpDrSfCPVvy/yPVH0uMrkcWVZfpGDNhafhC9PVeV6As+EytQR1ipTtoHmFDrt/HO8719qIvsTo+8PV46bkZkv749jDQd7kQKlBI4SnD6KswEJzU+FpYlLK+wBMlrKdIH0zPBOoR1CetrXQOuBERz9gYIqSAA2ISq5PEG2ERCwtonugn9MInF2g0hxsgkUSeUhJQYyxbjFtYNWIiYicSNU6i0brAPQiAJkyMLtKEK71GhVBK3wyQV7OMM2jrZuPeUUomdpFgw5ko9eFhmEvli5Jhm9FPKWU4hmXCJxZS5onkm2bu8S6MxChKGnfPkPL5pzy5nwkiJfTh76gZiEEZGLMtznTuB+Iyp7JCw0/YFogi3y+Y+U0NHREo8EO3T/OfcSLY7zYZmsuNPS/hBEFjTuwpWImcV43fX1G43YB9g/vXmtnPf3MD7X+HHR7UanUVTAAAAAElFTkSuQmCC",
    icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCBAMAAAB4LQ3OAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAA/+s2cT02+6og//lOVikkvkourRk0AwAAAAF0Uk5TAEDm2GYAAACaSURBVGje7dnBCYAwEETRtGALtmALtmAL9l+CZA8OuyBEdMMe/pxCYN5Jk2hae8rp094HAeGjECp7z9JjoxEQAeE3QZXtjpXDyCIQAWGCIObwURkBYZYgxiqrj82FNRcBIUMIO73K4anWXDgRICBkCNrfBwSdCBAQ0gTeTYRCAmcYhLoC33oIJQX+iSHUELg7QCgpcMeKUEK4AINdEfwFNE3pAAAAAElFTkSuQmCC";
const wishingWellAddress = CONFIG.WISHING_WELL_CONTRACT,
    LOCKED_SECONDS = 60;
async function loadWishingWell() {
    const e = metamask.getWishingWell().getBalance(),
        A = metamask.getWishingWell().canCollect(),
        t = metamask.getWishingWell().lastCollected(),
        a = metamask.getPair().getBalance(),
        n = metamask.getToken().balanceOf(wishingWellAddress),
        [s, r, i, m, d] = await Promise.all([e, A, a, t, n]);
    let E;
    const u = new Date().getTime() / 1e3 - m;
    if (u <= LOCKED_SECONDS) {
        const w = LOCKED_SECONDS - u;
        E = secondsToLongString(w)
    }
    return {
        myTokensInWell: s,
        totalTokensInWell: d,
        canCollect: r,
        lpTokens: i,
        lockedTime: E
    }
}
const API_URL = CONFIG.API_URL;
async function collectFromWell({
    farmId: e,
    sessionId: A,
    token: t,
    amount: a,
    captcha: n
}) {
    const s = await window.fetch(`${API_URL}/wishing-well`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${t}`
        },
        body: JSON.stringify({
            sessionId: A,
            farmId: e,
            tokens: a,
            captcha: n
        })
    });
    if (s.status === 429) throw new Error(ERRORS.TOO_MANY_REQUESTS);
    const r = await s.json();
    await metamask.getWishingWell().collectFromWell(r)
}
const wishingWellMachine = e => createMachine({
        id: "wishingWell",
        initial: "loading",
        context: {
            state: {
                canCollect: !1,
                lpTokens: "0",
                myTokensInWell: "0",
                totalTokensInWell: "0",
                lockedTime: ""
            }
        },
        states: {
            loading: {
                invoke: {
                    src: async () => ({
                        state: await loadWishingWell()
                    }),
                    onDone: {
                        target: "ready",
                        actions: assign({
                            state: (A, t) => t.data.state
                        })
                    },
                    onError: {
                        target: "error"
                    }
                }
            },
            ready: {
                on: {
                    WISH: {
                        target: "wishing"
                    },
                    SEARCH: {
                        target: "captcha"
                    }
                }
            },
            captcha: {
                on: {
                    VERIFIED: {
                        target: "searching"
                    }
                }
            },
            wishing: {
                invoke: {
                    src: async () => {
                        await metamask.getWishingWell().wish()
                    },
                    onDone: {
                        target: "wished"
                    },
                    onError: {
                        target: "error"
                    }
                }
            },
            searching: {
                invoke: {
                    src: async (A, t) => {
                        console.log({
                            contextIs: A.state
                        });
                        const a = Math.min(Number(A.state.lpTokens), Number(A.state.totalTokensInWell));
                        console.log({
                            tokensToPull: a
                        }), console.log({
                            event: t
                        }), await collectFromWell({
                            farmId: e.farmId,
                            sessionId: e.sessionId,
                            amount: a.toString(),
                            token: e.rawToken,
                            captcha: t.captcha
                        })
                    },
                    onDone: {
                        target: "searched"
                    },
                    onError: {
                        target: "error"
                    }
                }
            },
            wished: {
                type: "final"
            },
            searched: {
                type: "final"
            },
            error: {
                type: "final"
            }
        }
    }),
    shortAddress = e => e ? `${e.slice(0,5)}...${e.slice(-4)}` : "",
    WishingWellModal = () => {
        const {
            authService: e
        } = react.exports.useContext(Context$1), [A] = useActor(e), [t, a] = useMachine(wishingWellMachine(A.context)), n = () => {
            if (t.matches("error")) return React.createElement("span", null, "Something went wrong!");
            if (t.matches("captcha")) return React.createElement(RecaptchaWrapper, {
                sitekey: "6Lfqm6MeAAAAAFS5a0vwAfTGUwnlNoHziyIlOl1s",
                onChange: r => a("VERIFIED", {
                    captcha: r
                }),
                className: "w-full m-0 flex items-center justify-center"
            });
            if (t.matches("loading")) return React.createElement("span", {
                className: "loading text-sm mt-3"
            }, "Loading");
            if (t.matches("wishing")) return React.createElement("span", {
                className: "loading text-sm mt-3"
            }, "Making a wish");
            if (t.matches("searching")) return React.createElement("span", {
                className: "loading text-sm mt-3"
            }, "Searching");
            if (t.matches("wished")) return React.createElement("span", {
                className: "text-sm mt-4 text-center"
            }, "Your wish has been made. Come back in 3 days to see how lucky you were.");
            if (t.matches("searched")) return React.createElement("span", null, "WooHoo! You found some tokens in the well. They have been sent to:", " ", shortAddress(metamask.myAccount));
            const s = t.context.state;
            return console.log({
                wishingWell: s
            }), Number(s.lpTokens) <= 0 ? React.createElement("div", {
                className: "py-2 mt-4 border-white flex flex-col items-center"
            }, React.createElement("span", {
                className: "text-sm text-center"
            }, "To make a wish you need the magic LP tokens in your wallet."), React.createElement("a", {
                className: "text-xxs underline cursor-pointer",
                href: "https://docs.sunflower-land.com/fundamentals/wishing-well-locked-liquidity",
                target: "_blank",
                rel: "noreferrer"
            }, "How do I do get tokens?")) : s.myTokensInWell === "0" ? React.createElement("div", {
                className: "py-2 border-white flex flex-col items-center"
            }, React.createElement("span", {
                className: "text-xs"
            }, "Looks like you have those magic LP tokens in your wallet!"), React.createElement(Button, {
                className: "text-sm mt-1",
                onClick: () => a("WISH")
            }, "Make a wish")) : s.lockedTime ? React.createElement("div", {
                className: "flex items-center mt-4"
            }, React.createElement("img", {
                src: timer,
                className: "w-6 mr-4 ml-2"
            }), React.createElement("span", {
                className: "text-sm"
            }, s.lockedTime, " left")) : React.createElement("div", null, React.createElement("div", {
                className: "py-2 mt-2 border-t border-white flex flex-col items-center"
            }, React.createElement(Button, {
                disabled: !!s.lockedTime,
                className: "text-sm mt-1",
                onClick: () => a("SEARCH")
            }, "Search well for SFL")))
        };
        return React.createElement(Panel, {
            className: "relative"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement("div", {
            className: "w-2/3 p-2"
        }, React.createElement("div", {
            className: "flex items-start mb-2"
        }, React.createElement("img", {
            src: token,
            alt: "hat",
            className: "h-8 mr-2"
        }), React.createElement("span", {
            className: "text-sm"
        }, "The well is filled with SFL.")), n()), React.createElement("div", {
            className: "flex-1 p-2 flex flex-col items-center"
        }, React.createElement("span", {
            className: "text-xxs"
        }, shortAddress(metamask.myAccount)), React.createElement("img", {
            src: wishingWell,
            alt: "wishing well",
            className: "w-full"
        }), t.context.state && React.createElement("div", {
            className: "flex items-center justify-center mt-2"
        }, React.createElement("img", {
            src: icon,
            className: "w-4 img-highlight mr-2"
        }), React.createElement("span", {
            className: "text-xxs"
        }, Number(lib.fromWei(t.context.state.totalTokensInWell.toString())).toFixed(2), " ", "SFL")), React.createElement("a", {
            className: "text-xs underline cursor-pointer text-center mt-1",
            href: "https://docs.sunflower-land.com/fundamentals/wishing-well-locked-liquidity",
            target: "_blank",
            rel: "noreferrer"
        }, "Read more"))))
    },
    WishingWell = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = React.useState(!1), n = !A.matches("readonly"), s = () => {
            if (n) wishingWellAudio.play(), a(!0);
            else return
        };
        return React.createElement("div", {
            className: "z-10 absolute",
            style: {
                width: `${GRID_WIDTH_PX*1.6}px`,
                left: `${GRID_WIDTH_PX*10.4}px`,
                top: `${GRID_WIDTH_PX*-3}px`
            }
        }, React.createElement("div", {
            className: classNames({
                "cursor-pointer": n,
                "hover:img-highlight": n
            })
        }, React.createElement("img", {
            src: wishingWell,
            alt: "market",
            onClick: s,
            className: "w-full"
        }), n && React.createElement(Action, {
            className: "absolute -bottom-6 -left-3",
            text: "Wish",
            icon,
            onClick: s
        })), React.createElement(Modal, {
            centered: !0,
            show: t,
            onHide: () => a(!1)
        }, React.createElement(WishingWellModal, {
            key: t ? "1" : "0",
            onClose: () => a(!1)
        })))
    },
    Markdown = ({
        children: e
    }) => React.createElement(ReactMarkdown, {
        remarkPlugins: [remarkGfm]
    }, e),
    Inbox = ({
        inbox: e,
        isLoading: A,
        onRead: t
    }) => React.createElement(OuterPanel, {
        className: "relative"
    }, A ? React.createElement(InnerPanel, null, "Loading...") : e.length ? React.createElement(Accordion, null, e.map(({
        title: a,
        body: n,
        unread: s
    }, r) => React.createElement(Accordion.Item, {
        key: r,
        eventKey: r.toString(),
        className: "flex-grow-1 bg-transparent",
        as: OuterPanel
    }, React.createElement(Accordion.Button, {
        onClick: () => t(r),
        className: "p-2 text-white text-shadow bg-transparent"
    }, s && React.createElement("img", {
        src: alert,
        className: "w-3 mx-3"
    }), React.createElement(Markdown, null, a || `${n.slice(0,10)}...`)), React.createElement(Accordion.Body, {
        className: "text-sm mt-2 text-shadow text-break",
        as: InnerPanel
    }, React.createElement(Markdown, null, n))))) : React.createElement(InnerPanel, null, "No messages")),
    MESSAGES_KEY = "readMessages";
var Halvening;
(function(e) {
    e.MILESTONE_1 = "5e+6", e.MILESTONE_2 = "10e+6"
})(Halvening || (Halvening = {}));
async function getSFLSupply() {
    const e = await metamask.getToken().totalSupply();
    return new Decimal(lib.fromWei(e))
}

function cleanupCache(e) {
    const A = e.filter(t => !t.unread).map(t => t.id);
    A.length ? localStorage.setItem(MESSAGES_KEY, JSON.stringify(A)) : localStorage.removeItem(MESSAGES_KEY)
}

function getNextHalvening(e) {
    if (e.lessThan(new Decimal(Halvening.MILESTONE_1))) return new Decimal(Halvening.MILESTONE_1);
    if (e.lessThan(new Decimal(Halvening.MILESTONE_2))) return new Decimal(Halvening.MILESTONE_2);
    const A = e.idiv(Halvening.MILESTONE_2).add(1).times(10);
    return new Decimal(`${A}e+6`)
}
async function getInbox() {
    const e = await getSFLSupply(),
        A = getNextHalvening(e);
    return [{
        id: "sfl-supply",
        title: "SFL Supply",
        body: `Total SFL: ${e.toDecimalPlaces(3,Decimal.ROUND_DOWN).toNumber().toLocaleString()}  
        &nbsp;  
        Next halvening is at ${A.toNumber().toLocaleString()}  
        &nbsp;   
        **Note: this value is read from the Blockchain. Other farmers may not have synced yet.**
      `
    }, {
        id: "2022-05-04",
        title: "May 2022 Dates",
        body: `Dates shown are in your **local** timezone. Check our social pages for NFT release dates.  
        &nbsp;  
        ${formatDateTime("2022-05-04T00:00:00Z")}  
        - End of V1 Migration  
        &nbsp;  
        ${formatDateTime("2022-05-09T12:00:00Z")}  
        - SFL Withdrawals
        &nbsp;  
        ${formatDateTime("2022-05-30T00:00:00Z")}\u{1F534}  
        - Rarible  
        &nbsp;  
        \u{1F534} - tentative`
    }, {
        id: "2022-03-25",
        title: "Welcome to Beta!",
        body: "Welcome to open beta! The game is still in its early stages and we are so grateful that you are here."
    }]
}

function getReadMessages() {
    return JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]")
}

function updateCache(e) {
    const A = [...getReadMessages(), e];
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(A))
}
var baldMan = "data:image/gif;base64,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";
const Mail = () => {
        const [e, A] = react.exports.useState(!1), [t, a] = react.exports.useState(!1), [n, s] = react.exports.useState([]), [r, i] = react.exports.useState(!1), m = async () => {
            a(!0);
            const E = getReadMessages();
            let u = await getInbox();
            u = u.map(w => l(c({}, w), {
                unread: !(E == null ? void 0 : E.includes(w.id))
            })), s(u), cleanupCache(u), a(!1)
        }, d = E => {
            if (!n[E].unread) return;
            const u = [...n];
            u[E].unread = !1, s(u), updateCache(u[E].id)
        };
        return react.exports.useEffect(() => {
            m()
        }, []), react.exports.useEffect(() => {
            e && m()
        }, [e]), react.exports.useEffect(() => {
            const E = n.some(u => u.unread);
            i(E)
        }, [n]), React.createElement("div", {
            className: "z-5 absolute align-items-center w-10",
            style: {
                left: `${GRID_WIDTH_PX*10.5}px`,
                top: `${GRID_WIDTH_PX*3.5}px`
            }
        }, r && React.createElement("img", {
            src: alert,
            className: "w-3 mx-3 pb-2 animate-float"
        }), React.createElement("img", {
            src: baldMan,
            className: "absolute w-10 z-10 hover:cursor-pointer hover:img-highlight npc-shadow",
            onClick: () => A(!0)
        }), React.createElement("span", {
            className: "npc-shadow"
        }), React.createElement(Modal, {
            centered: !0,
            show: e,
            onHide: () => A(!1)
        }, React.createElement(Inbox, {
            inbox: n,
            isLoading: t,
            onRead: d
        })))
    },
    Town = () => React.createElement("div", {
        id: Section.Town,
        className: "z-10 absolute",
        style: {
            width: `${GRID_WIDTH_PX*25}px`,
            height: `${GRID_WIDTH_PX*9}px`,
            left: `calc(50% - ${GRID_WIDTH_PX*-15.8}px)`,
            top: `calc(50% - ${GRID_WIDTH_PX*18}px)`
        }
    }, React.createElement(Market, null), React.createElement(Bank, null), React.createElement(Bakery, null), React.createElement(Blacksmith, null), React.createElement(WishingWell, null), React.createElement(Mail, null)),
    RejectedSignTransaction = ({
        onTryAgain: e
    }) => React.createElement("div", {
        className: "flex flex-col text-center text-shadow items-center p-1"
    }, React.createElement("div", {
        className: "flex mb-3 items-center"
    }, React.createElement("img", {
        src: alert,
        alt: "Warning",
        className: "w-3 mr-3"
    })), React.createElement("p", {
        className: "text-center mb-3"
    }, "Transaction Rejected!"), React.createElement("p", {
        className: "text-center mb-4 text-xs"
    }, "You need to accept the transaction in the metamask popup to continue", " ", React.createElement("a", {
        className: "underline",
        href: "https://docs.sunflower-land.com/support/terms-of-service"
    }, "Terms of Service"), "."), React.createElement("p", {
        className: "text-center mb-4 text-xs"
    }, "This request will not trigger a blockchain transaction or cost any gas fees."), React.createElement(Button, {
        onClick: e,
        className: "overflow-hidden mb-2"
    }, React.createElement("span", null, "Try Again"))),
    ConnectingError = () => React.createElement("div", {
        className: "flex flex-col items-center p-2"
    }, React.createElement("span", {
        className: "text-center"
    }, "Something went wrong!"), React.createElement("img", {
        src: humanDeath,
        className: "h-20 my-2"
    }), React.createElement("span", {
        className: "text-xs text-center mt-2 mb-1"
    }, "Looks like we were unable to connect. Please refresh and try again.")),
    DuplicateUser = () => React.createElement("div", {
        className: "flex flex-col text-center text-shadow items-center p-1"
    }, React.createElement("div", {
        className: "flex mb-3 items-center ml-8"
    }, React.createElement("img", {
        src: humanDeath,
        alt: "Warning",
        className: "w-full"
    })), React.createElement("p", {
        className: "text-center mb-3"
    }, "Already signed up!"), React.createElement("p", {
        className: "text-center mb-4 text-xs"
    }, "It looks like you have already registered for beta testing using a different address. Only one address can be used during beta testing. ")),
    Congestion = () => React.createElement("div", {
        id: "gameerror",
        className: "flex flex-col items-center p-2"
    }, React.createElement("span", {
        className: "text-shadow text-center"
    }, "Can't connect to Polygon"), React.createElement("img", {
        src: humanDeath,
        className: "w-1/2 -mt-4 ml-8"
    }), React.createElement("span", {
        className: "text-shadow text-xs text-center"
    }, "We are trying our best but looks like Polygon is getting a lot of traffic or you have lost your connection."), React.createElement("span", {
        className: "text-shadow text-xs text-center"
    }, "If this error continues please try changing your Metamask RPC")),
    SessionExpired = () => React.createElement("div", {
        className: "flex flex-col text-center text-shadow items-center p-1"
    }, React.createElement("div", {
        className: "flex mb-3 items-center ml-8"
    }, React.createElement("img", {
        src: humanDeath,
        alt: "Warning",
        className: "w-full"
    })), React.createElement("p", {
        className: "text-center mb-3"
    }, "Session expired!"), React.createElement("p", {
        className: "text-center mb-4 text-xs"
    }, "It looks like your session has expired. Please refresh the page to continue playing.")),
    TooManyRequests = () => React.createElement("div", {
        className: "flex flex-col text-center text-shadow items-center p-1"
    }, React.createElement("div", {
        className: "flex mb-3 items-center ml-8"
    }, React.createElement("img", {
        src: humanDeath,
        alt: "Warning",
        className: "w-full"
    })), React.createElement("p", {
        className: "text-center mb-3"
    }, "Too many requests!"), React.createElement("p", {
        className: "text-center mb-4 text-xs"
    }, "Looks like you have been busy! Please try again later.")),
    ErrorMessage = ({
        errorCode: e
    }) => {
        const {
            authService: A
        } = react.exports.useContext(Context$1), [t, a] = useActor(A);
        return react.exports.useEffect(() => {
            const n = document.querySelector("body");
            return n && (n.style.pointerEvents = "none"), () => {
                n && (n.style.pointerEvents = "initial")
            }
        }, []), console.log({
            errorCode: e
        }), e === "NO_WEB3" ? React.createElement(Web3Missing, null) : e === "WRONG_CHAIN" ? React.createElement(WrongChain, null) : e === "REJECTED_TRANSACTION" ? React.createElement(RejectedSignTransaction, {
            onTryAgain: () => a("REFRESH")
        }) : e === "NO_FARM" ? React.createElement(Beta, null) : e === "BLOCKED" ? React.createElement(Blocked, null) : e === "DISCORD_USER_EXISTS" ? React.createElement(DuplicateUser, null) : e === "NETWORK_CONGESTED" ? React.createElement(Congestion, null) : e === "SESSION_EXPIRED" ? React.createElement(SessionExpired, null) : e === "TOO_MANY_REQUESTS" ? React.createElement(TooManyRequests, null) : React.createElement(ConnectingError, null)
    };
var house = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA7CAMAAAAKG/l2AAAABGdBTUEAALGPC/xhBQAAAFRQTFRFAAAAUKNBaTk3GTw+pvn/i5u0JJOiHEmPFDdhwMvcCmSSPolIWmmIOkRmSqJq6LeW////6tSquG9QJitELOj1vkovHm3VAJnbwoVpEk6Jcz455KZy2SYaFQAAAAF0Uk5TAEDm2GYAAAKASURBVEjHjZaLdpswDIbZuq4hGYUCBku8/3tOVyNuSXROCdj/h61Yv9KquowkUb0biN0PRYf4prxtFWjbNxCWt22W4LsXSJS/RtDlKU0SKTlyymDXdSpHnCUQFaEJvABUPsEoAZMiV0D2t6+Ar5JPgcRyGEnvABEjoExcJD2ReLsCQdNF0hXPk3YLjDp6DoxXwHgJ8Pb3OcjlHJDtH3Pgy6st6cG9sSUHLJ4DGHLQ8n6aA+JiOQAsiwLLYssccyA5zepu6G7R4uY7ONuSyJdMQJSvyA4wec6wylFiReBEnrm8Xa5dw5G1vFHlTdPQ69UPKl8kHGFACpC7Cb2zoYFmnGUuyCOSkbuOAJn0tELXCGByHCRwRQwQuKkJqJuZyz6lnsMBeWBElAoANDXNEUBEsm+zV6C3x4QAalM+x6n5rOv6UwDfugP+LE4E99jwj2PYAHoOATDX0dnevxyYoABJgRQBOe3b3/vXjQGQwtMkOU8D/Bm9Ym+3O63QUCZSeJgvAmf2q65AAOx9Y7GeHwN/CuBGEzvHWJkIuMdkmTkuwJY2hHMQIPaJuVhTozPrACftroutay7WNMCsQ5HL17rpE1uvFevwyyPgOezlwaChc4Q+Ea25N+gI2xyCPIWISNjSVr4sR7fFzgHX8iMCxdMm709iRYKnVX5Vd44ET59t5mxj5ulX8oCgNDJ6eA2gdA79baZSTNZW0LzvUYYTMqS9kms3ZZvhdgxDuZRhBpbfAbC20kvh8KnO/AllWAA8Beh/Hv6Ty1PA2tAesOEDYG0l9VugDB+AbDN5C5Th45Y8uNV+MPAxTaHNrMD3DhgeIYYToPrexOMRfit/PR7b2ar6D8/uyX9Za1K4AAAAAElFTkSuQmCC",
    smoke = "data:image/gif;base64,R0lGODdhFAAgAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAFAAgAIEAAAD////Ay9wAAAACJoSPqcvtD6OctLqAscwcci48whcIoWimJ6Su1gvH8kzX9o3n+m4XACH5BAkKAAAALAAABgASABkAgQAAAP///8DL3AAAAAImhI+ZwaHf2kMiMjGNqG1nvYXfEWLjiabqyrbuC8fyTNdqaX74VgAAIfkECQoAAAAsAAAFABMAGgCBAAAA////wMvcAAAAAiqEj6nB6sbiSyIyMY+oF2ezhR8ijuaJpurKtu4Lx/IsW4G5RdsY9ny/KwAAIfkECQoAAAAsAQADABMAHACBAAAA////wMvcAAAAAiyEj6nLF9HWezFNUZHYOJ/theJIluaJpurKtu5rCNPTNfJMRxsO2txfYwB7BQAh+QQJCgAAACwCAAEAEgAeAIEAAAD////Ay9wAAAACL4SPqcsQvYKEST56hMZI8A+G4kiW5omm6sq2hwVDAmx5i0ZLm6LNcH/rCYHB4aYAACH5BAkKAAAALAIAAQASAB8AgQAAAP///8DL3AAAAAIuRICpa3EMgZgxioqz3rz7D4biSJbmiaZq57QOJrjtBU2yQzFT7O71DvT9grlPAQAh+QQJCgAAACwCAAAAEgAgAIEAAAD////Ay9wAAAACMISPecHqJuKbtNqLs968+w+G4kiW5siklZC2whO1qaTEckAnEevmyA4EwoK7ldBQAAAh+QQJCgAAACwDAAAAEQAgAIEAAADAy9z///8AAAACKwyOqcvtD6OctNqLs968+w+Gj0CST1CmxoKmKuu+StC6NEvn+jrv+alDFAAAIfkECQoAAAAsCQARAAsADwCBAAAA////wMvcAAAAAhqEj6nL7RdiTLLCarHeVYjthV8kliZghkh5FAAh+QQJCgAAACwJAAsACwAUAIEAAAD////Ay9wAAAACJISPqcvtb4Kc4dALrt58iy6EXkiWJFAG5SFKYfK5ivjCK2LWBQAh+QQJCgAAACwJAAkACwAWAIEAAAD////Ay9wAAAACK4SPqRm9DZUQYa4pljawnw4CEDaBAWN+ozmWpuW2B4kl9KaFSGzNdOa7AQoAIfkECQoAAAAsCQAHAAsAGACBAAAA////wMvcAAAAAjCEj6kZvdDCE/QBYbORWsV/RJQQQQ7ylVvKiiRbjXJlzHTXveKhf9jVC9BsI57NUAAAIfkECQoAAAAsCAAFAAwAGgCBAAAA////wMvcAAAAAjSEj6kL4SxcEEtYCzHbXIUOSp4kHtJVlkZKklTTOlp8Idet1CATf0dEM1h6GJSreEu+lLUCACH5BAkKAAAALAgABQAMABsAgQAAAP///8DL3AAAAAI0hB15C5IhmBGUymmv3rzHDl7PuIwm8lSkyTZs2jhsVtUZZof68S6y+aG8LKpRJWar4ZKhAgAh+QQJCgAAACwHAAUADQAbAIEAAAD////Ay9wAAAACOYQfeWuSIdgRlMppr968+w8820My5LmcqKGWjdMu1RnJVbXh4LXKbQ2g/GpCVWZG0t2WmSCzidEBCgAh+QQJCgAAACwGAAQADgAcAIEAAAD////Ay9wAAAACOYSPqcGKAqE7cdqLs94s3A4uYIiM42N2j5B6KwQKSkRf1YZb55zKVBvwAVgtIcwkMdCWSSWz+WoWAAAh+QQJCgAAACwFAAQADwAcAIEAAAD////Ay9wAAAACPIRvocgm/xqDstqLs86qh+p5TRgypIgIZyBMj0e5UNzM0YZrJUhK64f4LQ5CoENFuh1filnKZpNBK1FDAQAh+QQJCgAAACwEAAMAEAAcAIEAAAD////Ay9wAAAACQISPqRi9KuKbtNqLc22c8v984iKCUBkISySg3cG2LhK572E7TJ7IqErzfSTBmBHCSrEetQaRyQFOak9mrHI0FAAAIfkECQoAAAAsAwABABEAHgCBAAAAwMvc////AAAAAkOEj6nLHBKanLTaizMWXHYOKiAYPGUykmWEpNy5uI97pLMr1K+6hkbfaQWFw5HiJjsiVYuSjdVcrSZSqOaKRUwp1UMBACH5BAkKAAAALAMAAQARAB4AgQAAAMDL3P///wAAAAJFhI8Qye0Po5y0WicyzYJxbQRi8nHHgpQcygTqCHSI+Ilsa9uqHOYrDSIFDSZh8OPZFWeu1+2Uyz2isIv12rBRtFgI11AAACH5BAkKAAAALAIABQARABcAgQAAAP///8DL3AAAAAI8hI+pyx3fkHhBJCqFtodis0net0xjxWijZgTKBnNp3EGldboMtZGI76vlZL8hUchjzWiRUOQJjR6cUGoBACH5BAkKAAAALAEABQASABUAgQAAAP///8DL3AAAAAI5hI8Wm32ygnBNWEsrTjHz2GUQGDoWKU2AilzuRr2wt56oh5bfcoFO7qsAJaYRadaSIRNKmvMJvRwKACH5BAkKAAAALAAABQASABIAgQAAAP///8DL3AAAAAIyhI8Xm32ygnBNWIsiQzfrTX3RREEfRgHXmj5sm0awIraiHN5gou+cWStZTq1VZ6ZCFQAAIfkECQoAAAAsAAAEABEAEgCBAAAA////wMvcAAAAAi+Ej6lr4ZyElM2FNau9UGwndJ5FiVMIGWeaWqy2QV+8zHRkP4qUM+eGwpxKrAygAAAh+QQJCgAAACwAAAQAEQAQAIEAAAD////Ay9wAAAACLoSPF5ttAqFZwYE4abVPB8FdAiWFURmKYGp5W+u+SUw5NNOM8ZpEGuY4nUzCQwEAIfkECQoAAAAsAQADAA8AEQCBAAAA////wMvcAAAAAiiEj6kaDb6AmA3G18Q1c26ufeL4VRZjnkdqomygCG+IdFW3dPql00ABACH5BAkKAAAALAIAAQAOABMAgQAAAP///8DL3AAAAAInhI+pC8EgQgzuNWqhEBn2D4ZigjHUWZEoxSEr2x7vFhsrvZw4sycFACH5BAkKAAAALAIAAQANABEAgQAAAP///8DL3AAAAAIiRICpEq0PhIRP0Iuz3rzfBlLg+IyjlTDmlKqNhLYwW81PAQAh+QQJCgAAACwCAAAACgARAIEAAAD////Ay9wAAAACHoSPoXjiDKOctFqjAsy58Q4InyKEIveYzloabMqkBQAh+QQJCgAAACwCAAAACgAQAIEAAADAy9z///8AAAACGkSAqcvtD6OUorKKrcnZBC4Eh0iWSEkyKVAAADs=";

function skillUpgradeToast(e, A) {
    const a = getAvailableUpgrades(e)[0],
        n = SKILL_TREE[a].profession,
        s = getLevel(e.skills[n]),
        r = `${e.farmAddress}.${n}.level-${s}`;
    localStorage.getItem(r) || (localStorage.setItem(r, new Date().toDateString()), A({
        content: "Skill upgrade available",
        icon: n === "farming" ? plant : pickaxe,
        timeout: 5800
    }))
}
const SkillUpgrade = () => {
    const {
        gameService: e
    } = react.exports.useContext(Context), [A] = useActor(e), t = s => {
        e.send("LEVEL_UP", {
            skill: s
        })
    }, a = getAvailableUpgrades(A.context.state);
    if (a.length === 0) return null;
    const n = SKILL_TREE[a[0]];
    return React.createElement("div", {
        className: "flex flex-col items-center"
    }, n.profession === "farming" && React.createElement("div", {
        className: "flex justify-between"
    }, React.createElement("img", {
        src: plant,
        alt: "farming",
        className: "w-6 h-6 mx-2"
    }), React.createElement("span", null, "Level ", n.level, " ", n.profession), React.createElement("img", {
        src: plant,
        alt: "farming",
        className: "w-6 h-6 mx-2"
    })), n.profession === "gathering" && React.createElement("div", {
        className: "flex justify-between"
    }, React.createElement("img", {
        src: pickaxe,
        alt: "farming",
        className: "w-6 h-6 mx-2"
    }), React.createElement("span", null, "Level ", n.level, " ", n.profession), React.createElement("img", {
        src: pickaxe,
        alt: "farming",
        className: "w-6 h-6 mx-2"
    })), React.createElement("span", {
        className: "text-center text-sm underline"
    }, "Choose a skill"), React.createElement("div", {
        className: "flex w-full mt-3"
    }, a.map(s => {
        const r = ITEM_DETAILS[s],
            i = SKILL_TREE[s];
        return React.createElement(Button, {
            key: s,
            className: "flex flex-col items-center mx-2",
            onClick: () => t(s)
        }, React.createElement("span", {
            className: "text-sm"
        }, s), React.createElement("img", {
            className: "w-1/3  my-2",
            src: r.image,
            alt: "green thumb"
        }), React.createElement("ul", null, i.perks.map(m => React.createElement("li", {
            key: m,
            className: "text-xs block"
        }, m))))
    })))
};
var lock = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOBAMAAADpk+DfAAAABGdBTUEAALGPC/xhBQAAABVQTFRFAAAAWmqH/+ax6HkCi5y0+qcHMCUqnjGH7AAAAAF0Uk5TAEDm2GYAAABISURBVAjXY2BgS0tLYGBgSHFxcWNgYHNMSxNJYGADMlNwUGluaWkpaQxJSkCgxpAampYWGsaQHBqWGmoGo9iMgQBoaBoQMAAAlpYUdXGHxPYAAAAASUVORK5CYII=";
const SkillTree = ({
        back: e
    }) => {
        const {
            gameService: A
        } = react.exports.useContext(Context), [{
            context: {
                state: t
            }
        }] = useActor(A);
        return React.createElement(React.Fragment, null, React.createElement("div", {
            className: "flex"
        }, React.createElement("img", {
            className: "h-6 mr-3 cursor-pointer",
            src: arrowLeft,
            alt: "back",
            onClick: e
        }), React.createElement("span", {
            className: "text-base"
        }, "Skills")), React.createElement("div", {
            className: "flex flex-wrap justify-around overflow-y-auto scrollable max-h-96 pt-2 pr-1 mt-2"
        }, Object.keys(SKILL_TREE).map(a => {
            var r;
            const n = SKILL_TREE[a],
                s = (r = t.inventory[a]) == null ? void 0 : r.equals(1);
            return React.createElement(OuterPanel, {
                className: "w-full my-2 p-1 relative",
                key: a
            }, React.createElement("span", {
                className: classNames("text-shadow border text-xxs absolute left-0 -top-4 p-1 rounded-md capitalize", {
                    "bg-green-600": n.profession === "farming",
                    "bg-[#7C4700]": n.profession === "gathering"
                })
            }, `${n.profession} lvl ${n.level}`), React.createElement("div", {
                className: "flex justify-between h-12 items-center border-b border-white mb-2"
            }, React.createElement("span", {
                className: "text-sm"
            }, a), React.createElement("img", {
                src: s ? ITEM_DETAILS[a].image : lock,
                alt: "farming",
                className: "w-6 mx-2"
            })), React.createElement("ul", {
                className: "list-disc"
            }, n.perks.map(i => React.createElement("li", {
                key: i,
                className: "text-xs block capitalize"
            }, i))))
        })))
    },
    House = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), {
            setToast: A
        } = react.exports.useContext(ToastContext), [t] = useActor(e), {
            state: a
        } = t.context, [n, s] = React.useState(!1), [r, i] = React.useState(!1), [m, d] = React.useState(!1);
        React.useEffect(() => {
            const I = upgradeAvailable(a);
            d(I), I && a.farmAddress && skillUpgradeToast(a, A)
        }, [A, a]);
        const E = () => {
                i(!0)
            },
            u = () => {
                i(!1), s(!0), homeDoorAudio.play()
            },
            {
                gathering: w,
                farming: B
            } = a.skills,
            g = getLevel(w),
            C = getLevel(B),
            Q = g + C,
            h = getRequiredXpToLevelUp(g),
            f = getRequiredXpToLevelUp(C),
            S = () => {
                const D = ["Green Thumb", "Barn Manager", "Seed Specialist", "Wrangler", "Lumberjack", "Prospector", "Logger", "Gold Rush"].map(F => t.context.state.inventory[F] ? React.createElement("img", {
                    key: F,
                    src: ITEM_DETAILS[F].image,
                    alt: F,
                    className: "h-6 mr-2 mb-2 md:mb-0"
                }) : null).filter(Boolean);
                return D.length === 0 ? React.createElement("span", {
                    className: "text-xs text-shadow"
                }, "Reach level 5 in a profession to unlock a skill") : React.createElement("div", {
                    className: "flex flex-wrap"
                }, D)
            },
            y = () => t.matches("levelling") ? React.createElement("span", {
                className: "loading"
            }, "Levelling up") : r ? React.createElement(SkillTree, {
                back: u
            }) : m ? React.createElement(SkillUpgrade, null) : React.createElement(React.Fragment, null, React.createElement("div", {
                className: "flex flex-col md:flex-row pt-8 md:pt-2"
            }, React.createElement(InnerPanel, {
                className: "w-full md:w-1/3 p-2 flex flex-col items-center mb-2 md:mb-0"
            }, React.createElement("img", {
                src: questionMark,
                className: "w-1/4 md:w-1/2 mb-2"
            }), React.createElement("span", {
                className: "text-xxs"
            }, "Farmer NFT"), React.createElement("span", {
                className: "text-sm text-shadow"
            }, "Name: ?"), React.createElement("span", {
                className: "text-sm text-shadow"
            }, `Level: ${Q}`)), React.createElement("div", {
                className: "px-2 overflow-hidden"
            }, React.createElement("div", {
                className: "flex items-center -mb-.5 md:-mb-2"
            }, React.createElement("span", {
                className: "text-sm"
            }, "Farming"), React.createElement("img", {
                src: plant,
                className: "w-4 h-4 ml-2"
            })), React.createElement("span", {
                className: "text-xxs"
            }, f ? `${B.toNumber()} XP/${f} XP` : `${B.toNumber()} XP`), React.createElement("div", {
                className: "flex items-center mt-1 flex-wrap"
            }, new Array(10).fill(null).map((I, D) => D < C ? React.createElement(Label, {
                key: D,
                className: "w-5 h-7 mr-1 flex flex-col items-center"
            }) : React.createElement(OuterPanel, {
                key: D,
                className: "w-5 h-7 mr-1 flex flex-col items-center"
            })), React.createElement("span", null, C)), React.createElement("div", {
                className: "flex items-center mt-2 -mb-.5 md:-mb-2"
            }, React.createElement("span", {
                className: "text-sm"
            }, "Tools"), React.createElement("img", {
                src: pickaxe,
                className: "w-4 h-4 ml-2"
            })), React.createElement("span", {
                className: "text-xxs"
            }, h ? `${w.toNumber()} XP/${h} XP` : `${w.toNumber()} XP`), React.createElement("div", {
                className: "flex items-center mt-1 flex-wrap mb-1 md:mb-0"
            }, new Array(10).fill(null).map((I, D) => D < g ? React.createElement(Label, {
                key: D,
                className: "w-5 h-7 mr-1 flex flex-col items-center"
            }) : React.createElement(OuterPanel, {
                key: D,
                className: "w-5 h-7 mr-1 flex flex-col items-center"
            })), React.createElement("span", null, g)), React.createElement(Button, {
                className: "text-xs mt-3",
                onClick: E
            }, "View all skills"))), React.createElement(InnerPanel, {
                className: "flex w-1/2 sm:w-1/3 mt-2"
            }, React.createElement("img", {
                src: player,
                className: "h-5 mr-2"
            }), React.createElement("span", {
                className: "text-sm text-shadow"
            }, "Skills")), React.createElement(InnerPanel, {
                className: "relative p-2 mt-1"
            }, S()));
        return React.createElement(React.Fragment, null, React.createElement("div", {
            style: {
                width: `${GRID_WIDTH_PX*3.2}px`,
                position: "absolute",
                right: `${GRID_WIDTH_PX*39}px`,
                top: `${GRID_WIDTH_PX*28.8}px`
            },
            className: "relative cursor-pointer hover:img-highlight",
            onClick: u
        }, m && React.createElement("img", {
            className: "animate-float",
            src: alert,
            style: {
                width: `${GRID_WIDTH_PX*.55}px`,
                position: "absolute",
                left: `${GRID_WIDTH_PX*1.641}px`,
                bottom: `${GRID_WIDTH_PX*4.571}px`
            }
        }), React.createElement("img", {
            src: house,
            alt: "house",
            className: "w-full"
        }), React.createElement("img", {
            src: smoke,
            style: {
                width: `${GRID_WIDTH_PX*.7}px`,
                position: "absolute",
                left: `${GRID_WIDTH_PX*.12}px`,
                top: `${GRID_WIDTH_PX*.77}px`
            }
        }), React.createElement(Action, {
            className: "absolute bottom-10 left-5",
            text: "Home",
            icon: player,
            onClick: u
        })), React.createElement(Modal, {
            centered: !0,
            show: n,
            onHide: () => s(!1)
        }, React.createElement(Panel, {
            className: "relative"
        }, React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer top-3 right-4 absolute",
            onClick: () => s(!1)
        }), y())))
    };
var tailor = "./assets/tailor.3917066c.gif";
const TailorSale = ({
        onClose: e
    }) => {
        const {
            gameService: A
        } = react.exports.useContext(Context), [{
            context: {
                state: t
            }
        }] = useActor(A), [a, n] = react.exports.useState("flags"), s = Object.keys(FLAGS).sort().reduce((i, m) => (i[m] = FLAGS[m], i), {}), r = Object.values(FLAGS).filter(i => i.name in t.inventory).length === 3;
        return React.createElement(Panel, {
            className: "pt-5 relative"
        }, React.createElement("div", {
            className: "flex justify-between absolute top-1.5 left-0.5 right-0 items-center"
        }, React.createElement("div", {
            className: "flex"
        }, React.createElement(Tab, {
            isActive: a === "flags",
            onClick: () => n("flags")
        }, React.createElement("img", {
            src: flag,
            className: "h-5 mr-2"
        }), React.createElement("span", {
            className: "text-sm text-shadow"
        }, "Flags"))), React.createElement("img", {
            src: close,
            className: "h-6 cursor-pointer mr-2 mb-1",
            onClick: e
        })), React.createElement("div", {
            style: {
                minHeight: "200px"
            }
        }, React.createElement(Rare, {
            items: s,
            onClose: e,
            hasAccess: !0,
            canCraft: !r
        }), React.createElement("p", {
            className: "text-xxs p-1 m-1 underline text-center"
        }, "Max 3 flags per farm.")))
    },
    Tailor = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A] = useActor(e), [t, a] = React.useState(!1), n = !A.matches("readonly"), s = () => {
            a(!0), tailorAudio.play()
        };
        return React.createElement("div", {
            className: "absolute",
            style: {
                width: `${GRID_WIDTH_PX*3.5}px`,
                right: `${GRID_WIDTH_PX*6}px`,
                top: `${GRID_WIDTH_PX*36}px`
            }
        }, React.createElement("div", {
            className: classNames({
                "cursor-pointer": n,
                "hover:img-highlight": n
            })
        }, React.createElement("img", {
            src: tailor,
            className: "w-full",
            onClick: n ? s : void 0
        }), n && React.createElement(Action, {
            className: "absolute -bottom-7 -left-2",
            text: "Tailor",
            icon: flag,
            onClick: s
        })), t && React.createElement(Modal, {
            centered: !0,
            show: t,
            onHide: () => a(!1)
        }, React.createElement(TailorSale, {
            onClose: () => a(!1)
        })))
    };
var greenBook = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHAgMAAAC5PL9AAAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAA+dO6JlxCPolIopNVKwAAAAF0Uk5TAEDm2GYAAAAeSURBVAjXY+BnYLA/wLD/A8P6Lwzadxi4ChiYDgAAQzEGpHCwa+sAAAAASUVORK5CYII=",
    yellowBook = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFwMvc+dO693Yivkov/q40B6UNmwAAABlJREFUCNdjcHFxYEDGSkoKDAaCAgzGxgYARcsEbIXZOoIAAAAASUVORK5CYII=",
    tombstone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMBAMAAACgrpHpAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAAwMvc////i5u0OkRmPolIPUhpWmmIODDc5wAAAAF0Uk5TAEDm2GYAAABISURBVAjXY2BgSEtLYwACNkFBwQQgnaykpGQG5BqVl5crJzCwqQPpIiBdDgJAusTdpcQdSpsD6WJz4+JyhHwYmE5lYA0FgQAA2KUYKrSvhfoAAAAASUVORK5CYII=";
const Lore = () => {
        const [e, A] = react.exports.useState(!1), [t, a] = react.exports.useState(!1), [n, s] = react.exports.useState(!1), r = () => {
            A(!0), battleAudio.play()
        }, i = () => {
            a(!0), diaryAudio.play()
        }, m = () => {
            a(!1), A(!1), battleAudio.stop(), diaryAudio.stop()
        };
        return React.createElement(React.Fragment, null, React.createElement("img", {
            src: greenBook,
            className: "absolute hover:img-highlight cursor-pointer z-10",
            onClick: r,
            style: {
                width: `${GRID_WIDTH_PX*.5}px`,
                right: `${GRID_WIDTH_PX*4.25}px`,
                top: `${GRID_WIDTH_PX*27.1}px`
            }
        }), e && React.createElement(Modal, {
            centered: !0,
            show: e,
            onHide: m
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: m
        }), React.createElement("div", {
            className: "flex items-start"
        }, React.createElement("img", {
            src: greenBook,
            className: "w-12 img-highlight mr-2"
        }), React.createElement("div", {
            className: "flex-1"
        }, React.createElement("span", {
            className: "text-shadow  block"
        }, "The battle of 3 trees"), React.createElement("span", {
            className: "text-shadow text-xs block"
        }, "19th March"), React.createElement("span", {
            className: "text-shadow block mt-4"
        }, "The outsiders have stormed the village and forced us to the outskirts. Those that survived have fled to the mountains."))))), React.createElement("img", {
            src: yellowBook,
            className: "absolute hover:img-highlight cursor-pointer z-10",
            onClick: i,
            style: {
                width: `${GRID_WIDTH_PX*.3}px`,
                right: `${GRID_WIDTH_PX*55.3}px`,
                top: `${GRID_WIDTH_PX*2}px`
            }
        }), t && React.createElement(Modal, {
            centered: !0,
            show: t,
            onHide: m
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: m
        }), React.createElement("div", {
            className: "flex items-start"
        }, React.createElement("img", {
            src: yellowBook,
            className: "w-12 img-highlight mr-2"
        }), React.createElement("div", {
            className: "flex-1"
        }, React.createElement("span", {
            className: "text-shadow  block"
        }, "A young girl's diary"), React.createElement("span", {
            className: "text-shadow text-xs block"
        }, "26th March"), React.createElement("span", {
            className: "text-shadow block mt-4"
        }, "My home, my dolls, my friends. They're all gone....."))))), React.createElement("img", {
            src: tombstone,
            className: "absolute hover:img-highlight cursor-pointer z-10",
            onClick: () => s(!0),
            style: {
                width: `${GRID_WIDTH_PX*.88}px`,
                left: `${GRID_WIDTH_PX*31.07}px`,
                top: `${GRID_WIDTH_PX*36.94}px`
            }
        }), n && React.createElement(Modal, {
            centered: !0,
            show: n,
            onHide: () => s(!1)
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: () => s(!1)
        }), React.createElement("div", {
            className: "flex items-start"
        }, React.createElement("img", {
            src: tombstone,
            className: "w-12 img-highlight mr-2"
        }), React.createElement("div", {
            className: "flex-1"
        }, React.createElement("span", {
            className: "text-shadow  block"
        }, "Bilk Noggin"), React.createElement("span", {
            className: "text-shadow text-xs block"
        }, "Died, 45 years"), React.createElement("span", {
            className: "text-shadow block mt-4"
        }, "A hero of the resistance. Loved by friends, family & followers"))))))
    },
    ClockIssue = ({
        show: e
    }) => {
        const [A, t] = react.exports.useState(!1);
        return React.createElement(Modal, {
            show: e && !A,
            centered: !0
        }, React.createElement(Panel, null, React.createElement("div", {
            className: "flex flex-col items-center p-2"
        }, React.createElement("span", {
            className: "text-shadow text-center"
        }, "Clock not in sync"), React.createElement("img", {
            src: humanDeath$1,
            className: "w-12"
        }), React.createElement("span", {
            className: "text-shadow text-xs text-center"
        }, "Uh oh, it looks like your clock is not in sync with the game. Set date and time to automatic to avoid disruptions"), React.createElement(Button, {
            className: "mt-2",
            onClick: () => t(!0)
        }, "Continue"))))
    },
    Withdrawn = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context);
        return React.createElement("div", {
            className: "flex flex-col items-center"
        }, React.createElement("span", {
            className: "text-center mb-2"
        }, "Your items have been sent:"), React.createElement("span", {
            className: "text-center mb-2 text-sm"
        }, shortAddress$1(metamask.myAccount)), React.createElement("img", {
            src: secure,
            className: "w-16 my-4"
        }), React.createElement("span", {
            className: "text-center text-sm mb-2"
        }, "View on", " ", React.createElement("a", {
            className: "underline hover:text-white",
            href: "https://opensea.io/account?search[resultModel]=ASSETS&search[sortBy]=LAST_TRANSFER_DATE&search[query]=sunflower%20land",
            target: "_blank",
            rel: "noreferrer"
        }, "Open Sea")), React.createElement("span", {
            className: "text-center text-xxs mb-4"
        }, "Open Sea can take up to 30 minutes to display your items. You can also view the items on", " ", React.createElement("a", {
            className: "underline hover:text-white",
            href: `https://polygonscan.com/address/${metamask.myAccount}#tokentxnsErc1155`,
            target: "_blank",
            rel: "noreferrer"
        }, "PolygonScan")), React.createElement(Button, {
            onClick: () => e.send("REFRESH")
        }, "Continue"))
    },
    Resetting = () => React.createElement("span", {
        className: "text-shadow loading"
    }, "Resetting"),
    AUTO_SAVE_INTERVAL = 1e3 * 30,
    SHOW_MODAL = {
        loading: !0,
        playing: !1,
        readonly: !1,
        autosaving: !1,
        minting: !0,
        syncing: !0,
        synced: !0,
        withdrawing: !0,
        withdrawn: !0,
        error: !0,
        blacklisted: !0,
        levelling: !1,
        resetting: !0
    },
    Game = () => {
        const {
            gameService: e
        } = react.exports.useContext(Context), [A, t] = useActor(e);
        return useInterval(() => t("SAVE"), AUTO_SAVE_INTERVAL), react.exports.useEffect(() => {
            const a = n => {
                A.context.actions.length !== 0 && (n.preventDefault(), n.returnValue = "")
            };
            return window.addEventListener("beforeunload", a), () => {
                window.removeEventListener("beforeunload", a)
            }
        }, [A]), react.exports.useEffect(() => {
            const a = () => {
                t("SAVE")
            };
            return window.addEventListener("blur", a), screenTracker.start(), () => {
                window.removeEventListener("blur", a), screenTracker.pause()
            }
        }, []), React.createElement(React.Fragment, null, React.createElement(ToastManager, null), React.createElement(Modal, {
            show: SHOW_MODAL[A.value],
            centered: !0
        }, React.createElement(Panel, {
            className: "text-shadow"
        }, A.matches("loading") && React.createElement(Loading, null), A.matches("resetting") && React.createElement(Resetting, null), A.matches("error") && React.createElement(ErrorMessage, {
            errorCode: A.context.errorCode
        }), A.matches("blacklisted") && React.createElement(Blacklisted, null), A.matches("minting") && React.createElement(Minting, null), A.matches("synced") && React.createElement(Success, null), A.matches("syncing") && React.createElement(Syncing, null), A.matches("withdrawing") && React.createElement(Withdrawing, null), A.matches("withdrawn") && React.createElement(Withdrawn, null))), React.createElement(ClockIssue, {
            show: A.context.offset > 0
        }), React.createElement(Hud, null), React.createElement(TeamDonation, null), React.createElement(Crops, null), React.createElement(Water, null), React.createElement(Animals, null), React.createElement(Decorations, null), React.createElement(Forest, null), React.createElement(Quarry, null), React.createElement(Town, null), React.createElement(House, null), React.createElement(Tailor, null), React.createElement(Lore, null))
    };
let container;
const sensitivity = 3,
    intervalTime = 1,
    movementIntervals = {},
    initialCoordinates = [1024, 1214],
    keyDownListener = e => {
        const A = e.key.toLowerCase();
        container && e.target === document.body && (A === "w" || A === "arrowup" ? movementIntervals.moveUp === void 0 && (movementIntervals.moveUp = setInterval(() => {
            container.scrollTop -= sensitivity
        }, intervalTime)) : A === "a" || A === "arrowleft" ? movementIntervals.moveLeft === void 0 && (movementIntervals.moveLeft = setInterval(() => {
            container.scrollLeft -= sensitivity
        }, intervalTime)) : A === "s" || A === "arrowdown" ? movementIntervals.moveDown === void 0 && (movementIntervals.moveDown = setInterval(() => {
            container.scrollTop += sensitivity
        }, intervalTime)) : A === "d" || A === "arrowright" ? movementIntervals.moveRight === void 0 && (movementIntervals.moveRight = setInterval(() => {
            container.scrollLeft += sensitivity
        }, intervalTime)) : A === " " && (container.scrollTop = initialCoordinates[0], container.scrollLeft = initialCoordinates[1], e.preventDefault()))
    },
    keyUpListener = e => {
        const A = e.key.toLowerCase();
        container && (A === "w" || A === "arrowup" ? movementIntervals.moveUp !== void 0 && (clearInterval(movementIntervals.moveUp), delete movementIntervals.moveUp) : A === "a" || A === "arrowleft" ? movementIntervals.moveLeft !== void 0 && (clearInterval(movementIntervals.moveLeft), delete movementIntervals.moveLeft) : A === "s" || A === "arrowdown" ? movementIntervals.moveDown !== void 0 && (clearInterval(movementIntervals.moveDown), delete movementIntervals.moveDown) : (A === "d" || A === "arrowright") && movementIntervals.moveRight !== void 0 && (clearInterval(movementIntervals.moveRight), delete movementIntervals.moveRight))
    },
    addListeners = e => {
        e != null && (container = e), window.addEventListener("keydown", keyDownListener), window.addEventListener("keyup", keyUpListener)
    },
    removeListeners = () => {
        window.removeEventListener("keydown", keyDownListener), window.removeEventListener("keyup", keyUpListener)
    };
var mapMovement = {
        addListeners,
        removeListeners
    },
    cloudGazer = "./assets/cloud-gazer.e5175f4f.gif";
const ExpansionInfo = () => {
        const [e, A] = react.exports.useState(!1);
        return React.createElement("div", {
            style: {
                width: `${GRID_WIDTH_PX*2}px`,
                height: `${GRID_WIDTH_PX*2.2}px`,
                right: `calc(50% - ${GRID_WIDTH_PX*36.7}px)`,
                bottom: `calc(50% - ${GRID_WIDTH_PX*40.4}px)`
            },
            className: "absolute"
        }, React.createElement("div", {
            className: "relative h-full"
        }, React.createElement("img", {
            src: questionMark,
            className: "absolute w-3 left-[50%] z-10 animate-float"
        }), React.createElement("div", {
            style: {
                borderRadius: "50%"
            },
            className: "absolute h-3 w-8 bg-black opacity-20 bottom-1 left-[39%]"
        }), React.createElement("img", {
            src: cloudGazer,
            onClick: () => A(!0),
            className: "absolute w-20 bottom-0 left-1/2 -translate-x-1/2 cursor-pointer hover:img-highlight drop-shadow-md"
        })), React.createElement(Modal, {
            centered: !0,
            show: e,
            onHide: () => A(!1)
        }, React.createElement(Panel, null, React.createElement("img", {
            src: close,
            className: "h-6 top-4 right-4 absolute cursor-pointer",
            onClick: () => A(!1)
        }), React.createElement("div", {
            className: "flex items-start"
        }, React.createElement("img", {
            src: questionMark,
            className: "h-10 img-highlight mr-3"
        }), React.createElement("div", {
            className: "flex-1"
        }, React.createElement("span", {
            className: "text-shadow block"
        }, "I can't see anything through these thick clouds!"), React.createElement("span", {
            className: "text-shadow block mt-4"
        }, "I wonder if I will ever get to see what lies beneath them all?"))))))
    },
    Session = () => {
        const e = react.exports.useRef(null);
        return react.exports.useEffect(() => (mapMovement.addListeners(e.current), () => {
            mapMovement.removeListeners()
        }), [e]), React.createElement(GameProvider, null, React.createElement(ToastProvider, null, React.createElement(p$1, {
            className: "bg-green-background overflow-scroll relative w-full h-full",
            innerRef: e
        }, React.createElement("div", {
            className: "relative h-gameboard w-gameboard"
        }, React.createElement("img", {
            src: background,
            className: "absolute inset-0 w-full h-full"
        }), React.createElement(ExpansionInfo, null), React.createElement(Game, null)))))
    };
var curly = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAFxQkYzUwlFVCYzYxYTQvYjYwYDQvYjUwPikzPigyPicxYjQwPSUvYTUwPygyPycxPiYwYzUxGBUluG9QGBQk+nF6+nF76TJFJCtDpR4zpR80JCtCpR8z6TFF6DFFOEVkN0RkOEVlJSxDJCtCGBQlJSxDJCtDdTw5JCxDw0RERwAAACp0Uk5TAP//////////////////////////////////////////////mf+Zmf+ZDyTbcwAAAN9JREFUeJztkctyAiEQRb22Me30xPjoSchTxxDQ//9Be3BNs0pl4yloFpy6twpmszv/C4Cym96cCETzlokF0cOS6HHhh4JXnXD/JN2K2TFBTLReP9tkZqqa5onIpl/2GzulboKFaNvteNtNkVIvx9TIvCuzWV2wPL/augs3sx5p4l4VqmaKeO8z6KDTUml8I/RF9dVEbfwhSAs0+J6Z4e394/MrtER8H44h2ArNaoynn/GI+mvfiBhOo7m/SL4Xc8QZ531KObtizmYYMV/8SLvPFmui7xkpxWSxLe3OX3MFA9cQRSDXzX4AAAAASUVORK5CYII=";
const Signing = () => React.createElement(React.Fragment, null, React.createElement("span", {
        className: "text-shadow loading"
    }, "Signing you in"), React.createElement("span", {
        className: "text-shadow block mt-4 sm:text-sm"
    }, "Accept the signature request in your browser wallet to login.")),
    SupplyReached = () => React.createElement("div", {
        className: "flex flex-col text-center text-shadow items-center p-1"
    }, React.createElement("p", {
        className: "text-center mb-3"
    }, "Supply reached!"), React.createElement("p", {
        className: "text-center mb-4 text-xs"
    }, "100,000 farms have already been minted for open beta. More spots are opening soon!")),
    Countdown = () => {
        const [e, A] = react.exports.useState("60secs"), {
            authService: t
        } = react.exports.useContext(Context$1);
        return react.exports.useEffect(() => {
            const a = Date.now(),
                n = setInterval(() => {
                    const s = 60 - (Date.now() - a) / 1e3;
                    A(secondsToLongString(s)), s <= 0 && (t.send("REFRESH"), clearInterval(n))
                }, 1e3);
            return () => clearInterval(n)
        }, []), React.createElement("div", {
            className: "flex flex-col items-center p-2"
        }, React.createElement("span", {
            className: "text-center"
        }, "Your farm has been minted!"), React.createElement("img", {
            src: minting,
            className: "w-1/2 mt-2"
        }), React.createElement("span", {
            className: "text-xs text-center mb-1"
        }, "Your farm will be ready in"), React.createElement("span", {
            className: "text-3xl"
        }, e), React.createElement("span", {
            className: "text-xs text-center mt-4 underline mb-1"
        }, "Do not refresh this browser"))
    },
    Minimized = () => React.createElement("div", {
        className: "flex flex-col text-center text-shadow items-center p-1"
    }, React.createElement("p", {
        className: "text-center mb-3"
    }, "Full screen required!"), React.createElement("div", {
        className: "flex mb-3 items-center"
    }, React.createElement("img", {
        src: humanDeath$1,
        alt: "Warning",
        className: "w-full"
    })), React.createElement("p", {
        className: "text-center mb-4 text-xs"
    }, "Only goblins play the game with the screen minimized. Make sure your browser is full screen to enjoy Sunflower Land to the fullest!")),
    Auth = () => {
        const {
            authService: e
        } = react.exports.useContext(Context$1), [A, t] = useActor(e);
        return React.createElement(Modal, {
            centered: !0,
            show: !A.matches({
                connected: "authorised"
            }) && !A.matches("visiting"),
            backdrop: !1
        }, React.createElement("div", {
            className: "relative"
        }, React.createElement("img", {
            id: "curly",
            src: curly,
            className: "absolute w-54 -top-11 right-20 -z-10 scale-[4]"
        }), React.createElement("img", {
            src: jumpingGoblin,
            className: "absolute w-52 -top-[83px] -z-10"
        }), React.createElement(Panel, null, (A.matches({
            connected: "loadingFarm"
        }) || A.matches("checkFarm") || A.matches({
            connected: "checkingSupply"
        }) || A.matches({
            connected: "checkingAccess"
        })) && React.createElement(Loading, null), A.matches("connecting") && React.createElement(Loading, {
            text: "Connecting"
        }), A.matches("signing") && React.createElement(Signing, null), A.matches({
            connected: "noFarmLoaded"
        }) && React.createElement(NoFarm, null), A.matches({
            connected: "supplyReached"
        }) && React.createElement(SupplyReached, null), A.matches("oauthorising") && React.createElement(Loading, null), A.matches({
            connected: "oauthorised"
        }) && React.createElement(CreateFarm, null), A.matches({
            connected: "countdown"
        }) && React.createElement(Countdown, null), A.matches({
            connected: "creatingFarm"
        }) && React.createElement(CreatingFarm, null), A.matches({
            connected: "readyToStart"
        }) && React.createElement(StartFarm, null), A.matches("exploring") && React.createElement(VisitFarm, null), A.matches("minimised") && React.createElement(Minimized, null), A.matches("unauthorised") && React.createElement(ErrorMessage, {
            errorCode: A.context.errorCode
        }))))
    },
    Navigation = () => {
        const {
            authService: e
        } = react.exports.useContext(Context$1), [A, t] = useActor(e), [a, n] = react.exports.useState(!1);
        return react.exports.useEffect(() => {
            if (a) {
                const s = document.getElementById("crops");
                s == null || s.scrollIntoView({
                    behavior: "auto",
                    block: "center",
                    inline: "center"
                })
            }
        }, [a]), react.exports.useEffect(() => {
            window.ethereum && (window.ethereum.on("chainChanged", () => {
                t("CHAIN_CHANGED")
            }), window.ethereum.on("accountsChanged", function() {
                t("ACCOUNT_CHANGED")
            }))
        }, [t]), react.exports.useEffect(() => {
            const s = A.matches({
                connected: "authorised"
            }) || A.matches("visiting");
            setTimeout(() => n(s), 20)
        }, [A, A.value]), React.createElement(React.Fragment, null, React.createElement(Auth, null), a ? React.createElement(Session, null) : React.createElement(Splash, null))
    };
var styles = "";
const App = () => React.createElement(Provider, null, React.createElement(Navigation, null));
ReactDOM.render(React.createElement(React.StrictMode, null, React.createElement(App, null)), document.getElementById("root"));