// components/sections/FeaturesSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Users, CheckCircle, Code, Briefcase } from 'lucide-react';

interface FeatureCardProps {
  icon: typeof Brain | typeof Shield | typeof Users | typeof Code | typeof Briefcase;
  title: string;
  features: string[];
  description: string;
}

const FeatureCard = ({ icon: Icon, title, features, description }: FeatureCardProps) => (
  <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
    <CardHeader>
      <Icon className="h-12 w-12 text-blue-600 mb-4" />
      <CardTitle>{title}</CardTitle>
      <p className="text-gray-600">{description}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  const features: FeatureCardProps[] = [
    {
      icon: Brain,
      title: "AI智能匹配",
      description: "运用先进的AI技术，精准匹配企业需求与人才技能",
      features: [
        "基于深度学习的多维度技能图谱分析",
        "实时智能推荐系统，匹配度高达95%",
        "自动化简历筛选和能力评估",
        "个性化的职业发展建议"
      ]
    },
    {
      icon: Briefcase,
      title: "灵活用工解决方案",
      description: "为企业提供多样化的用工方案",
      features: [
        "项目制合作模式，按需付费",
        "远程办公支持体系",
        "弹性工作时间管理",
        "标准化的项目交付流程"
      ]
    },
    {
      icon: Code,
      title: "技术人才培养",
      description: "持续提升AI人才的专业技能",
      features: [
        "AI领域前沿技术培训",
        "实战项目经验积累",
        "专家导师一对一指导",
        "行业认证支持"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">核心功能</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          我们致力于打造全方位的AI人才服务生态系统，为企业和人才搭建高效对接的桥梁，
          推动AI产业的发展和创新。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;