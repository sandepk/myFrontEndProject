console.clear()
console.log("Hey Deepak , Welcome to Regex Learning !")
console.log("please refer the link for more details = " , "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions")
var re = /ab+c/;
//parentheses  are used as a memory device.
//var re = new RegExp('ab+c');//another way

//using simple match.
re = /abc/;// only when exactly the characters 'abc' occur together and in that order
var input = "hey, abcd"//re found abc
var flag = re.test(input);
//console.log(flag);

//A backslash(\) that precedes a non-special(ex : b) character indicates that the next character is special 
//and is not to be interpreted literally.
//A backslash that precedes a special character(ex : *) indicates that the next character is not special and should be 
//interpreted literally. 
// ^ = Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break 
//character.
// $ = Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
// * = Matches the preceding expression 0 or more times. Equivalent to {0,}.
// + = Matches the preceding expression 1 or more times. Equivalent to {1,}.

re = /^ab*c$/ //must starts with a ,followed by any number of b and must  ends with b
//console.log(re.test('abbbbbc'))
re = /^a*b+c/
//console.log(re.test('abc'))

// ?    = Matches the preceding expression 0 or 1 time. Equivalent to {0,1}. 
//Also used in lookahead assertions, as described in the x(?=y) and x(?!y) entries of this table.
re = /ab+c?d/
//console.log(re.test('abbbbbd'))

// . = (The decimal point) matches any single character except the newline character.
re = /a.c/
//console.log(re.test('a&c'))

// (x)  = Matches 'x' and remembers the match, as the following example shows.
// The parentheses are called capturing parentheses.
re = /(foo).(bar) \1 \2/
//console.log(re.test("foo bar foo bar"))

// /(?:foo) = Matches 'x' but does not remember the match. The parentheses are called non-capturing parentheses
//, and let you define subexpressions for regular expression operators to work with.
re = /(?:foo){1,2}/   //note : {1,2} is applyed to the whole word.
//console.log(re.test("foofoo"))

re = /abc{1,3}/ //note : {1,2} is applied to the char 'o'.
//console.log(re.test("abcc")) //note : abcabc is also true.

// x(?=y) = Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead. x should be present in string
re = /max(?=jon|ron)/ //aage piche kya hai us se koi mtlb ni hai. 
//console.log(re.test("hey, maxron jio dost")) //true

// x(?!y) = Matches 'x' only if 'x' is not followed by 'y'. This is called a negated lookahead.
re = /you (?!fuck)/ // false if "you " is followed by fuck.
//console.log(re.test("hey, you fuck jio dost")) //true

// x|y = Matches 'x', or 'y' (if there is no match for 'x').

// {n}  = Matches exactly n occurrences of the preceding expression. N must be a positive integer.

re = /a{2}/ //exactly 2 a's should be present.
console.log(re.test("daabear")) 

//{n,} = Matches at least n occurrences of the preceding expression. N must be a positive integer.

//{n,m} = Matches at least n and at most m occurrences of the preceding expression.
//When m is omitted, it's treated as ∞.

//[xyz] = Character set. This pattern type matches any one of the characters in the brackets, including escape sequences. 
//Special characters like the dot(.) and asterisk (*) are not special inside a character set, so they don't need to be escaped.
// You can specify a range of characters by using a hyphen



















