#!/usr/bin/env node
import { execSync } from 'child_process'

execSync("npx pm2 stop verificador")
