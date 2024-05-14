const CHARVAL = [
    {
        char: 'A',
        pos: 0
        },
        {
        char: 'B',
        pos: 1
        },
        {
        char: 'C',
        pos: 2
        },
        {
        char: 'D',
        pos: 3
        },
        {
        char: 'E',
        pos: 4
        },
        {
        char: 'F',
        pos: 5
        },
        {
        char: 'G',
        pos: 6
        },
        {
        char: 'H',
        pos: 7
        },
        {
        char: 'I',
        pos: 8
        },
        {
        char: 'J',
        pos: 9
        },
        {
        char: 'K',
        pos: 10
        },
        {
        char: 'L',
        pos: 11
        },
        {
        char: 'M',
        pos: 12
        },
        {
        char: 'N',
        pos: 13
        },
        {
        char: 'O',
        pos: 14
        },
        {
        char: 'P',
        pos: 15
        },
        {
        char: 'Q',
        pos: 16
        },
        {
        char: 'R',
        pos: 17
        },
        {
        char: 'S',
        pos: 18
        },
        {
        char: 'T',
        pos: 19
        },
        {
        char: 'U',
        pos: 20
        },
        {
        char: 'V',
        pos: 21
        },
        {
        char: 'W',
        pos: 22
        },
        {
        char: 'X',
        pos: 23
        },
        {
        char: 'Y',
        pos: 24
        },
        {
        char: 'Z',
        pos: 25
        }
]

const ALLCHARS = [
    {
        char: 'A',
        pos: 0
        },
        {
        char: 'B',
        pos: 1
        },
        {
        char: 'C',
        pos: 2
        },
        {
        char: 'D',
        pos: 3
        },
        {
        char: 'E',
        pos: 4
        },
        {
        char: 'F',
        pos: 5
        },
        {
        char: 'G',
        pos: 6
        },
        {
        char: 'H',
        pos: 7
        },
        {
        char: 'I',
        pos: 8
        },
        {
        char: 'J',
        pos: 9
        },
        {
        char: 'K',
        pos: 10
        },
        {
        char: 'L',
        pos: 11
        },
        {
        char: 'M',
        pos: 12
        },
        {
        char: 'N',
        pos: 13
        },
        {
        char: 'O',
        pos: 14
        },
        {
        char: 'P',
        pos: 15
        },
        {
        char: 'Q',
        pos: 16
        },
        {
        char: 'R',
        pos: 17
        },
        {
        char: 'S',
        pos: 18
        },
        {
        char: 'T',
        pos: 19
        },
        {
        char: 'U',
        pos: 20
        },
        {
        char: 'V',
        pos: 21
        },
        {
        char: 'W',
        pos: 22
        },
        {
        char: 'X',
        pos: 23
        },
        {
        char: 'Y',
        pos: 24
        },
        {
        char: 'Z',
        pos: 25
        },
        {
        char: '~',
        pos: 26
    },
    {
        char: '!',
        pos: 27
    },
    {
        char: '@',
        pos: 28
    },
    {
        char: '#',
        pos: 29
    },
    {
        char: '$',
        pos: 30
    },
    {
        char: '%',
        pos: 31
    },
    {
        char: '^',
        pos: 32
    },
    {
        char: '&',
        pos: 33
    },
    {
        char: '*',
        pos: 34
    },
    {
        char: '(',
        pos: 35
    },
    {
        char: ')',
        pos: 36
    },
    {
        char: '_',
        pos: 37
    },
    {
        char: '+',
        pos: 38
    },
    {
        char: '`',
        pos: 39
    },
    {
        char: '0',
        pos: 40
    },
    {
        char: '1',
        pos: 41
    },
    {
        char: '2',
        pos: 42
    },
    {
        char: '3',
        pos: 43
    },
    {
        char: '4',
        pos: 44
    },
    {
        char: '5',
        pos: 45
    },
    {
        char: '6',
        pos: 46
    },
    {
        char: '7',
        pos: 47
    },
    {
        char: '8',
        pos: 48
    },
    {
        char: '9',
        pos: 49
    },
    {
        char: '-',
        pos: 50
    },
    {
        char: '=',
        pos: 51
    },
    {
        char: '[',
        pos: 52
    },
    {
        char: ']',
        pos: 53
    },
    {
        char: '\\',
        pos: 54
    },
    {
        char: '{',
        pos: 55
    },
    {
        char: '}',
        pos: 56
    },
    {
        char: '|',
        pos: 57
    },
    {
        char: ':',
        pos: 58
    },
    {
        char: '"',
        pos: 59
    },
    {
        char: ';',
        pos: 60
    },
    {
        char: '\'',
        pos: 61
    },
    {
        char: ',',
        pos: 62
    },
    {
        char: '.',
        pos: 63
    },
    {
        char: '/',
        pos: 64
    },
    {
        char: '<',
        pos: 65
    },
    {
        char: '>',
        pos: 66
    },
    {
        char: '?',
        pos: 67
    },
    {
        char: `\x20`,
        pos: 68
    },
    {
        char: 'a',
        pos: 69
    },
    {
        char: 'b',
        pos: 70
    },
    {
        char: 'c',
        pos: 71
    },
    {
        char: 'd',
        pos: 72
    },
    {
        char: 'e',
        pos: 73
    },
    {
        char: 'f',
        pos: 74
    },
    {
        char: 'g',
        pos: 75
    },
    {
        char: 'h',
        pos: 76
    },
    {
        char: 'i',
        pos: 77
    },
    {
        char: 'j',
        pos: 78
    },
    {
        char: 'k',
        pos: 79
    },
    {
        char: 'l',
        pos: 80
    },
    {
        char: 'm',
        pos: 81
    },
    {
        char: 'n',
        pos: 82
    },
    {
        char: 'o',
        pos: 83
    },
    {
        char: 'p',
        pos: 84
    },
    {
        char: 'q',
        pos: 85
    },
    {
        char: 'r',
        pos: 86
    },
    {
        char: 's',
        pos: 87
    },
    {
        char: 't',
        pos: 88
    },
    {
        char: 'u',
        pos: 89
    },
    {
        char: 'v',
        pos: 90
    },
    {
        char: 'w',
        pos: 91
    },
    {
        char: 'x',
        pos: 92
    },
    {
        char: 'y',
        pos: 93
    },
    {
        char: 'z',
        pos: 94
    }
]