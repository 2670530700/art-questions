var exams_info = {exams_choice:"选择题"}
var exams_tip = {
  subject:"美术",
  type:"选择题-基础知识",
  questions:"选择题30道",
  time:"60分钟"
}
var exams_choice = [
{'question': '我国是瓷器的发明国，中国的瓷器很早就流传到国外，中国因此被称为瓷国，______是我国历史上最早产生的瓷器。', 'choice': ['白瓷', '青瓷', '彩色瓷器', '青花瓷'], 'answer': 1},
{'question': '一幅经典工笔重彩花卉作品，将它分解为四个步骤学习临摹，正确的步骤是______。', 'choice': ['勾线 渲染 罩色 刻画', '刻画 勾线 渲染 罩色', '刻画 渲染 罩色 勾线', '勾线 罩色 刻画 渲染'], 'answer': 0},
{'question': '寄情于物，借物抒情，是中国画的一大特色，你知道岁寒三友指的是哪些题材吗？______。', 'choice': ['梅 兰 竹', '松 竹 梅', '兰 竹 菊', '兰 梅 菊'], 'answer': 1},
{'question': '______合称“四君子”。因其所具有的人格化特征，成为画家常见的题材。', 'choice': ['梅兰翠菊', '梅兰松菊', '梅棠松菊', '梅兰竹菊'], 'answer': 3},
{'question': '以表现山川景色为主体的绘画，在中国画中称为______。', 'choice': ['花鸟画', '静物', '人物画', '山水画'], 'answer': 3},
{'question': '牛毛皴是披麻皴的变体，一种横向的细曲皴法，用笔柔劲披离，形如牛毛，故名。元代的赵孟頫、王蒙都擅用“牛毛皴”。这种技法常运用在______的表现上。', 'choice': ['中国山水画', '油画', '水彩画', '水粉画'], 'answer': 0},
{'question': '笔墨纸砚是______的不可缺少工具。', 'choice': ['中国画', '油画', '水彩画', '水粉画'], 'answer': 0},
{'question': '居住条件与生活环境的“宅园合一、可赏、可游、可居”，“花木寓意、叠石寄情”的人物思想特质，具有题咏、匾额、楹联等文化元素的精神内容。这些都是用来形容我国古代的______。', 'choice': ['中国山水画', '园林', '宗教建筑', '油画'], 'answer': 1},
{'question': '苏州园林有“人间天堂，园林之城”的美誉。这里素来以山水秀丽，园林典雅而闻名天下，有“江南园林甲天下，苏州园林甲江南”的美称。苏州园林多属于______。', 'choice': ['私家园林', '皇家园林', '西方园林', '佛家园林'], 'answer': 0},
{'question': '______多以规模宏大、真山真水、皇权寓意浓厚为主要特点。', 'choice': ['私家园林', '皇家园林', '西方园林', '佛家园林'], 'answer': 1},
{'question': '诗书画印的完美结合体现在______作品中。', 'choice': ['油画', '书法', '中国画', '水彩画'], 'answer': 2},
{'question': '中国的青铜器在夏、商、周三代为鼎盛时期，按不同的功能需求可分为______等，也有用作生活日常实用器具，如家具、灯具等。', 'choice': ['食器、酒器、水器、乐器、兵器、礼器、车马器', '食器、酒器、水器、乐器、兵器', '乐器、兵器、礼器、车马器', '酒器、水器、乐器、兵器、礼器'], 'answer': 0},
{'question': '苏州四大名园是指______。', 'choice': ['沧浪亭狮子林拙政园留园', '颐和园狮子林避暑山庄怡园', '沧浪亭网狮园拙政园怡园', '颐和园网狮园避暑山庄留园'], 'answer': 0},
{'question': '下列园林规划设计原则描述不正确的是______。', 'choice': ['实用、经济、美观是园林设计的基本原则', '美观是设计首要考虑的问题', '实用、经济、美观三者之间是辩证统一的', '在实用、经济的前提下，尽可能做到美观'], 'answer': 1},
{'question': '下列哪一项不属于书籍装帧设计的基本元素的是______。', 'choice': ['图案', '色彩', '文字', '构图'], 'answer': 3},
{'question': '中国人在发明造纸术前，书写的材料不包括______。', 'choice': ['竹简', '木牍', '湿泥板', '丝帛'], 'answer': 2},
{'question': '张贴画又称“海报”，它通常张贴在______。', 'choice': ['人流稀疏的地方', '商业街区', '工业园区', '郊外'], 'answer': 1},
{'question': '一幅完整的招贴画应包括______。', 'choice': ['标志、主办者、主题口号、活动内容、联系方式', '标志、主办者、创意画面、活动内容、联系方式', '标志、主办者、创意画面、主题口号、联系方式', '标志、主办者、创意画面、主题口号、活动内容、联系方式'], 'answer': 3},
{'question': '关于西方传统绘画的描绘正确的是______。', 'choice': ['追求明暗和色彩变化', '多用散点透视', '重视笔墨情趣', '多以线造型'], 'answer': 0},
{'question': '石窟属于一种独特的寺庙形式，是专供佛教徒修行礼拜的场所，通常它的内部装饰是用______。', 'choice': ["卷轴画", "壁画", "年画", '中国画'], 'answer': 1},
{'question': '中国联通公司标志的创意源于______。', 'choice': ['双钱', '中国结', '方胜', '太极图'], 'answer': 1},
{'question': '“以黏土加上纤维物、河沙、水，揉和成的胶泥为材质，在木制的骨架上进行形体塑造，阴干后填缝、打磨，再在外表涂上颜色进行描绘或装饰的作品。”这是指______。', 'choice': ['面塑', '石雕', '木雕', '泥塑'], 'answer': 3},
{'question': '雕塑分为圆雕和______两种。', 'choice': ['石雕', '泥雕', '浮雕', '冰雕'], 'answer': 2},
{'question': '服装的三大要素是______。', 'choice': ['款型色彩使用的面料', '样式色彩价格', '款型尺寸使用的面料', '样式色彩价格'], 'answer': 0},
{'question': '下列关于适合纹样说法正确的一项是______。', 'choice': ['单独存在和独立使用的纹样，它没有边框的限制，所以也称为“自由纹样”', '适合于一定形状空间中的装饰图案，如方、圆、三角、梯形等', '通过纹样单元的重复而构成的连续性图案，如二方连续、四方连续等', '由历代沿传下来的具有独特民族艺术风格的纹样'], 'answer': 1},
{'question': '下列关于单独纹样说法正确的一项是______。', 'choice': ['单独存在和独立使用的纹样，它没有边框的限制，所以也称为“自由纹样”', '适合于一定形状空间中的装饰图案，如方、圆、三角、梯形等', '通过纹样单元的重复而构成的连续性图案，如二方连续、四方连续等', '由历代沿传下来的具有独特民族艺术风格的纹样'], 'answer': 0},
{'question': '下列关于连续纹样说法正确的一项是______。', 'choice': ['单独存在和独立使用的纹样，它没有边框的限制，所以也称为“自由纹样”', '适合于一定形状空间中的装饰图案，如方、圆、三角、梯形等', '通过纹样单元的重复而构成的连续性图案，如二方连续、四方连续等', '由历代沿传下来的具有独特民族艺术风格的纹样'], 'answer': 2},
{'question': '图案装饰变化中，属于夸张变化的表现方法是______。', 'choice': ['添加组合', '减化夸张', '重复分解', '观察写生'], 'answer': 1},
{'question': '图案装饰变化中，属于丰富变化的表现方法是______。', 'choice': ['添加组合', '减化夸张', '重复分解', '观察写生'], 'answer': 0},
{'question': '图案装饰变化中，属于构成变化的表现方法是______。', 'choice': ['添加组合', '减化夸张', '重复分解', '观察写生'], 'answer': 2}
]