#! /usr/bin/env node
var electron = require('electron')
var spawn = require('cross-spawn')
var path = require('path')
var chalk = require('chalk')

process.stdout.write('\x1bc')
console.log()
console.log()
console.log(chalk.cyan('Compiling...'))

var child = spawn(electron, [path.join(__dirname, './main.js')] , { stdio: 'inherit' })

child.on('close', function (code) {
  if (code !== 0) {
     console.error('Could not bundle prototype.')
     console.log()
     console.log()
     return
  }
})
