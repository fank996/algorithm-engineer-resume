import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, GraduationCap, Briefcase, Code, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const skills = {
    languages: ['Python', 'C++', 'Java', 'TypeScript', 'Go'],
    frameworks: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    tools: ['Docker', 'Kubernetes', 'Git', 'Linux', 'AWS', 'GCP'],
    algorithms: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning']
  };

  const experiences = [
    {
      company: '某知名科技公司',
      position: '高级算法工程师',
      period: '2021.06 - 至今',
      responsibilities: [
        '负责推荐算法的优化和迭代，提升用户点击率 15%',
        '设计并实现了基于深度学习的个性化推荐系统',
        '带领 5 人团队完成项目交付，优化模型推理性能 30%',
        '发表技术博客 10+ 篇，贡献开源项目'
      ]
    },
    {
      company: '某互联网独角兽',
      position: '算法工程师',
      period: '2019.07 - 2021.05',
      responsibilities: [
        '参与核心搜索算法的开发与优化',
        '设计并实现了文本分类和情感分析模型',
        '优化了关键词匹配算法，搜索准确率提升 20%',
        '参与技术面试和新人培养'
      ]
    }
  ];

  const projects = [
    {
      name: '智能推荐系统',
      description: '基于深度学习的个性化推荐引擎',
      tech: ['Python', 'PyTorch', 'Redis', 'Kafka'],
      achievements: [
        '日均处理请求 1亿次',
        '用户点击率提升 15%',
        '推荐准确率达到 92%'
      ]
    },
    {
      name: '自然语言处理平台',
      description: '企业级 NLP 解决方案，支持文本分类、情感分析、实体识别',
      tech: ['Python', 'TensorFlow', 'BERT', 'FastAPI'],
      achievements: [
        '服务 20+ 业务线',
        '模型推理延迟降低 50%',
        '处理准确率 95%+'
      ]
    },
    {
      name: '计算机视觉检测系统',
      description: '工业缺陷检测和质量控制系统',
      tech: ['Python', 'OpenCV', 'YOLO', 'Docker'],
      achievements: [
        '检测准确率 98%',
        '实时检测速度 30fps',
        '节省人工成本 60%'
      ]
    }
  ];

  const education = [
    {
      school: '清华大学',
      degree: '计算机科学与技术 硕士',
      period: '2016.09 - 2019.06',
      details: ['研究方向：机器学习与数据挖掘', 'GPA: 3.8/4.0', '发表 SCI 论文 2 篇']
    },
    {
      school: '北京大学',
      degree: '计算机科学与技术 学士',
      period: '2012.09 - 2016.06',
      details: ['专业排名前 10%', '获得国家奖学金', 'ACM 竞赛银牌']
    }
  ];

  const awards = [
    { name: '国家奖学金', year: '2015, 2017' },
    { name: 'ACM-ICPC 亚洲区域赛银牌', year: '2015' },
    { name: '全国大学生数学建模竞赛一等奖', year: '2014' },
    { name: '公司年度优秀员工', year: '2022, 2023' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl font-bold border-4 border-white/30">
              AI
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">张三</h1>
              <p className="text-xl text-blue-100 mb-4">高级算法工程师</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>zhangsan@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>138-0000-0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>北京市海淀区</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} />
                  <span>github.com/zhangsan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Profile Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-blue-600" />
              个人简介
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              5 年算法工程师经验，专注于机器学习、深度学习和推荐系统。在推荐算法优化、
              自然语言处理和计算机视觉等领域有深入研究和丰富实战经验。具备扎实的数学基础
              和编程能力，擅长将理论转化为实际产品价值。带领团队完成多个核心项目，
              发表多篇技术论文，活跃于技术社区。
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="text-blue-600" />
              技能栈
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">编程语言</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="default">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">框架与库</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">开发工具</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="success">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">算法方向</h4>
              <div className="flex flex-wrap gap-2">
                {skills.algorithms.map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="text-blue-600" />
              工作经历
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{exp.position}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="text-blue-600" />
              项目经验
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                  <ExternalLink size={18} className="text-blue-600 cursor-pointer" />
                </div>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              教育背景
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{edu.school}</h4>
                    <p className="text-blue-600">{edu.degree}</p>
                  </div>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Awards */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-blue-600" />
              荣誉奖项
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{award.name}</span>
                  <Badge variant="outline">{award.year}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">感谢您阅读我的简历</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
