var exams_info = {exams_choice:"选择题",exams_judge:"判断题",exams_write:"填空题",exams_others:null}
var exams_tip = {
  subject:"美术",
  type:"全真中考",
  questions:"选择题10道，判断题10道，填空题10道，赏析题1道，实践题3道（自选1道）",
  time:"60分钟"
}
var exams_choice = [
  {
    question:"中国画的主要工具材料有______。",
    choice:["白纸、铅笔和彩色颜料","铅笔和油画棒","毛笔、墨、颜料和宣纸等"],
    answer:2
  },
  {
    question:"人体比例以______为度量单位。",
    choice:["厘米","头宽","头高"],
    answer:2
  },
  {
    question:"宣纸分为生宣纸和______。",
    choice:["熟宣纸","水彩纸","白纸"],
    answer:0
  },
  {
    question:"《蒙娜丽莎》的作者是______。",
    choice:["德拉克洛瓦","达芬奇","柯罗"],
    answer:1
  },
  {
    question:"下面哪一项不属于正确的透视关系？______。",
    choice:["近大远小","近高远低","近窄远宽"],
    answer:2
  },
  {
    question:"下列三种颜色相比属于冷色调的颜色是______。",
    choice:["橙","黄","蓝"],
    answer:2
  },
  {
    question:"剪纸属于美术中的______。",
    choice:["规划","工艺","雕塑"],
    answer:1
  },
  {
    question:"中国古代的陶艺分为______。",
    choice:["彩陶和黑陶","黑陶和白陶","白陶和彩陶"],
    answer:0
  },
  {
    question:"《清明上河图》是北宋画家______的作品。",
    choice:["崔白","张择端","赵佶"],
    answer:1
  },
  {
    question:"眼睛大约在整个头部的______。",
    choice:["上方","中间","下方"],
    answer:1
  }
]
var exams_judge = [
  {
    question:"优秀的美术作品有一个共同的特征：有表现力的情节，精心设计的构图，人物的深入刻画，环境气氛的渲染等。总之，要表达画家的独特感受，引发观赏者的思索。",
    answer:0
  },
  {
    question:"《推磨》是一幅套色木刻画。",
    answer:1
  },
  {
    question:"《弋射收获图》是东汉画像砖。",
    answer:0
  },
  {
    question:"《牛耕》是甘肃嘉峪关魏晋墓砖画。",
    answer:0
  },
  {
    question:"日用品在设计的时候，只要考虑给人以美的感受就可以了，不用考虑其他的。",
    answer:1
  },
  {
    question:"优秀的美术作品不是停留在对劳动情节的描绘上。",
    answer:1
  },
  {
    question:"梵高作品的特点是强烈明亮的色彩，粗狂的笔触，如《播种者》。",
    answer:0
  },
  {
    question:"黑体字的笔画特征是：横细竖粗，点象水滴。",
    answer:1
  },
  {
    question:"平行透视有两个消失点，叫余点。",
    answer:1
  },
  {
    question:"人体比例随着动作的不同会有变化。",
    answer:0
  }
]
var exams_write = [
  {
    question:"色彩三原色是指______、______、______三种颜色；",
    answer:["红","黄","蓝"]
  },
  {
    question:"三间色是指______、______、______三种颜色。",
    answer:["橙","绿","紫"]
  },
  {
    question:"我们学过两种透视规律，分别是______透视和_____透视。",
    answer:["成角","平行"]
  },
  {
    question:"“文房四宝”是指：笔、______、______、砚。",
    answer:["墨","纸"]
  },
  {
    question:"梅、______、______、______被中国古代画家誉为四君子。",
    answer:["兰","竹"]
  },
  {
    question:"绘画中人的五官是指：眼睛、______、鼻子、口、______。",
    answer:["眉毛","耳朵"]
  },
  {
    question:"人体在活动时，各部分都有变化，人体正立时肩胛骨与骨盆带成______状。",
    answer:["水平"]
  },
  {
    question:"我们共学过四种美术字，分别有：______、宋体、______、______。",
    answer:["黑体","仿宋体","变形美术字"]
  },
  {
    question:"陶瓷艺术是______与______的艺术。",
    answer:["工艺","绘画"]
  },
  {
    question:"中国剪纸以强烈的民族特色著称于世，______是重要的剪纸产地",
    answer:["河北"]
  }
]
var exams_others = [
  {
    type:"赏析题（改编）",
    question:"试分析罗丹作品《思想者》",
    answer:"雕像《思想者》，塑造了一个强有力的劳动男子。这个巨人弯着腰，屈着膝，右手托着下颌，默视下面发生的悲剧。他那深沉的目光以及拳头触及嘴唇的姿态，表现出一种极度痛苦的心情。他渴望沉入“绝对”的冥想，努力把那强壮的身体抽缩、弯压成一团。他的肌肉非常紧张，不但在全神贯注地思考，而且沉浸在苦恼之中。他注视着下面所演的悲剧，他同情、爱惜人类，因而不能对那些犯罪的人下最后的判决，所以他怀着极其矛盾的心情，在那深刻的沉思中，体现了伟大诗人但丁内心的苦闷。"
  },
  {
    type:"实践题-命题绘画",
    question:"请以毕业联欢会为主题制作海报",
    answer:"略"
  },
  {
    type:"实践题-手工制作（待补充）",
    question:"正在出题，敬请期待",
    answer:"略"
  },
  {
    type:"实践题-书法",
    question:"用毛笔书写李白诗作《静夜思》，要求：字体饱满圆润，工整美观。",
    answer:"略"
  }
]