//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const fs = require('fs');
const path = require('path');
const cors = require("cors");
const morgan = require('morgan');
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const router = require('./router');

const app = express();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Colors

magenta = "\x1b[35m";
cyan = "\x1b[36m";
blue = "\x1b[34m";

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//