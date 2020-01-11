exports.teamNameCorrections = function(text) {
  text = text.replace("St. Peter's", "PLACEHOLDER1");
  text = text.replace("St. Francis", "PLACEHOLDER2");
  text = text.replace("St. Jos. (Brkln.)", "PLACEHOLDER3");
  text = text.replace("St. John's", "PLACEHOLDER6");
  text = text.replace("St. Bonaventure", "PLACEHOLDER7");
  text = text.replace("Mt. St. Mary's", "PLACEHOLDER8");
  text = text.replace("St. Edward's", "PLACEHOLDER0");
  text = text.replace("St. Thomas", "PLACEHOLDERA");
  text = text.replace("St. Louis", "PLACEHOLDERB");
  text = text.replace("St. Mar", "PLACEHOLDERC");
  text = text.replace("St. Cloud", "PLACEHOLDERD");
  text = text.replace("St. Augustine", "PLACEHOLDERE");
  text = text.replace("St. Andrews", "PLACEHOLDERF");
  text = text.replace("St. Katherine", "PLACEHOLDERG");
  text = text.replace("St. Joseph", "PLACEHOLDERH");

  text = text.replace(/Advent[.]/g, "Adventist");
  text = text.replace(/Ala[.]/g, "Alabama");
  text = text.replace(/Alas[.]/g, "Alaska");
  text = text.replace(/Anch[.]/g, "Anchorage");
  text = text.replace(/Aq[.]/g, "Aquinas");
  text = text.replace(/Ariz[.]/g, "Arizona");
  text = text.replace(/Ark[.]/g, "Arkansas");
  text = text.replace(/Atl[.]/g, "Atlantic");
  text = text.replace(/B'dino/g, "Bernardino");
  text = text.replace(/B'klyn/g, "Brooklyn");
  text = text.replace(/Bapt[.]/g, "Baptist");
  text = text.replace(/Barb[.]/g, "Barbara");
  text = text.replace(/C[.]C[.]/g, "Corpus Christi");
  text = text.replace(/[(]Cal[.][)]/g, "(CA)");
  text = text.replace(/[(]Calif[.][)]/g, "(CA)");
  text = text.replace(/Caro[.]/g, "Carolina");
  text = text.replace(/Cent[.]/g, "Central");
  text = text.replace(/Champion Chris[.]/g, "Champion Christian");
  text = text.replace(/Chris[.]/g, "Christopher");
  text = text.replace(/Christ[.]/g, "Christian");
  text = text.replace(/Cin[.]/g, "Cincinnati");
  text = text.replace(/[(]Colo[.][)]/g, "(CO)");
  text = text.replace(/Colo[.]/g, "Colorado");
  text = text.replace(/Col[.]/g, "College");
  text = text.replace(/Coll[.]/g, "College");
  text = text.replace(/Comm[.]/g, "Commerce");
  text = text.replace(/Conc[.]/g, "Concordia");
  text = text.replace(/ Conn[.]/g, " Connecticut");
  text = text.replace(/D'son/g, "Dickinson");
  text = text.replace(/ E[.]/g, " East");
  text = text.replace(/East[.]/g, "Eastern");
  text = text.replace(/Eng[.]/g, "Engalnd");
  text = text.replace(/Fair[.]/g, "Fairbanks");
  text = text.replace(/Fam[.]/g, "Family");
  text = text.replace(/Fla[.]/g, "Florida");
  text = text.replace(/FL/g, "Florida");
  text = text.replace(/[(]Florida[)]/g, "(FL)");
  text = text.replace(/Fran[.]/g, "Francisco");
  text = text.replace(/Ga[.]/g, "Georgia");
  text = text.replace(/Geo[.]/g, "George");
  text = text.replace(/[(]Ill[.][)]/g, "(IL)");
  text = text.replace(/Ill[.]/g, "Illinois");
  text = text.replace(/Ind[.]/g, "IN");
  text = text.replace(/Int'l/g, "International");
  text = text.replace(/Jeff[.]/g, "Jefferson");
  text = text.replace(/John[.] /g, "Johnson ");
  text = text.replace(/Ky[.]/g, "Kentucky");
  text = text.replace(/La[.]/g, "Louisiana");
  text = text.replace(/M[.] Hardin/g, "Mary Hardin");
  text = text.replace(/Mass[.]-/g, "Massachusetts-");
  text = text.replace(/[(]Md[.][)]/g, "(MD)");
  text = text.replace(/Md[.][-]/g, "Maryland-");
  text = text.replace(/Marym't/g, "Marymount");
  text = text.replace(/Mem[.]/g, "Memorial");
  text = text.replace(/Mich[.]/g, "Michigan");
  text = text.replace(/[(]Minn[.][)]/g, "(MN)");
  text = text.replace(/Miss[.]/g, "Mississippi");
  text = text.replace(/Mo[.]/g, "Missouri");
  text = text.replace(/[(]Mont[.][)]/g, "(MT)");
  text = text.replace(/Mont[.]/g, "Montana");
  text = text.replace(/[(]Neb[.][)]/g, "(NE)");
  text = text.replace(/Neb[.]/g, "Nebraska");
  text = text.replace(/N'western/g, "Northwestern");
  text = text.replace(/N'west/g, "Northwest");
  text = text.replace(/N[.]C[.]/g, "North Carolina");
  text = text.replace(/N[.]H[.]/g, "New Hampshire");
  text = text.replace(/N[.]M[.]/g, "New Mexico");
  text = text.replace(/N[.]O[.]/g, "New Orleans");
  text = text.replace(/[(]N[.]Y[.][)]/g, "(NY)");
  text = text.replace(/Neb[.]/g, "Nebraska");
  text = text.replace(/N[.] Central/g, "North Central");
  text = text.replace(/[(]Ohio[)]/g, "(OH)");
  text = text.replace(/Okla[.]/g, "Oklahoma");
  text = text.replace(/[(]Pa[.][)]/g, "(PA)");
  text = text.replace(/Pitt[.]/g, "Pittsburgh");
  text = text.replace(/R[.]I[.]/g, "RI");
  text = text.replace(/S. Carolina/g, "South Carolina");
  text = text.replace(/S[.]C[.]/g, "South Carolina");
  text = text.replace(/S'eastern/g, "Southeastern");
  text = text.replace(/S'western/g, "Southwestern");
  text = text.replace(/Sch[.]/g, "School");
  text = text.replace(/Seattle U/g, "Seattle");
  text = text.replace(/So[.]/g, "Southern");
  text = text.replace(/St[.]/g, "State");
  text = text.replace(/Steph[.]/g, "Stephen");
  text = text.replace(/Tenn[.]/g, "Tennessee");
  text = text.replace(/Tex[.]/g, "Texas");
  text = text.replace(/[(]Tennessee[)]/g, "(TN)");
  text = text.replace(/ U[.]/g, " University");
  text = text.replace(/ Univ[.]/g, "");
  text = text.replace(/Va[.]/g, "Virginia");
  text = text.replace(/Val[.]/g, "Valley");
  text = text.replace(/Vall[.]/g, "Valley");
  text = text.replace(/Wash[.]/g, "Washington");
  text = text.replace(/Westmin[.]/g, "Westminster");
  text = text.replace(/Wis[.]/g, "Wisconsin");
  text = text.replace(/[(]WVa[)]/g, "(WV)");
  text = text.replace(/W.Va[.]/g, "West Virginia");

  text = text.replace("PLACEHOLDER1", "St. Peter's");
  text = text.replace("PLACEHOLDER2", "St. Francis");
  text = text.replace("PLACEHOLDER3", "St. Joseph's (Brooklyn)");
  text = text.replace("PLACEHOLDER6", "St. John's");
  text = text.replace("PLACEHOLDER7", "St. Bonaventure");
  text = text.replace("PLACEHOLDER8", "Mt. St. Mary's");
  text = text.replace("PLACEHOLDER0", "St. Edward's");
  text = text.replace("PLACEHOLDERA", "St. Thomas");
  text = text.replace("PLACEHOLDERB", "St. Louis");
  text = text.replace("PLACEHOLDERC", "St. Mar");
  text = text.replace("PLACEHOLDERD", "St. Cloud");
  text = text.replace("PLACEHOLDERE", "St. Augustine");
  text = text.replace("PLACEHOLDERF", "St. Andrews");
  text = text.replace("PLACEHOLDERG", "St. Katherine");
  text = text.replace("PLACEHOLDERH", "St. Joseph");

  return text;
}

exports.removeStatusText = function(text) {
  text = text.replace(/First Round/gi, "");
  text = text.replace(/Second Round/gi, "");
  text = text.replace(/Third Round/gi, "");
  text = text.replace(/Quarterfinals/gi, "");
  text = text.replace(/Semifinals/gi, "");
  text = text.replace(/Championship/gi, "");
  text = text.replace(/Sweet 16/gi, "");
  text = text.replace(/Elite Eight/gi, "");
  text = text.replace(/Final Four/gi, "");

  text = text.replace(/ABC/gi, "");
  text = text.replace(/ESPN2/gi, "");
  text = text.replace(/ESPN3/gi, "");
  text = text.replace(/ESPNU/gi, "");
  text = text.replace(/ESPN/gi, "");

  return text;
}
