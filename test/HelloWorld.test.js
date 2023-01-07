const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
    it('should return a hello message', async () => {
        const helloWorldInstance = await HelloWorld.deployed()
        const result = await helloWorldInstance.print.call()

        assert.equal(result.valueOf(), "Hello Lioloc", "Message incorrect")
    });

    it('should return the updated hello message when the name is updated', async () => {
        const helloWorldInstance = await HelloWorld.deployed()
        await helloWorldInstance.updateName.call("John")
        const result = await helloWorldInstance.print.call()

        assert.equal(result.valueOf(), "Hello Lioloc", "Message incorrect")
    });
})