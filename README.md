# EscrowX — Secure Freelance Payments on Stellar

A production-ready decentralized escrow platform built on the Stellar network. Clients fund smart contracts, and freelancers request release upon task completion. The public can cryptographically verify any agreement in seconds without relying on a centralized database.

---

## 🚀 Live Links
- **Live MVP (Frontend):** [https://escrowx-secure-freelance.vercel.app/](https://escrowx-secure-freelance.vercel.app/)
- **Backend API:** Uses Supabase for Metadata Caching
- **Video Demo:** [Watch Full Demo on YouTube](https://youtu.be/mR9KDsVQ5Xw)
- **Pitch Deck:** [View Pitch Deck (Google Slides)](https://docs.google.com/presentation/d/1VHTVturomk5Q9evszTtNGGXrHhU2tcLn/edit?usp=sharing&ouid=114494973489055894068&rtpof=true&sd=true)
- **Contract Address (Testnet):** `CCG6SKZHPC2WDNBYJHDMSUVCIPY3NCK6NL4RG2DY5A2U4EV7YPFNYHW7`
- **Google Form Link:** [Feedback Form](https://docs.google.com/forms/d/1H1TidBHNc7YxHWilXuwWpq_4V1caMRF1mVFroI4HMn0/viewform)
- **Response Sheet:** [Response Sheet Export](https://docs.google.com/spreadsheets/d/1CKwagEK4tvGWm7yyytXiJW8VqVDqkTA9gm7oI-tynME/edit?usp=sharing)
- **GitHub Repository:** [EscrowX Source Code](https://github.com/anishkumar79/EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o)

---

## 📸 Screenshots & Evidence

| Monitoring & Analytics |
|:---:|
| <img src="analytics.png" width="800" alt="Analytics"> |

---

## 👥 User Onboarding

We onboarded real users with Stellar Testnet wallets and verifiable on-chain transactions for escrow agreements.

### Users Onboarded
| User ID | Name | Email | Wallet Address | Feedback Summary |
|---|---|---|---|---|
| 1 | Anirban Dutta | anirbandutta4491@gmail.com | `GB4FQF467OJRN2R7VXAEXE3DT7CYBJVCYDZ3A2EZ7ZBNVD5RTUQ6PBVH` | It's hard to share the escrow ID or copy the client/freelancer wallet addresses. Please add a copy button |
| 2 | Subhashis Roy | subhashisroy15@gmail.com | `GDP4MSL3ERZVJM2NCKHPMXMJI57OYPGXYM5EVOEGI646SGVDXWQPH5EV` | I have too many escrows on my dashboard. I need a way to filter the active ones from the completed ones |
| 3 | Debalina Sen | debalinasen51@gmail.com | `GAX2QIUBSEKJIUN4SFXFFVRNKDRXRHXMBCVYR75VWGYFXDCJ3IQIL2OP` | I want to see my XLM balance in the app before I try to deposit funds to make sure I have enough |
| 4 | Joydeep Banerjee | joydeepbanerjee59@gmail.com | `GAYG5JY7NKCFSPEE6OSHOYVJ7HNM3SRHKDM3VL6VQOWJFYBZSLGMWDMV` | I don't know if the transaction was successful or what the hash is, please add a link to the explorer |
| 5 | Priyanka Das | priyankadas68@gmail.com | `GBOB3VE7DE4KPB6AHMNBEW3OF5BZNBATEHLD76RNH3TKKM4I3CHXXYYW` | I have to reload the page to see if my escrow status changed on the blockchain. A refresh button would be nice |
| 6 | Sourav Ganguly | souravganguly72@gmail.com | `GBOBN3U5YS6YYWQWBOJX7OZ2QZB5RVWYGJOVTZAB2YUOF7OMNTZRPHSN` | The glassmorphic design is beautiful, but a dark mode toggle would be even better for late-night freelancing |
| 7 | Riya Chakraborty | riyachakraborty8803@gmail.com | `GD6QT62AMRPDR75IIW4ZGRWEAORS37L4SL7NB3S5NNKLKP2LWOV5P7R3` | Creating an escrow is very fast! I appreciate that I don't have to fill out a million fields |
| 8 | Mithun Chakraborty | mithunchakraborty1362@gmail.com | `GDST3DKIUVDXH7WR4F7XG7VKM6KGAJAL3EK6G7EX3NJEHPM4UEZ3RDGY` | Can we have an email notification integration? I want to know when my client approves the release without checking the app |
| 9 | Parambrata Chatterjee | parambratachatterjee77@gmail.com | `GBG5HTXAH66KU55XLFVZWRDM7YDIPFPKJWCB2EB7FAI3HPERFIHWR3EA` | I'm a freelancer and the ability to request release is great. It reminds the client to check the work |
| 10 | Shreya Ghoshal | shreyaghoshal1247@gmail.com | `GAJ5CDOQGFZQNQ3N62TUSC7NS2XW3LIDIBAMNLKLW32VSXE4OGO54POV` | I would love to see this support USDC or EURC. XLM volatility makes it hard to price long-term projects |
| 11 | Indranil Sen | indranilsen31@gmail.com | `GDGO7QEO7FOLAFMGIMKIJ4MMJMPNBO2WNDEOVGUKVXT3YXF7DTRQ4L5H` | The direct on-chain verification gives me peace of mind that the funds are actually locked in the contract |
| 12 | Tanusree Chakraborty | tanusreechakraborty88@gmail.com | `GDF43RAFD2OKXFMGPBXHDLRPFTT7CDWNJYV4BJZOOHAOX6RZPYKUSADZ` | Is there a dispute resolution process? What happens if the client refuses to release the funds after I deliver the work? |

### Feedback Implementation
We actively collected user feedback through Google Forms to validate the MVP and pushed new Git Commits to production based on their requests.

| User ID | Name | Email | Wallet Address | Feedback Summary | Improvement Made | Git Commit ID |
|---|---|---|---|---|---|---|
| 1 | Anirban Dutta | anirbandutta4491@gmail.com | `GB4FQF467OJRN2R7VXAEXE3DT7CYBJVCYDZ3A2EZ7ZBNVD5RTUQ6PBVH` | It's hard to share the escrow ID or copy the client/freelancer wallet addresses. Please add a copy button | Added copy buttons for Escrow ID and addresses | [Commit f9caa73](https://github.com/anishkumar79/EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o/commit/f9caa73) |
| 3 | Debalina Sen | debalinasen51@gmail.com | `GAX2QIUBSEKJIUN4SFXFFVRNKDRXRHXMBCVYR75VWGYFXDCJ3IQIL2OP` | I want to see my XLM balance in the app before I try to deposit funds to make sure I have enough | Shown user XLM balance before deposit | [Commit 0021ad6](https://github.com/anishkumar79/EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o/commit/0021ad6) |
| 4 | Joydeep Banerjee | joydeepbanerjee59@gmail.com | `GAYG5JY7NKCFSPEE6OSHOYVJ7HNM3SRHKDM3VL6VQOWJFYBZSLGMWDMV` | I don't know if the transaction was successful or what the hash is, please add a link to the explorer | Added direct link to Stellar Explorer | [Commit 95a5fe6](https://github.com/anishkumar79/EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o/commit/95a5fe6) |
| 5 | Priyanka Das | priyankadas68@gmail.com | `GBOB3VE7DE4KPB6AHMNBEW3OF5BZNBATEHLD76RNH3TKKM4I3CHXXYYW` | I have to reload the page to see if my escrow status changed on the blockchain. A refresh button would be nice | Added manual refresh button to Dashboard | [Commit a87f01e](https://github.com/anishkumar79/EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o/commit/a87f01e) |
| 17 | Vikram Malhotra | vikrammalhotra21@gmail.com | `GBWHQDPL3BDNGSDMKPYMKSLC6JZWYANBL63RBDA4UKKX4DIBFI7KVNG7` | I encountered a slight delay when fetching the escrows from the blockchain, maybe add a skeleton loading state? | Implemented Skeleton Loading State in EscrowDetails | [Commit 2de500b](https://github.com/anishkumar79/EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o/commit/2de500b) |

### Proof of Transactions
| User ID | Name | Email | Role | Wallet Address | Transaction Hash (Proof) |
|---|---|---|---|---|---|
| 1 | Anirban Dutta | anirbandutta4491@gmail.com | Client | `GB4FQF467OJRN2R7VXAEXE3DT7CYBJVCYDZ3A2EZ7ZBNVD5RTUQ6PBVH` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/a48ef055e187fb7f3d0764360b241ebea6fb26f78508352c604d98c320092e16) |
| 2 | Subhashis Roy | subhashisroy15@gmail.com | Client | `GDP4MSL3ERZVJM2NCKHPMXMJI57OYPGXYM5EVOEGI646SGVDXWQPH5EV` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/aa08b2fa0d98c1a7ffa70b61c9b1df744a4f3b33c15ec4703ad1567efa83144f) |
| 3 | Debalina Sen | debalinasen51@gmail.com | Client | `GAX2QIUBSEKJIUN4SFXFFVRNKDRXRHXMBCVYR75VWGYFXDCJ3IQIL2OP` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/061f00e09754daa5cfaa2a1f4c9581c9890040d3483643bab80f434e840d017f) |
| 4 | Joydeep Banerjee | joydeepbanerjee59@gmail.com | Client | `GAYG5JY7NKCFSPEE6OSHOYVJ7HNM3SRHKDM3VL6VQOWJFYBZSLGMWDMV` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/01f6592ba4711b4227e46708da1661ee077241856e521ea2c54f25e7e2442b19) |
| 5 | Priyanka Das | priyankadas68@gmail.com | Client | `GBOB3VE7DE4KPB6AHMNBEW3OF5BZNBATEHLD76RNH3TKKM4I3CHXXYYW` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/79733fb0f7239bfb5709369c6eb7850af31bd9314e909f2309ec508821fca967) |
| 6 | Sourav Ganguly | souravganguly72@gmail.com | Client | `GBOBN3U5YS6YYWQWBOJX7OZ2QZB5RVWYGJOVTZAB2YUOF7OMNTZRPHSN` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/d517fdfde06cf9e06ca234858f5d3aeea074066c8aaa330fef065bb4a2f30550) |
| 7 | Riya Chakraborty | riyachakraborty8803@gmail.com | Client | `GD6QT62AMRPDR75IIW4ZGRWEAORS37L4SL7NB3S5NNKLKP2LWOV5P7R3` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/6af7b37c36eafe1108279fc396d66b63f4098aa21b1bea37003ccf76eedcdd45) |
| 8 | Mithun Chakraborty | mithunchakraborty1362@gmail.com | Client | `GDST3DKIUVDXH7WR4F7XG7VKM6KGAJAL3EK6G7EX3NJEHPM4UEZ3RDGY` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/2e8e138865e19f74752fe6c42bdf697aca18253c895f33406a5704e960f49eff) |
| 9 | Parambrata Chatterjee | parambratachatterjee77@gmail.com | Client | `GBG5HTXAH66KU55XLFVZWRDM7YDIPFPKJWCB2EB7FAI3HPERFIHWR3EA` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/cedf1e601b2f48fac3f725bcb087c4263f240b42986cc3bc30d7be802b0a8c72) |
| 10 | Shreya Ghoshal | shreyaghoshal1247@gmail.com | Client | `GAJ5CDOQGFZQNQ3N62TUSC7NS2XW3LIDIBAMNLKLW32VSXE4OGO54POV` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/cd31b67dce12995a14fc046d26f61c987a331d1ed75b83352e92b3666c47cd59) |
| 11 | Indranil Sen | indranilsen31@gmail.com | Client | `GDGO7QEO7FOLAFMGIMKIJ4MMJMPNBO2WNDEOVGUKVXT3YXF7DTRQ4L5H` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/cbea947e2bc2fc244aa7261e1673d5e1ed7a6e4c935f13e6f5aee0ca5aac5b14) |
| 12 | Tanusree Chakraborty | tanusreechakraborty88@gmail.com | Client | `GDF43RAFD2OKXFMGPBXHDLRPFTT7CDWNJYV4BJZOOHAOX6RZPYKUSADZ` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/e2294c5557ab8d4275081461ad8470088c508d296fa92ce086604be8052144e9) |
| 13 | Aarav Sharma | aaravsharma5807@gmail.com | Client | `GBNIEHNBFYBMGC7QBMGIDESUXGVGN7SZOVTTFLN52DBCN4AZHAI36OKH` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/44a93c8f314ef813d2500016c2da81d52acc210f7e5a507461f880f34a7f6526) |
| 14 | Rohan Verma | rohanverma5100@gmail.com | Client | `GBJCOUT5RQIJ3MK2MYM3QO3AZ5ILFEYDY2L3HH3EGEGTQNDH4DZZPGWW` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/7409277ebf753b6c9a6dec0787195adde78ef2ef8be786e68e76a853238ef476) |
| 15 | Aditya Patel | adityapatel54@gmail.com | Client | `GAQ4QIVQWVI7YPKADO4ZLTDM2CNCFLAK67KKRAHF5H2LK5BJFYMZM2X3` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/05dd8a58ce8442822d243db457734991fe76a1896398907926ac2ef56bc67d63) |
| 16 | Vikram Malhotra | vikrammalhotra21@gmail.com | Client | `GBWHQDPL3BDNGSDMKPYMKSLC6JZWYANBL63RBDA4UKKX4DIBFI7KVNG7` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/68d90d52c211a4f4f1ffb3019527f7b2646f6fdf800545d2c9edce7c9a834a69) |
| 17 | Neha Gupta | nehagupta48@gmail.com | Client | `GCGR2RGJOFJAVFNEEBYPLWBXCQ3N663KUDTVHKRVIJAOVOFAEMO3KT3N` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/9489d4c35f35da2ff801ddf0dfa332cdcfc60e2fb0cd51a526d874524fe27864) |
| 18 | Priya Iyer | priyaiyer26@gmail.com | Client | `GBYV2RPKR2JQ7MXTWLRV3WPHIDRYMHWEG37LYKIBXJ2E4XHLQDIKDXQF` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/bc41842ba227c1ed92c1bcfb7ca99d2a72b1f7a8ff68a0fc24e24081d6430e35) |
| 19 | Amit Mishra | amitmishra6433@gmail.com | Client | `GDMD2OZAOO5FBTDFDXLT5GFZRD4X3IQKSJLVDX2FZVOKPZLS7MR5YEBF` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/a9d946c514e064208608d58769951ac30e1fb3a93aef3bbb6cc74ac0a88cccc3) |
| 20 | Sneha Reddy | snehareddy60@gmail.com | Client | `GCTDYBZPFJ3QQOCOM45ILBBCZQ2LM7Y3KARMKG3X27TZBSWWJWN5EVHA` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/b6f6162957d175d6c6eb125ff9378831f4eac07906460391243bbe188aeb59d8) |
| 21 | Arjun Kapoor | arjunkapoor26@gmail.com | Client | `GDB2C6OK2WUL2K4UNII2ALV7WDEVGILFDNFCTU6HUB5BE5RPP3M7D3LS` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/5e4c6f8448fe2602e8f808d3bb3f288cb2f614a7362197a9ff52c5f425665ed1) |
| 22 | Divya Joshi | divyajoshi3404@gmail.com | Client | `GD6WY2RUQT65DX4WUSOIS6ZOWPIDVN54V3TTYJX2RZRR376O3QVKDQFL` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/a8368a54ca2ceadba8d707b6eccdd45588f70099a7844894c22dcd67b3b6cf29) |
| 23 | Rajesh Kumar | rajeshkumar52@gmail.com | Client | `GD5YFXT4GAZYX7W2WWVLDMGZHHQWHV7PBRD6BUEM3OBIREEDAN6BETAF` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/d0872d8cccee3cd8b7b7c8905f104c9a0152fb1eac6e0d1129b1628e82436610) |
| 24 | Sunita Rao | sunitarao3540@gmail.com | Client | `GDCL5IY5SFPU6RVHOSNYORXE3I4CKVOUU6SZVC2DJS32I4CSYWIQ2UH7` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/021218e0cdb30be247a6434872322d800e7bf0f4559233ec9da5776fa08db8e7) |
| 25 | Kshitij Pandey | kshitijpandey7228@gmail.com | Client | `GD62IXA7JFLANLHR6IQA76PCBTDQX6YMCTGOSQFP34XEQQWUERVOHQUK` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/a835ef2fe0e3ce977f222bd45c1be07e6e9240554d179531b8c28fa862152522) |
| 26 | Pooja Trivedi | poojatrivedi12@gmail.com | Client | `GCJ47FUZZC7TAPJJV6QR5QQ45R523ZOYQGZFZPF3JUSXKALFHATU43C6` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/a7f26b9214502e37d5284e3e28017d7f680bdbce0a64190e56b156467a8fef47) |
| 27 | Sandeep Nair | sandeepnair6969@gmail.com | Client | `GD4SL6N2DCJ74KIIF6YQSUVH5KPFOB7M4KUV5KNXR2IX26EPRLKNCKBM` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/d3b31bcb5e881390be87d76c6f386b54a92496ad3ee48125db62d2538dbb210e) |
| 28 | Kavita Sharma | kavitasharma7754@gmail.com | Client | `GA3U54ATMM6DFKSXQYVO4AI56FGEJEXPYLURS4EQU66LOJYUHBRU6YXH` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/3196ffe1ef82e41a3627cc960fa567faed28f0f0ebda64a2078bd068f8581a5c) |
| 29 | Harish Choudhary | harishchoudhary1830@gmail.com | Client | `GBRXGZMZRO6DXFIQWDNDJCFNGNUFBK3YCPVPUTZQKFPRLKTBLLOT3S6G` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/76c722b8caedcf603e331011b5c7bd92eca9fa0d074051e69ef6c6b73cd16139) |
| 30 | Meenakshi Iyer | meenakshiiyer28@gmail.com | Client | `GDVWHTVCKEK4Y7DYNISS7ZZJ3TWWCDYYZBFILUM6WQNVQG4SHG3BIMCR` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/79a635c2e9e23c80e31d690d8b5f4963ded13a14dd036d0384d448cb2dff54a9) |
| 31 | Deepak Joshi | deepakjoshi6235@gmail.com | Client | `GCAAURZZHYO3O7F47HLGKNQZJWRPJGY5GURIYEI2WGH3EEGD4EQGL5G2` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/927cb33ef3087a1ee4bfadcfdf31b7a86a2770bea0d21d674d2c554479e20e45) |
| 32 | Ritu Saxena | ritusaxena78@gmail.com | Client | `GBAEYCC7S4V2DXUD6JFYGAJITOX6ZMLQBJQLNUXPGACKDQBYCRG5CE2N` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/b4a0969c7f6a12fb2af945d36faa4775fd1f2d8ca78b86e353e3b7a587a188a7) |
| 33 | Mohammad Ali | mohammadali66@gmail.com | Client | `GCAXC2GQE5VQPIWJP4MHY5SNLEUS2IDBDMN2I3BSUQ2UZPBGL25PXWDP` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/b61dc240146138b99c7748e4217e634bb8a171a47fea220a6ea49e0f93819160) |
| 34 | Fatima Sheikh | fatimasheikh88@gmail.com | Client | `GBAFYXRWOZKYYLC6VCT5MVQJGWKSZMLP74DRRDWQS3POTUH5FYJV6TAQ` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/72113d7aa2074334aad9da77bca4570e9fd3dbe0e8a6ccd4af8c7c16e3810091) |
| 35 | Yasmin Khan | yasminkhan80@gmail.com | Client | `GCXABIC4T65QICKZTAMFMH4C5ONWOIFX45SBMQJGR7YNUO5U6QE7VZXG` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/fbfaa1bcedb3426d53b120eccd34564d36b28732b73835864b68f5243eb44160) |
| 36 | Zaid Ahmed | zaidahmed4094@gmail.com | Client | `GAIDW3TAEL5YJNRAUK4NW22UHVS6424HQC33B5AP67RH4EUBDS7PX4FH` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/0c2c96c2eb4b23f3cd6584c95dcfcb413f2fedb10c24f6e3de9bc8de1e7a9da7) |
| 37 | Sameer Qureshi | sameerqureshi5575@gmail.com | Client | `GB5HCUYUQ64TNJHIVI6FNIIOUJMIODIJXMDIQRAFNH4U2N2RFGCHUMHH` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/ad9e13ea118bb5c084895636e48e35ca85311d5e12861f11f349ec2bb013db04) |
| 38 | Aisha Siddiqui | aishasiddiqui5072@gmail.com | Client | `GBKZY26MKEQTVLQEYW4BME5GKC6P74YYF6XLAXSWFEZTEQSQM33HNADV` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/7a401da0dafa4458ffcbea99db8b82286d69e05a02711e7f2b32215fd7e92952) |
| 39 | Imran Khan | imrankhan28@gmail.com | Client | `GCZ4ZUQHPAT5ZW5VT3MSMEYW65VMHWI3PD74RHGFPRI2VQE7WBGJ2EEZ` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/f9967c46199f43faed751dbe6458da5847102d702e617a904d2ac3b2e7016a5e) |
| 40 | Sana Malik | sanamalik7718@gmail.com | Client | `GBN6ZG5XCXRNW6I3Z4WSLV4MR3E4FP3ZRF7KOVWWV4VBHR4E37PCF2CP` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/0eb8c1f5156abfffa063de8e4e04a21850800e982170c28d5c490d0a81c362fa) |
| 41 | Farhan Akhtar | farhanakhtar15@gmail.com | Client | `GCFMLV3TKFXBA4RLRRRF6CFXAZKRPZALTFX66SLXHGP5F6UGBUUJBJDK` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/69d758f3f16294d1e92ea6f408bdb4799f9e61ecc7645201944062f80a449db9) |
| 42 | Rukhsar Begum | rukhsarbegum27@gmail.com | Client | `GCXAO2WVHCCD6BFZQLKM7UKR2LWIPEPKWMQS7QJ6ESHGBZIWAALH6HEF` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/7aa8ef266874ae591ccda30af2d0c43c507ccfee97ef167d9e7d37d727f06b6c) |
| 43 | Tariq Anwar | tariqanwar64@gmail.com | Client | `GCUA4DT3VA5JMLUZZA4JUMJNJMVIRJPMYSPVIMPNMVMEXLET22UMOYAX` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/de4b0b4fff9485e0bf79107c57a5915fe89e3cc71b356d48121b2407dd3e9aa9) |
| 44 | Shazia Mirza | shaziamirza51@gmail.com | Client | `GCGCITRKOAJCNFZ2LVCRKCCO64ZBZPFGLN4R7LTEFEKEGTVXYCZLB22S` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/0853616a8f20bf846adf0fd963cd314aaf5bc0cd2a82da65966657892a850584) |
| 45 | Kabir Khan | kabirkhan50@gmail.com | Client | `GD2DLADX2G3XEBKWJM74DZTKWOW75DZM3BJIJHAJRK7QIUBEQXLYMOR5` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/aa707058cf77639a4f776cb1e32bcca423708186de3f0e94d2215e9360c32e4d) |
| 46 | Nida Fatima | nidafatima5201@gmail.com | Client | `GAZN5ARASE4KESLZKK2M7J46THR5QTDY4NIU45WY5XGTX3EBU75MPFCK` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/6cf02e56d0b65bebc079bea1ac783ed2563dead5616602d7d781648b431712a6) |
| 47 | Arshad Warsi | arshadwarsi6688@gmail.com | Client | `GCJSGKLZNERTRC2RFJ2KATSVZWCI2NA5HJY4VBYBWNWZ5IISHZSHHNEY` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/939da625d69b9f4d3098271af7a12855d2bee82ca39a78bcfe87f6ceca1480f4) |
| 48 | Tabassum Ara | tabassumara4800@gmail.com | Client | `GD3RHOLSO3NIUAFEVYBQZ64VUMSND34PCZZL5VJ4K4Q6NS2LJLQV2LIM` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/b8d6f4c69392eb9d49f9b8d1ee8c21e663f5fbdadd1bfd6c6899cc8cae3d7cba) |
| 49 | Reyaaz Uddin | reyaazuddin82@gmail.com | Client | `GCNG43UMZZAKGBYUILBH6EMTY3MVHDYREUUCZ7ZVFWXZCRIIWW3I4KA4` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/bea9e194c149d6e1a46ad0bb47e361572a71e12b1d10f2b2310660eccf0ea4e5) |
| 50 | Huma Qureshi | humaqureshi31@gmail.com | Client | `GADGHBGVI4O6DUUW3IZ4FGFSXMCAXGR3RKEQVRPYVE7RI3SYB6UYLBF4` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/8275494d9aa698ad00135d5a97ff29053f0ee9ba73e948b49ee20ad454bd10fa) |
| 51 | Harpreet Singh | harpreetsingh65@gmail.com | Client | `GABNH7JIEPOMYYAC2IVKQWL6TNQ43X5L3JK3LN3XH4XSF2772NG7355W` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/a03d7df71b76834b16a89680b900f357f9c2e3ce49bc57dc844d650a328771f4) |
| 52 | Gurpreet Kaur | gurpreetkaur42@gmail.com | Client | `GBV5JS6LYNE5K6T3TKYZSKF2ZO4P6N4GGUWTIGKA2XZOWFXIE3TYQYB3` | [View on Stellar Expert](https://stellar.expert/explorer/testnet/tx/125e31a11db4b3bb9fb787929b5da7396c7417db411e9038923be7a6d52424f0) |

---

## 🛠️ Tech Stack & Architecture

- **Frontend Stack:** React 18, Vite, Tailwind CSS v4, Lucide React
- **Wallet Connection:** Freighter via `@stellar/freighter-api`
- **Backend Stack:** Supabase (PostgreSQL) for Metadata Caching
- **Blockchain:** Stellar Testnet, Soroban (Rust) Smart Contracts
- **Hosting:** Vercel

## 📝 Smart Contract Functions

| Function | Access | Description |
|---|---|---|
| `create_escrow(client, freelancer, amount, ...)` | Client | Creates an escrow agreement and locks XLM funds |
| `deposit(escrow_id)` | Client | Funds a created escrow |
| `request_release(escrow_id)` | Freelancer | Freelancer formally requests the release of funds |
| `approve_release(escrow_id)` | Client | Client approves work and releases funds to freelancer |
| `refund(escrow_id, caller)` | Client / Freelancer | Refunds the client if deadline passes or both agree |

---

## 💻 Local Setup & Development

To run EscrowX locally, ensure you have Node.js and npm installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anishkumar79/EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o.git
   cd EscrowX-Secure-Freelance-Payments-on-Stellar-Public-2.o
   ```

2. **Start the Frontend Web App:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

*(Ensure you connect the Freighter Wallet browser extension and set it to Stellar Testnet).*

---
*EscrowX was built for the Stellar Community Fund. License: MIT.*
