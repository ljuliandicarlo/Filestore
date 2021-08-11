const Filestore = artifacts.require('./Filestore.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Filestore', ([deployer, uploader]) => {
  let filestore

  before(async () => {
    filestore = await Filestore.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await filestore.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await filestore.name()
      assert.equal(name, 'Filestore')
    })
  })

  describe('file', async () => {
    let result, fileCount
    const fileHash = 'QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb'
    const fileSize = '1'
    const fileType = 'TypeOfTheFile'
    const fileName = 'NameOfTheFile'
    const fileDescription = 'DescriptionOfTheFile'

    before(async () => {
      result = await filestore.uploadFile(fileHash, fileSize, fileType, fileName, fileDescription, { from: uploader })
      fileCount = await filestore.fileCount()
    })

    it('upload file', async () => {
      assert.equal(fileCount, 1)
      const event = result.logs[0].args
      assert.equal(event.fileId.toNumber(), fileCount.toNumber(), 'Id is correct')
      assert.equal(event.fileHash, fileHash, 'Hash is correct')
      assert.equal(event.fileSize, fileSize, 'Size is correct')
      assert.equal(event.fileType, fileType, 'Type is correct')
      assert.equal(event.fileName, fileName, 'Name is correct')
      assert.equal(event.fileDescription, fileDescription, 'Description is correct')
      assert.equal(event.uploader, uploader, 'Uploader is correct')

      
      await filestore.uploadFile('', fileSize, fileType, fileName, fileDescription, { from: uploader }).should.be.rejected;
      
      await filestore.uploadFile(fileHash, '', fileType, fileName, fileDescription, { from: uploader }).should.be.rejected;
      
      await filestore.uploadFile(fileHash, fileSize, '', fileName, fileDescription, { from: uploader }).should.be.rejected;

      await filestore.uploadFile(fileHash, fileSize, fileType, '', fileDescription, { from: uploader }).should.be.rejected;
      
      await filestore.uploadFile(fileHash, fileSize, fileType, fileName, '', { from: uploader }).should.be.rejected;
    })

    it('lists file', async () => {
      const file = await filestore.files(fileCount)
      assert.equal(file.fileId.toNumber(), fileCount.toNumber(), 'id is correct')
      assert.equal(file.fileHash, fileHash, 'Hash is correct')
      assert.equal(file.fileSize, fileSize, 'Size is correct')
      assert.equal(file.fileName, fileName, 'Size is correct')
      assert.equal(file.fileDescription, fileDescription, 'description is correct')
      assert.equal(file.uploader, uploader, 'uploader is correct')
    })
  })
})


