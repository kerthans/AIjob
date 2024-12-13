// components/sections/PlatformAdvantages.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Shield, 
  Users, 
  Zap, 
  Cloud,
  Database,
  ChartBar,
  Building2,
  CheckCircle,
  Award,
  TrendingUp
} from 'lucide-react';

interface AdvantageCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  };
}

interface MetricProps {
  icon: React.ElementType;
  value: string;
  label: string;
  growth?: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  stats
}) => (
  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-xl">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          {stats && (
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">{stats.value}</span>
              <span className="text-gray-600 text-sm">{stats.label}</span>
            </div>
          )}
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Metric: React.FC<MetricProps> = ({ icon: Icon, value, label, growth }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
    <div className="flex items-center space-x-3 mb-3">
      <Icon className="h-6 w-6 text-blue-600" />
      <h3 className="font-semibold text-lg text-gray-800">{label}</h3>
    </div>
    <p className="text-3xl font-bold text-blue-600 mb-2">{value}</p>
    {growth && (
      <p className="text-green-600 text-sm flex items-center">
        <TrendingUp className="h-4 w-4 mr-1" />
        {growth}
      </p>
    )}
  </div>
);

const PlatformAdvantages: React.FC = () => {
  const metrics: MetricProps[] = [
    {
      icon: Building2,
      value: "500+",
      label: "合作企业",
      growth: "月增长率 15%"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "AI人才库",
      growth: "月增长率 20%"
    },
    {
      icon: ChartBar,
      value: "95%",
      label: "匹配成功率",
      growth: "同比提升 25%"
    },
    {
      icon: Award,
      value: "98%",
      label: "客户满意度",
      growth: "持续保持领先"
    }
  ];

  const advantages: AdvantageCardProps[] = [
    {
      icon: BrainCircuit,
      title: "智能人才匹配系统",
      description: "基于深度学习的多维度人才匹配系统，实现精准高效的供需对接",
      features: [
        "AI驱动的技能图谱分析",
        "智能简历解析和评估",
        "基于项目的动态匹配算法",
        "持续学习的推荐系统"
      ],
      stats: {
        value: "95%",
        label: "匹配准确率"
      }
    },
    {
      icon: Cloud,
      title: "一站式管理平台",
      description: "提供完整的项目管理和协作工具，支持全流程在线化运作",
      features: [
        "项目进度实时追踪",
        "文档协作与版本控制",
        "自动化工作流程",
        "多方沟通工具集成"
      ],
      stats: {
        value: "75%",
        label: "效率提升"
      }
    },
    {
      icon: Shield,
      title: "全方位服务保障",
      description: "完善的风险管控和服务保障体系，让合作更加安心",
      features: [
        "严格的人才背景审核",
        "标准化合同文件",
        "资金托管服务",
        "知识产权保护"
      ],
      stats: {
        value: "100%",
        label: "合规率"
      }
    },
    {
      icon: Database,
      title: "专业技术生态",
      description: "构建完整的AI技术生态体系，助力人才持续成长",
      features: [
        "技术培训体系",
        "项目实战机会",
        "专家导师指导",
        "技术社区支持"
      ],
      stats: {
        value: "10000+",
        label: "技术专家"
      }
    }
  ];

  return (
    <section id="platform-advantages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">平台核心优势</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          以技术创新为驱动，以服务价值为导向，
          打造最专业的AI人才服务平台
        </p>

        {/* 核心指标展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Metric key={index} {...metric} />
          ))}
        </div>

        {/* 优势详情 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>

        {/* 服务承诺 */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-8">我们的服务承诺</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">响应速度</h4>
              <p className="text-gray-600">2小时内响应需求<br />24小时内完成匹配</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">服务保障</h4>
              <p className="text-gray-600">100%资金安全<br />保密协议保护</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">品质保证</h4>
              <p className="text-gray-600">不满意全额退款<br />7*24小时服务支持</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformAdvantages;