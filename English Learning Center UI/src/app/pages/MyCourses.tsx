import { useNavigate } from 'react-router';
import { BookOpen, Clock, Calendar, TrendingUp, Play } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function MyCourses() {
  const navigate = useNavigate();

  const activeCourses = [
    {
      id: 1,
      title: 'IELTS Intensive 6.5+',
      progress: 35,
      nextClass: 'Thứ 2, 15/04 - 19:00',
      totalLessons: 36,
      completedLessons: 12,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'Business English Pro',
      progress: 60,
      nextClass: 'Thứ 4, 17/04 - 18:30',
      totalLessons: 24,
      completedLessons: 15,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
    },
  ];

  const completedCourses = [
    {
      id: 3,
      title: 'Giao Tiếp Cơ Bản',
      completedDate: '15/03/2026',
      certificate: true,
      score: 95,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl mb-2">Khóa Học Của Tôi</h1>
            <p className="text-gray-600">Quản lý và theo dõi tiến độ học tập</p>
          </div>
          <Button onClick={() => navigate('/courses')} className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700">
            <BookOpen className="w-5 h-5 mr-2" />
            Tìm Khóa Học Mới
          </Button>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Đang Học ({activeCourses.length})</TabsTrigger>
            <TabsTrigger value="completed">Đã Hoàn Thành ({completedCourses.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  <CardContent className="md:col-span-3 p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl mb-2">{course.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Buổi tiếp theo: {course.nextClass}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {course.completedLessons}/{course.totalLessons} bài
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => navigate(`/my-courses/${course.id}`)}
                        className="bg-indigo-600 hover:bg-indigo-700 self-start"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Tiếp Tục Học
                      </Button>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Tiến độ</span>
                        <span className="font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  <CardContent className="md:col-span-3 p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h3 className="text-xl mb-2">{course.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Hoàn thành: {course.completedDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            Điểm: {course.score}/100
                          </div>
                        </div>
                        {course.certificate && (
                          <div className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                            Đã nhận chứng chỉ
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button variant="outline" className="self-start">
                          Tải Chứng Chỉ
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => navigate(`/my-courses/${course.id}`)}
                          className="self-start"
                        >
                          Xem Chi Tiết
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
