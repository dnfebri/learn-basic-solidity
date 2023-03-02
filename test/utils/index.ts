import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { LearnCoin } from '../../typechain-types';

let accounts: SignerWithAddress[] = [];

export const initiateAccounts = async () => {
  accounts = await ethers.getSigners();
  return accounts;
};

export const getState = () => ({
  accounts,
});