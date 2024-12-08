'use client';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Target, 
  Rocket, 
  Users, 
  ChartBar, 
  Shield,
  Globe,
  TrendingUp,
  Zap,
  CheckCircle,
  Award,
  BarChart
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="gradient-heading text-5xl md:text-6xl font-bold mb-6">
            重新定义AI人才服务
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            专注于AI领域的灵活用工平台，连接顶尖AI人才与企业需求，
            打造智能时代的人才生态系统
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              了解更多
            </Button>
            <Button size="lg" variant="outline">
              预约咨询
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg">覆盖全面</h3>
              </div>
              <p className="text-gray-600">服务超过500家企业，连接10000+AI人才</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg">快速增长</h3>
              </div>
              <p className="text-gray-600">月度交易额突破1000万，同比增长300%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg">高效匹配</h3>
              </div>
              <p className="text-gray-600">平均招聘周期缩短70%，人才匹配度达95%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">平台核心优势</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-card">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI智能匹配</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>基于深度学习的技能图谱分析</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>多维度人岗匹配算法</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>实时推荐最适合的候选人</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>专业服务保障</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>严格的人才背景审核</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>全流程合规支持</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>专业的法律顾问团队</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <ChartBar className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>灵活用工模式</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>按需灵活用工</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>远程办公支持</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>弹性工作制度</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section id="market" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">市场洞察与前景</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-blue-600 mr-2" />
                  市场规模
                </h3>
                <p className="text-gray-600 mb-4">
                  2024年中国AI人才市场规模预计达到2000亿元，年增长率超过35%。灵活用工占比将从目前的15%提升至25%。
                </p>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  竞争优势
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <span className="font-semibold">专业垂直：</span>
                      <span className="text-gray-600">专注AI领域，深耕细分市场</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <span className="font-semibold">技术领先：</span>
                      <span className="text-gray-600">自研AI匹配算法，效率提升300%</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <span className="font-semibold">生态完整：</span>
                      <span className="text-gray-600">培训、认证、就业一站式服务</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>发展规划</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Rocket className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">平台扩张</h4>
                        <p className="text-gray-600">
                          计划2024年底覆盖全国一线及新一线城市，服务企业数量突破1000家
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">生态建设</h4>
                        <p className="text-gray-600">
                          打造AI人才培养基地，建立行业标准认证体系，构建完整的人才发展生态
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">国际化</h4>
                        <p className="text-gray-600">
                          布局海外市场，连接全球AI人才资源，打造国际化人才服务平台
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开启AI人才服务新时代
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            无论您是寻找AI人才的企业，还是希望找到理想机会的专业人士，
            我们都能为您提供最优质的服务
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              预约演示
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              立即注册
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}