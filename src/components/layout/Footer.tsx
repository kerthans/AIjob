'use client';
import React from 'react';
import { BrainCircuit, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AI Talent Hub</span>
            </div>
            <p className="text-sm text-gray-400">
              引领AI人才革新，打造灵活用工新生态。连接企业与AI人才，创造更高效的协作方式。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* WeChat Icon */}
                  <path d="M8.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,10.5A1.5,1.5 0 0,1 10,12A1.5,1.5 0 0,1 8.5,13.5M15.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,10.5A1.5,1.5 0 0,1 17,12A1.5,1.5 0 0,1 15.5,13.5M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z" />
                </svg>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">平台服务</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">AI人才招聘</a></li>
              <li><a href="#" className="hover:text-blue-400">项目外包</a></li>
              <li><a href="#" className="hover:text-blue-400">技术咨询</a></li>
              <li><a href="#" className="hover:text-blue-400">人才培训</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">资源中心</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">行业报告</a></li>
              <li><a href="#" className="hover:text-blue-400">案例分析</a></li>
              <li><a href="#" className="hover:text-blue-400">技术博客</a></li>
              <li><a href="#" className="hover:text-blue-400">人才观察</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>400-888-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@aitalenthub.com</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>北京市朝阳区科技园区</span>
              </li> */}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2024 AI Talent Hub. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-blue-400">隐私政策</a>
            {' '} | {' '}
            <a href="#" className="hover:text-blue-400">服务条款</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;