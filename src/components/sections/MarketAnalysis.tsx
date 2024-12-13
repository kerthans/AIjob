// components/sections/MarketAnalysis.tsx
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Award, 
  Rocket, 
  Users, 
  Globe, 
  Target,

  BrainCircuit,
  LineChart
} from 'lucide-react';

interface MarketStatProps {
  title: string;
  value: string;
  growth: string;
  icon: React.ReactNode;
}

interface CompetitiveAdvantageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface DevelopmentPlanProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  timeline: string;
}

const MarketStat: React.FC<MarketStatProps> = ({ title, value, growth, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-blue-600 mb-2">{value}</p>
    <p className="text-gray-600">{growth}</p>
    <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
    </div>
  </div>
);

const CompetitiveAdvantage: React.FC<CompetitiveAdvantageProps> = ({ title, description, icon }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <div className="p-2 bg-blue-100 rounded-lg">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const DevelopmentPlan: React.FC<DevelopmentPlanProps> = ({ title, description, icon, timeline }) => (
  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:shadow-md transition-all">
    <div className="bg-blue-100 p-3 rounded-lg">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-blue-600">{timeline}</p>
    </div>
  </div>
);

const MarketAnalysis: React.FC = () => {
  const marketStats: MarketStatProps[] = [
    {
      title: "AI人才市场规模",
      value: "2000亿",
      growth: "年增长率 35%+",
      icon: <BarChart className="h-6 w-6 text-blue-600" />
    },
    {
      title: "灵活用工占比",
      value: "25%",
      growth: "较去年提升10%",
      icon: <LineChart className="h-6 w-6 text-blue-600" />
    }
  ];

  const advantages: CompetitiveAdvantageProps[] = [
    {
      title: "专业垂直",
      description: "专注AI领域，深耕细分市场，提供精准匹配服务",
      icon: <Target className="h-6 w-6 text-blue-600" />
    },
    {
      title: "技术领先",
      description: "自研AI匹配算法，效率提升300%，准确度达95%",
      icon: <BrainCircuit className="h-6 w-6 text-blue-600" />
    },
    {
      title: "生态完整",
      description: "集培训、认证、就业于一体的完整服务生态",
      icon: <Award className="h-6 w-6 text-blue-600" />
    }
  ];

  const plans: DevelopmentPlanProps[] = [
    {
      title: "平台扩张",
      description: "覆盖全国一线及新一线城市，服务企业数量突破1000家",
      icon: <Rocket className="h-6 w-6 text-blue-600" />,
      timeline: "2024年 Q4"
    },
    {
      title: "生态建设",
      description: "建立AI人才培养基地，构建行业标准认证体系",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      timeline: "2025年 Q2"
    },
    {
      title: "国际化布局",
      description: "拓展海外市场，打造全球AI人才服务网络",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      timeline: "2025年 Q4"
    }
  ];

  return (
    <section id="market" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">市场洞察与发展规划</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          深度解析AI人才市场趋势，把握发展机遇，
          为企业和人才提供更高效的服务平台
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {marketStats.map((stat, index) => (
            <MarketStat key={index} {...stat} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span>竞争优势</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <CompetitiveAdvantage key={index} {...advantage} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Rocket className="h-6 w-6 text-blue-600" />
                <span>发展规划</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {plans.map((plan, index) => (
                  <DevelopmentPlan key={index} {...plan} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;