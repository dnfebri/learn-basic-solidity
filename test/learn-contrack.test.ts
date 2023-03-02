import { ethers } from 'hardhat';
import { expect, use } from 'chai';
import { LearnContrack } from '../typechain-types';

let learnContrack: LearnContrack = null as any;
let userError: any[] = [];

describe("belajar test contrak", () => {
  it('Deploy contract', async () => {
    const getCotract = await ethers.getContractFactory('LearnContrack');
    learnContrack = await getCotract.deploy();
    await learnContrack.deployed();
    console.log(learnContrack.address);
  });
  it("set Text", async () => {
    const newText = await learnContrack.setText("New Set Name !");
    const setText = await newText.wait();
    expect(1).to.equal(setText.status);
    // console.log(setText);
  })
  it("get Pemilik", async () => {
    const pemilik = await learnContrack.getPemilik();
    console.log(pemilik)
  })
})