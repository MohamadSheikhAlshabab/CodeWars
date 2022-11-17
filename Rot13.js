/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/
function rot13(message){
    return (
    message
    .split("")
    .map((el)=> {
        let rot_13 = ("el=",el.charCodeAt(el)); 
        let y=el;
        let plus_13 = rot_13 >= 65 && rot_13 <= 77 || rot_13 >= 97 && rot_13 <= 109;
        let nega_13 =rot_13 >= 78 && rot_13 <= 90  || rot_13 >= 110 && rot_13 <= 122;
      
        if(plus_13||nega_13){
          return el = String.fromCharCode(
          plus_13 ?
          el.charCodeAt(el)+13:
          nega_13 ?
          el.charCodeAt(el)-13:
          rot_13<65 || 
          rot_13<89 && rot_13>98 || 
          rot_13>122 ?
          el.charCodeAt(el):
          y
        )        
        }else{
         return el;
        }
       return y;
    }).join("")
  );
};

#Solution#2
function rot13(message) {
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

rot13("abcdefghigjklmnopqrstuvwxyz"); // nopqrstuvtwxyzabcdefghijklm
rot13("grfg");// test
rot13("Test");//Grfg
rot13("TEST");// GRFG
rot13("Ruby is cool!");// Ehol vf pbby!
rot13('(6x%imzXz=z]-8v');//'(6k%vzmKm=m]-8i'
rot13("10+2 is twelve."); // '10+2 vf gjryir.'
rot13("0123456789")
// ] == 93
// 0-9 == 48-57
// - == 45
//

// A 65 - 90 Z => N 78 - M 77
// a 97 - 122 z => n 110 - 109 m
/*
65 -> 77 => +13
78 -> 90 => -13

A 65 => N 78
B 66 => O 79
C 67 => P 80
D 68 => Q 81
E 69 => R 82
F 70 => S 83
G 71 => T 84
H 72 => U 85
I 73 => V 86
J 74 => W 87
K 75 => X 88
L 76 => Y 89
M 77 => Z 90
N 78 => A 65
O 79 => B 66
P 80 => C 67
Q 81 => D 68
R 82 => E 69
S 83 => F 70
T 84 => G 71
U 85 => H 72
V 86 => I 73
W 87 => J 74
X 88 => K 75
Y 89 => L 76
Z 90 => M 77


97 -> 109 => +13
110 -> 122 => -13

a 97 => n 110
b 98 => o 111
c 99 => p 112
d 100 => q 113
e 101 => r 114
f 102 => s 115
g 103 => t 116
h 104 => u 117
i 105 => v 118
j 106 => w 119
k 107 => x 120
l 108 => y 121
m 109 => z 122
n 110 => a 97
o 111 => b 98
p 112 => c 99
q 113 => d 100
r 114 => e 101
s 115 => f 102
t 116 => g 103
u 117 => h 104
v 118 => i 105
w 119 => j 106
x 120 => k 107
y 121 => l 108
z 122 => m 109

*/
