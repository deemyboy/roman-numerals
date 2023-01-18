'use strict';

const romanToArabic = require('./roman_to_arabic');

const cases =[[1,'I'],[2,'II'],[3,'III'],
             [4,'IV'],[5,'V'],[6,'VI'],
             [7,'VII'],[8,'VIII'],[9,'IX'],
             [10,'X'],[11,'XI'],[12,'XII'],
             [13,'XIII'],[15,'XV'],[16,'XVI'],
             [18,'XVIII'],[19,'XIX'],[20,'XX'],
             [22,'XXII'],[24,'XXIV'],[25,'XXV'],
             [30,'XXX'],[39,'XXXIX'],[40,'XL'],
             [42,'XLII'],[45,'XLV'],[49,'XLIX'],
             [50,'L'],[55,'LV'],[59,'LIX'],
             [70,'LXX'],[85,'LXXXV'],[89,'LXXXIX'],
             [90,'XC'],[95,'XCV'],[99,'XCIX'],
             [100,'C'],[105,'CV'],[199,'CXCIX'],
             [400,'CD'],[505,'DV'],[899,'DCCCXCIX'],
             [950,'CML'],[1505,'MDV'],[2899,'MMDCCCXCIX'],
             
             ];
describe('romanToArabic', () => {
  test.each(cases)('testing %p gives %p',(arabic,roman) => {
    expect(romanToArabic(arabic)).toEqual(roman);
  });
});
