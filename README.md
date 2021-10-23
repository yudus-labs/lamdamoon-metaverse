# Lambomoon Metaverse

The core mechanism in Lambomoon Metaverse is **NTF Engineering** and its relationship with main fungible tokens ( LBM and LDM ), which play important role in gameplay, in-game economic, play-to-earn incentives, and governance.

Before continue, please read about [story & gameplay](https://wiki.lambomoon.xyz/2264ecc193e04659adc9f3475e52ddf1) first.

This repo provides an overview of tokenomic, **NFT Engineering** and its implementation in Solidity.

Now we are going to discuss about 2 main fungible tokens : **LBM** and **LDM**

For detail of NFT, please see [NFT Composition](docs/nft.md)

## Lambonium - LBM

A new metal found on Lambo planet, which can be mined and has a lot of superior properties compare to titanium and vital for advanced equipment/weapon building. It is consumable and also main currency in the game.

You should read [PvE gameplay](https://wiki.lambomoon.xyz/Story-Gameplay-Reward-2264ecc193e04659adc9f3475e52ddf1) first to know more about reward mechanism.

**Default max supply : 200M**, this is the hard limit of LBM be mined on Lambo planet

**Full supply : 100M**

**Initial circulating supply : 21M**, from

- IDO - 8M
- Community Building - 8M
- Treasury - 5M

Circulating supply will heavily depend on amount of LBM earned in the game and consumed in NFT Engineering or burnt in Lambonium Reactor for Lambo Dark Matter.

Reward in early stage will be taken from 10% of 100M tokens, then will be minted until reaching **Max supply**.

By design, maximum inflation rate should be between 15% - 20% annually, it should take 5 to 7 years to reach default max supply limit. As a result, LBM reward rate is controlled by governance and limited to not exceed inflation ceiling. The ultimate purpose is to maintain a balance between benefit of gamers and economy health of the game.

We all know that both hyper-inflation and hyper-deflation are not good for any economy, therefore max supply limit may be adjusted by governance in a distance future ( when the game jump to Chapter 4, which will explore other planets )

**How to obtain**

- Buy on market
- Rewarded in PvE by clearing a land plot on Lambo planet for the first time
- Stake **Mining machine** NFT items on Lambo land plots, majority of LBM will be earned in this way
- Winning and take from other players in PvP
- Rewarded in community events

**Utilities**

- Currency for NFT exchange
- Essential for infrastructure, equipment, and weapon NFT minting
- Burnt to produce **Lambo Dark Matter**
- Consumed in NFT Engineering process

## Lambo Dark Matter - LDM

A rare and mysterious substance discovered in alien artifacts on Lambo, which can be produced only by using [Lambonium Reactor](https://wiki.lambomoon.xyz/Equipment-5c71927085e244239abd2b0240b11faa).

It allows human to build new tele-portals between Earth and any planet in Lambo Solar System. Anyone possess most LDM will be able to control Lambo Solar System, hence it is governance token.

**Supply** : not available until the game running for a while.

LDM is governance token, unlike other projects, the only way to mint new LDM is by burning LBM. This mechanism helps to mitigate the issue of "buying token for voting, then sell them", it represpents commitment of parties in Lambomoon governance.

_Just note that, in early stage, for smooth and fast development, governance is dev team itself, until coin-voting governance is enabled._

**How to obtain**

- Buy on market
- Burn a large amount of LBM in **Lambonium Reactor**

**Utilities**

- Governance, _e.g. control treasury spending on public goods, vote on reward rate..._
- Essential for creating new tele-portals as well as special equipment/weapon NFTs
- Consumed in NFT Engineering process

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

Refer `LICENSE` file in this repository.
