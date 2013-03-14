module.exports = {
	"rules": {
		"ArgAQ": [
			"1964,1966,2,1,0,0,-",
			"1964,1966,9,15,0,60,S",
			"1967,1967,3,2,0,0,-",
			"1967,1968,9,0:1,0,60,S",
			"1968,1969,3,0:1,0,0,-",
			"1974,1974,0,23,0,60,S",
			"1974,1974,4,1,0,0,-"
		],
		"ChileAQ": [
			"1972,1986,2,0:9,180u,0,-",
			"1974,1987,9,0:9,240u,60,S",
			"1987,1987,3,12,180u,0,-",
			"1988,1989,2,0:9,180u,0,-",
			"1988,1988,9,0:1,240u,60,S",
			"1989,1989,9,0:9,240u,60,S",
			"1990,1990,2,18,180u,0,-",
			"1990,1990,8,16,240u,60,S",
			"1991,1996,2,0:9,180u,0,-",
			"1991,1997,9,0:9,240u,60,S",
			"1997,1997,2,30,180u,0,-",
			"1998,1998,2,0:9,180u,0,-",
			"1998,1998,8,27,240u,60,S",
			"1999,1999,3,4,180u,0,-",
			"1999,2010,9,0:9,240u,60,S",
			"2000,2007,2,0:9,180u,0,-",
			"2008,2008,2,30,180u,0,-",
			"2009,2009,2,0:9,180u,0,-",
			"2010,2010,3,0:1,180u,0,-",
			"2011,2011,4,0:2,180u,0,-",
			"2011,2011,7,0:16,240u,60,S",
			"2012,9999,3,0:23,180u,0,-",
			"2012,9999,8,0:2,240u,60,S"
		],
		"AusAQ": [
			"1917,1917,0,1,-1,60,-",
			"1917,1917,2,25,120,0,-",
			"1942,1942,0,1,120,60,-",
			"1942,1942,2,29,120,0,-",
			"1942,1942,8,27,120,60,-",
			"1943,1944,2,0,120,0,-",
			"1943,1943,9,3,120,60,-"
		],
		"ATAQ": [
			"1967,1967,9,0:1,120s,60,-",
			"1968,1968,2,0,120s,0,-",
			"1968,1985,9,0,120s,60,-",
			"1969,1971,2,0:8,120s,0,-",
			"1972,1972,1,0,120s,0,-",
			"1973,1981,2,0:1,120s,0,-",
			"1982,1983,2,0,120s,0,-",
			"1984,1986,2,0:1,120s,0,-",
			"1986,1986,9,0:15,120s,60,-",
			"1987,1990,2,0:15,120s,0,-",
			"1987,1987,9,0:22,120s,60,-",
			"1988,1990,9,0,120s,60,-",
			"1991,1999,9,0:1,120s,60,-",
			"1991,2005,2,0,120s,0,-",
			"2000,2000,7,0,120s,60,-",
			"2001,9999,9,0:1,120s,60,-",
			"2006,2006,3,0:1,120s,0,-",
			"2007,2007,2,0,120s,0,-",
			"2008,9999,3,0:1,120s,0,-"
		],
		"NZAQ": [
			"1974,1974,10,3,120s,60,D",
			"1975,1988,9,0,120s,60,D",
			"1989,1989,9,8,120s,60,D",
			"1990,2006,9,0:1,120s,60,D",
			"1975,1975,1,23,120s,0,S",
			"1976,1989,2,0:1,120s,0,S",
			"1990,2007,2,0:15,120s,0,S",
			"2007,9999,8,0,120s,60,D",
			"2008,9999,3,0:1,120s,0,S"
		]
	},
	"zones": {
		"Antarctica/Casey": [
			"0,-,zzz,1969",
			"480,-,WST,2009 9 18 0 120",
			"0,,",
			"660,-,CAST,2010 2 5 0 120",
			"0,,",
			"480,-,WST,2011 9 28 0 120",
			"660,-,CAST,2012 1 21 0 1020",
			"480,-,WST"
		],
		"Antarctica/Davis": [
			"0,-,zzz,1957 0 13",
			"420,-,DAVT,1964 10 ",
			"0,-,zzz,1969 1",
			"420,-,DAVT,2009 9 18 0 120",
			"300,-,DAVT,2010 2 10 0 1200",
			"420,-,DAVT,2011 9 28 0 120",
			"300,-,DAVT,2012 1 21 0 1200",
			"420,-,DAVT"
		],
		"Antarctica/Mawson": [
			"0,-,zzz,1954 1 13",
			"360,-,MAWT,2009 9 18 0 120",
			"0,,",
			"300,-,MAWT"
		],
		"Antarctica/Macquarie": [
			"0,-,zzz,1911",
			"600,-,EST,1916 9 1 0 120",
			"600,1:00,EST,1917 1",
			"600,AusAQ,EST,1967",
			"600,ATAQ,EST,2010 3 4 0 180",
			"660,-,MIST"
		],
		"Indian/Kerguelen": [
			"0,-,zzz,1950 ",
			"300,-,TFT"
		],
		"Antarctica/DumontDUrville": [
			"0,-,zzz,1947",
			"600,-,PMT,1952 0 14 ",
			"0,-,zzz,1956 10",
			"600,-,DDUT"
		],
		"Antarctica/Syowa": [
			"0,-,zzz,1957 0 29",
			"180,-,SYOT"
		],
		"Antarctica/Vostok": [
			"0,-,zzz,1957 11 16",
			"360,-,VOST"
		],
		"Antarctica/Rothera": [
			"0,-,zzz,1976 11 1",
			"-180,-,ROTT"
		],
		"Antarctica/Palmer": [
			"0,-,zzz,1965",
			"-240,ArgAQ,AR%sT,1969 9 5",
			"-180,ArgAQ,AR%sT,1982 4",
			"-240,ChileAQ,CL%sT"
		],
		"Antarctica/McMurdo": [
			"0,-,zzz,1956",
			"720,NZAQ,NZ%sT"
		]
	},
	"lastZone": "Antarctica/McMurdo"
};
