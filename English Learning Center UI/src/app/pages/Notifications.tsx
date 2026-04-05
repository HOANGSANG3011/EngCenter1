import { useState } from 'react';
import { Bell, Check, Trash2, BookOpen, Award, Calendar, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      type: 'course',
      icon: BookOpen,
      title: 'Lớp học sắp bắt đầu',
      message: 'Lớp IELTS Intensive của bạn sẽ bắt đầu vào Thứ 2, 19:00',
      time: '2 giờ trước',
      read: false,
    },
    {
      id: 2,
      type: 'achievement',
      icon: Award,
      title: 'Chúc mừng!',
      message: 'Bạn đã hoàn thành Module 1: Listening Skills',
      time: '1 ngày trước',
      read: false,
    },
    {
      id: 3,
      type: 'reminder',
      icon: Calendar,
      title: 'Nhắc nhở nộp bài tập',
      message: 'Bài tập Writing Task 2 sẽ hết hạn vào 18:00 hôm nay',
      time: '3 ngày trước',
      read: true,
    },
    {
      id: 4,
      type: 'payment',
      icon: DollarSign,
      title: 'Thanh toán thành công',
      message: 'Thanh toán học phí khóa Business English đã được xác nhận',
      time: '5 ngày trước',
      read: true,
    },
    {
      id: 5,
      type: 'course',
      icon: BookOpen,
      title: 'Tài liệu mới',
      message: 'Giảng viên đã tải lên tài liệu mới cho bài Reading Strategies',
      time: '1 tuần trước',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl mb-1">Thông Báo</h1>
            <p className="text-gray-600">
              Bạn có {unreadCount} thông báo chưa đọc
            </p>
          </div>
          <Button variant="outline">
            <Check className="w-5 h-5 mr-2" />
            Đánh Dấu Đã Đọc
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">
              Tất Cả ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread">
              Chưa Đọc ({unreadCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-3">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <Card
                    key={notification.id}
                    className={`cursor-pointer transition ${
                      !notification.read ? 'border-l-4 border-l-indigo-600 bg-indigo-50/50' : ''
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            notification.type === 'course'
                              ? 'bg-indigo-100'
                              : notification.type === 'achievement'
                              ? 'bg-green-100'
                              : notification.type === 'reminder'
                              ? 'bg-amber-100'
                              : 'bg-blue-100'
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${
                              notification.type === 'course'
                                ? 'text-indigo-600'
                                : notification.type === 'achievement'
                                ? 'text-green-600'
                                : notification.type === 'reminder'
                                ? 'text-amber-600'
                                : 'text-blue-600'
                            }`}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="font-semibold">{notification.title}</h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0 mt-2"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{notification.time}</span>
                            <button className="text-gray-400 hover:text-red-600 transition">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="unread">
            <div className="space-y-3">
              {notifications
                .filter((n) => !n.read)
                .map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <Card
                      key={notification.id}
                      className="border-l-4 border-l-indigo-600 bg-indigo-50/50 cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                              notification.type === 'course'
                                ? 'bg-indigo-100'
                                : 'bg-green-100'
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                notification.type === 'course'
                                  ? 'text-indigo-600'
                                  : 'text-green-600'
                              }`}
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-semibold">{notification.title}</h3>
                              <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0 mt-2"></div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{notification.time}</span>
                              <button className="text-gray-400 hover:text-red-600 transition">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
