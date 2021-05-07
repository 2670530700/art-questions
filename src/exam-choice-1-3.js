var exams_info = {exams_choice:"选择题"}
var exams_tip = {
  subject:"美术",
  type:"选择题-基础知识",
  questions:"选择题30道",
  time:"60分钟"
}
var exams_choice = [
{'question': '下列图案中属于均衡式单独纹样的是______。', "image":"src/image/exam-choice-1-3-1.jpeg", 'choice': ['第1个', '第2个', '第3个', "第4个"], 'answer': 3},
{'question': '下列图案中，最能体现适合纹样的是______。', 'choice': ['第1个', '第2个', '第3个', "第4个"], 'answer': 3},
{'question': '图案形式美的基本规律，包括对称、平衡、对比、______等。', 'choice': ['写生', '构图', '透视', '律动'], 'answer': 3},
{'question': '下列关于纹样的说法不正确的是______。', 'choice': ['纹样是指由一定的组织式样变化构成的图案', '纹样包含了单独纹样、适合纹样、连续纹样等', '适合于一定形状空间中的装饰图案称之为适合纹样', '适合纹样没有边框的限制，也称为“自由纹样”'], 'answer': 3},
{'question': '静物画是以______为主要描绘题材的绘画。这些物体必须根据作者创作构思的需要，经过认真选择，精心摆布和安排，在形象和色调上都能达到高度和谐，表达出内在的关系。', 'choice': ['动物', '植物', '相对静止的物体', '相对运动的物体'], 'answer': 2},
{'question': '拍摄满意的作品有几个要点，下列哪个选项不是？______。', 'choice': ['明确的表现主题', '要有一个视觉主体', '画面主次分明', '把握明暗透视效果'], 'answer': 3},
{'question': '展示设计不包括______。', 'choice': ['立体空间的设计', '平面设计', '音响效果设计', '时间的设计'], 'answer': 2},
{'question': '下列不属于展示的设计要素的是______。', 'choice': ['高档的科技设备', '鲜明的艺术个性', '高效的传达功能', '合理的经济成本'], 'answer': 0},
{'question': '城市广场的永恒主题是______。', 'choice': ['高端大气', '时尚新颖', '美观大方', '绿色环保'], 'answer': 3},
{'question': '以下不属于城市广场主要构成要素的是______。', 'choice': ['种植绿化', '指示系统', '消防实施', '灯光亮化'], 'answer': 2},
{'question': '印象派是19世纪后半期诞生于法国的绘画流派，关于“印象派”油画，同学们众说纷纭，正确的观点是______。①不写生仅仅凭印象作画 ②“印象派”是追求光、色表现的画派 ③印象派的作品都很抽象，从语言形式上看属于抽象艺术 ④莫奈属于印象派画家 ⑤梵高属于印象派画', 'choice': ['①②', '①②④⑤', '①③⑤', "②④"], 'answer': 3},
{'question': '“表现了竞技运动员健美而又富于力感的形象，在人体运动中体现一种和谐之美和理想之美”，你认为以上描述适合下列哪些作品？______。', 'choice': ['《维纳斯》', '《拉奥孔》', '《思想者》', '《掷铁饼者》'], 'answer': 3},
{'question': '速写不一定要画出许多细节，也不必很完整，但它们却能够流露出画家对镜像的大量感受。速写不一定是完成画，它的最初目的是______。', 'choice': ['记录信息、收录想法', "记录事物结构", '记录当时场景、人物信息', '收录画家对景象的大量感受'], 'answer': 0},
{'question': '人类最早的文字是书写在湿泥板上的，西亚两河流域的苏美尔人发明的______文字和泥板书写。', 'choice': ['甲骨文', '希腊', '楔形', '象形'], 'answer': 2},
{'question': '风筝的发明起源与______时代的木鸢和木鹊，传说鲁班九曾制作过它。宋代以后出现了纸鸢，它比传说中的木鸢更轻，飞得更高。', 'choice': ['先秦', '五代', '汉代', '西晋'], 'answer': 0},
{'question': '新印象派认为印象派表现光色效果的方法还不够“科学”，主张不要在调色板上调和颜料，应该在画布上把原色排列或交错在一起，让观众的眼睛进行视觉混合，然后获得一种新的色彩感受。该画派又被称为为“______”派。', 'choice': ['抽象', '现代', '表现', '点彩'], 'answer': 3},
{'question': '下列哪种不是古希腊人创造的三种柱式名称？______。', 'choice': ['多立克式', '爱奥尼式', '塔斯干式', '科林斯式'], 'answer': 2},
{'question': '巴黎圣母院是哪个国家的建筑？______。', 'choice': ['法国', '英国', '意大利', '德国'], 'answer': 0},
{'question': '下列哪个建筑不是哥特式的建筑风格？______。', 'choice': ['巴黎圣母院', '圣索菲亚教堂', '科隆大教堂', '米兰大教堂'], 'answer': 1},
{'question': '泰姬陵是哪个国家建筑？______。', 'choice': ['泰国', '巴基斯坦', '印度', '伊朗'], 'answer': 2},
{'question': '埃菲尔铁塔是哪个国家的建筑？______。', 'choice': ['意大利', '美国', '法国', '西班牙'], 'answer': 2},
{'question': '悉尼歌剧院设计师是哪个国家？______。', 'choice': ['英国', '德国', '澳大利亚', '丹麦'], 'answer': 3},
{'question': '悉尼歌剧院是哪个国家的建筑？______。', 'choice': ['美国', '澳大利亚', '巴西', '意大利'], 'answer': 1},
{'question': '世界上最大的一座金字塔名称______。', 'choice': ['胡夫金字塔', '吉萨金字塔', '门卡乌拉金字塔', '哈弗拉金字塔'], 'answer': 0},
{'question': '埃菲尔铁塔的设计者是______。', 'choice': ['埃菲尔', '罗马诺', '皮尔诺', '罗西'], 'answer': 0},
{'question': '悉尼歌剧院设计者是______。', 'choice': ['培根', '伍重', '高迪', '奥斯特伯格'], 'answer': 1},
{'question': '米兰大教堂在哪个国家？______。', 'choice': ['法国', '西班牙', '德国', '意大利'], 'answer': 3},
{'question': '下面不属于我国传统民间工艺美术作品的是______。', 'choice': ['风筝', '剪纸', '年画', '雕塑'], 'answer': 3},
{'question': '秦始皇陵出土的兵马俑被誉为世界第八大奇迹，这些兵俑的高度______。', 'choice': ['比真人矮很多', '和真人差不多高', '比真人高很多', '极其高大'], 'answer': 1},
{'question': '我国著名的四大石窟有：莫高窟、云冈石窟、龙门石窟和______。', 'choice': ['麦积山石窟', '大足石窟', '龙游石窟', '大象山石窟'], 'answer': 0},
]