const FundraiserContract = artifacts.require("Fundraiser");

contract("FoundRaiser", accounts => {
    let fundraiser;
    const name = "Beneficiary Name";

    describe("initialzation", () => {
        beforeEach(async () => {
            fundraiser = await FundraiserContract.new(name);
        })
    })
})
