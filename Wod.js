function spellit(s)
{
  var cs = "asiadevacademy";
  var isCorrect = false;
  for(var i = 0; i < s.length; i++)
    {
        if(s[i].match(cs[i]))
        {
          isCorrect = true;
        }
    }
  return isCorrect;
}
document.write(spellit("asiadevacademmy"));