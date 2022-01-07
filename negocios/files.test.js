const files = require('./files')
const expect = require('chai').expect

const fs = require('fs')

const sinon = require('sinon')

describe('reading directory ', () => {
  it('reads a directory', () => {
    sinon.stub(fs, 'readdir').callsFake((path, cb) => {
      cb(null, ['file1.txt'])
    })
    return files.readdir('./').then(list => {
      console.log(list)

    })
  })
})