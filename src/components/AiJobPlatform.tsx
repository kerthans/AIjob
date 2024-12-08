import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BrainCircuit, Users, Briefcase, Star, CheckCircle } from 'lucide-react';

const AiJobPlatform = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">AI人才平台</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600">特色功能</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">工作流程</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">用户反馈</a>
          </div>
          <Button>立即注册</Button>
        </div>
      </nav>

      {/* Hero部分 */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            AI驱动的灵活用工解决方案
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            连接企业与AI人才，打造智能化人才配置平台，让招聘更高效、合作更灵活
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              开始招聘
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">了解更多</Button>
          </div>
        </div>
      </section>

      {/* 特色功能 */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">平台特色功能</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BrainCircuit className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI智能匹配</CardTitle>
                <CardDescription>
                  运用先进的AI算法，精准匹配企业需求与人才技能
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>技能精准匹配</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>智能推荐系统</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>灵活用工管理</CardTitle>
                <CardDescription>
                  提供完整的项目管理和人才管理解决方案
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>项目进度追踪</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>智能工时统计</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>一站式服务</CardTitle>
                <CardDescription>
                  从招聘到结算的全流程数字化解决方案
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>合同智能生成</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>自动化结算</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 用户反馈 */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">用户反馈</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/api/placeholder/32/32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold">张总监</div>
                    <div className="text-sm text-gray-500">某科技公司HR总监</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "AI人才平台帮助我们大大提升了招聘效率，找到合适的AI人才变得更加简单。平台的智能匹配功能非常准确，为我们节省了大量筛选时间。"
                </p>
                <div className="flex mt-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/api/placeholder/32/32" />
                    <AvatarFallback>LY</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold">李工程师</div>
                    <div className="text-sm text-gray-500">AI算法工程师</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "作为一名自由职业者，这个平台让我能够更灵活地安排工作时间，同时找到优质的项目机会。智能合约和自动结算功能让整个合作过程非常顺畅。"
                </p>
                <div className="flex mt-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 底部CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">准备开始您的AI人才之旅？</h2>
          <p className="text-xl text-gray-600 mb-8">
            立即加入我们的平台，探索AI人才市场的无限可能
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            免费注册
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BrainCircuit className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">AI人才平台</span>
              </div>
              <p className="text-sm">连接企业与AI人才的智能平台</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">平台服务</h3>
              <ul className="space-y-2 text-sm">
                <li>企业招聘</li>
                <li>人才推荐</li>
                <li>项目对接</li>
                <li>灵活用工</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">关于我们</h3>
              <ul className="space-y-2 text-sm">
                <li>公司介绍</li>
                <li>联系我们</li>
                <li>新闻动态</li>
                <li>加入我们</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">联系方式</h3>
              <ul className="space-y-2 text-sm">
                <li>客服电话：400-XXX-XXXX</li>
                <li>邮箱：contact@aijob.com</li>
                <li>地址：北京市朝阳区XX大厦</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-sm">
            <p>© 2024 AI人才平台 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AiJobPlatform;