// components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Zap } from 'lucide-react';

interface StatProps {
  icon: typeof Globe | typeof TrendingUp | typeof Zap;
  title: string;
  description: string;
}

const HeroSection = () => {
  const stats: StatProps[] = [
    {
      icon: Globe,
      title: "覆盖全面",
      description: "服务超过500家科技企业，连接10000+AI人才，覆盖机器学习、深度学习、计算机视觉等多个AI细分领域"
    },
    {
      icon: TrendingUp,
      title: "快速增长",
      description: "月度撮合交易额突破1000万，同比增长300%，平台活跃企业数量季度增长率达50%"
    },
    {
      icon: Zap,
      title: "高效匹配",
      description: "智能匹配系统将招聘周期缩短70%，人才匹配度达95%，为企业节省大量招聘成本和时间"
    }
  ];

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="gradient-heading text-5xl md:text-6xl font-bold mb-6">
          重新定义AI人才服务
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          专注于AI领域的灵活用工平台，连接顶尖AI人才与企业需求，
          打造智能时代的人才生态
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            免费注册
          </Button>
          <Button size="lg" variant="outline">
            预约咨询
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-3">
                <stat.icon className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg">{stat.title}</h3>
              </div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;