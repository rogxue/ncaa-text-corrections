exports.teamNameCorrections(text) {
  text = text.replace("St. Peter's", "PLACEHOLDER1");
  text = text.replace("St. Francis (Pa.)", "PLACEHOLDER2");
  text = text.replace("St. Francis (B'klyn)", "PLACEHOLDER3");
  text = text.replace("St. Mary's (Cal.)", "PLACEHOLDER4");
  text = text.replace("St. Mary's (Minn.)", "PLACEHOLDER5");
  text = text.replace("St. John's", "PLACEHOLDER6");
  text = text.replace("St. Bonaventure", "PLACEHOLDER7");
  text = text.replace("Mt. St. Mary's", "PLACEHOLDER8");
  text = text.replace("St. Francis (Ill.)", "PLACEHOLDER9");
  text = text.replace("St. Edward's", "PLACEHOLDER0");
  text = text.replace("St. Thomas", "PLACEHOLDERA");

  text = text.replace(/Ariz[.]/g, "Arizona");
  text = text.replace(/Ark[.]/g, "Arkansas");
  text = text.replace(/B'klyn/g, "Brooklyn");
  text = text.replace(/Bapt[.]/g, "Baptist");
  text = text.replace(/Barb[.]/g, "Barbara");
  text = text.replace(/C[.]C[.]/g, "Corpus Christi");
  text = text.replace(/[(]Cal[.][)]/g, "(CA)");
  text = text.replace(/Caro[.]/g, "Carolina");
  text = text.replace(/Cent[.]/g, "Central");
  text = text.replace(/Colo[.]/g, "Colorado");
  text = text.replace(/Col[.]/g, "College");
  text = text.replace(/Coll[.]/g, "College");
  text = text.replace(/Comm[.]/g, "Commerce");
  text = text.replace(/Conc[.]/g, "Concordia");
  text = text.replace(/ Conn[.]/g, " Connecticut");
  text = text.replace(/D'son/g, "Dickinson");
  text = text.replace(/East[.]/g, "Eastern");
  text = text.replace(/Eng[.]/g, "Engalnd");
  text = text.replace(/Fla[.]/g, "FL");
  text = text.replace(/Fran[.]/g, "Francisco");
  text = text.replace(/Ga[.]/g, "Georgia");
  text = text.replace(/Geo[.]/g, "George");
  text = text.replace(/[(]Ill[.][)]/g, "(IL)");
  text = text.replace(/Ill[.]/g, "Illinois");
  text = text.replace(/Ind[.]/g, "IN");
  text = text.replace(/Int'l/g, "International");
  text = text.replace(/Jeff[.]/g, "Jeferson");
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
  text = text.replace(/N'western/g, "Northwestern");
  text = text.replace(/N'west/g, "Northwest");
  text = text.replace(/N[.]C[.]/g, "North Carolina");
  text = text.replace(/N[.]M[.]/g, "New Mexico");
  text = text.replace(/N[.]O[.]/g, "New Orleans");
  text = text.replace(/N[.] Central/g, "North Central");
  text = text.replace(/[(]Ohio[)]/g, "(OH)");
  text = text.replace(/[(]Pa.[)]/g, "(PA)");
  text = text.replace(/R[.]I[.]/g, "RI");
  text = text.replace(/S. Carolina/g, "South Carolina");
  text = text.replace(/S[.]C[.]/g, "South Carolina");
  text = text.replace(/S'western/g, "Southwestern");
  text = text.replace(/Seattle U/g, "Seattle");
  text = text.replace(/So[.]/g, "Southern");
  text = text.replace(/St[.]/g, "State");
  text = text.replace(/Steph[.]/g, "Stephen");
  text = text.replace(/Tenn[.]/g, "Tennessee");
  text = text.replace(/U[.]/g, "University");
  text = text.replace(/ Univ[.]/g, "");
  text = text.replace(/Vall[.]/g, "Valley");
  text = text.replace(/Wash[.]/g, "Washington");
  text = text.replace(/Wis[.]/g, "Wisconsin");
  text = text.replace(/W.Va[.]/g, "West Virginia");

  text = text.replace("PLACEHOLDER1", "St. Peter's");
  text = text.replace("PLACEHOLDER2", "St. Francis (PA)");
  text = text.replace("PLACEHOLDER3", "St. Francis (Brooklyn)");
  text = text.replace("PLACEHOLDER4", "St. Mary's (CA)");
  text = text.replace("PLACEHOLDER5", "St. Mary's (MN)");
  text = text.replace("PLACEHOLDER6", "St. John's");
  text = text.replace("PLACEHOLDER7", "St. Bonaventure");
  text = text.replace("PLACEHOLDER8", "Mt. St. Mary's");
  text = text.replace("PLACEHOLDER9", "St. Francis (IL)");
  text = text.replace("PLACEHOLDER0", "St. Edward's");
  text = text.replace("PLACEHOLDERA", "St. Thomas");
}
