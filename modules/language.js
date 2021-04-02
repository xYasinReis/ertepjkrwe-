const discord = require('discord.js')

module.exports.pars = class {
  constructor(dil,data={}) {
    if(dil == "tr") {
      this.sonuc = data.tr;
    }else if(dil == "eng") {
      this.sonuc = data.eng;
    }else if(dil == "de") {
      this.sonuc = data.de;
    }else if(dil == "fr") {
       this.sonuc = data.fr
    }else {
      this.sonuc = data.eng;
    };
  };
};