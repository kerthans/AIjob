// components/sections/HowItWorks.tsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileCheck, HandshakeIcon, Rocket, ArrowRight } from 'lucide-react';

interface StepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  step: number;
}

const StepCard: React.FC<StepProps> = ({ icon: Icon, title, description, details, step }) => (
  <Card className="relative hover:shadow-lg transition-all">
    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
      {step}
    </div>
    <CardContent className="pt-8">
      <div className="flex flex-col items-center text-center mb-4">
        <Icon className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-2 text-sm text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start space-x-2">
            <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const HowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      icon: Search,
      title: "需求发布",
      description: "快速发布企业AI人才需求",
      details: [
        "详细描述技能要求和项目周期",
        "设定预算范围和合作方式",
        "指定远程/现场工作模式",
        "定义具体的项目目标"
      ],
      step: 1
    },
    {
      icon: FileCheck,
      title: "智能匹配",
      description: "AI系统自动匹配最佳人选",
      details: [
        "多维度技能匹配分析",
        "经验与项目需求匹配度评估",
        "可用性和时间匹配",
        "薪资预期适配性分析"
      ],
      step: 2
    },
    {
      icon: HandshakeIcon,
      title: "双选确认",
      description: "企业与人才双向选择",
      details: [
        "在线简历查看和筛选",
        "视频面试快速对接",
        "项目细节沟通确认",
        "合作意向达成"
      ],
      step: 3
    },
    {
      icon: Rocket,
      title: "启动合作",
      description: "高效开启项目合作",
      details: [
        "标准化合同签署",
        "项目里程碑制定",
        "收付款流程保障",
        "全程项目管理支持"
      ],
      step: 4
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">服务流程</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          四步流程，为企业和AI人才搭建高效的合作桥梁，
          让人才匹配更简单，让项目协作更顺畅
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            平均仅需3-5天即可完成从需求发布到项目启动的全流程
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;