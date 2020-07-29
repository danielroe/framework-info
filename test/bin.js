const test = require('ava')
const execa = require('execa')
const { getBinPath } = require('get-bin-path')

const { FIXTURES_DIR } = require('./helpers/main.js')

const BINARY_PATH = getBinPath()

test('CLI --help flag', async t => {
  const binPath = await BINARY_PATH
  const { stdout } = await execa(binPath, ['--help'])
  t.snapshot(stdout)
})

test('CLI print framework names', async t => {
  const binPath = await BINARY_PATH
  const { stdout } = await execa(binPath, [`${FIXTURES_DIR}/multiple`])
  t.snapshot(stdout)
})

test('CLI --long flag', async t => {
  const binPath = await BINARY_PATH
  const { stdout } = await execa(binPath, ['--long', `${FIXTURES_DIR}/multiple`])
  t.snapshot(stdout)
})

test('CLI --ignored-command flag', async t => {
  const binPath = await BINARY_PATH
  const { stdout } = await execa(binPath, ['--long', '--ignored-command=testTwo', `${FIXTURES_DIR}/use_scripts`])
  t.snapshot(stdout)
})
