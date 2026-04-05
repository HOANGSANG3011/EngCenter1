import { useNavigate, useParams } from 'react-router';
import { PlayCircle, FileText, CheckCircle, Lock, Calendar, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

export default function EnrolledCourseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const course = {
    title: 'IELTS Intensive 6.5+',
    progress: 35,
    nextClass: { date: 'Thứ 2, 15/04/2026', time: '19:00-21:00' },
    modules: [
      {
        id: 1,
        title: 'Module 1: Listening Skills',
        lessons: [
          { id: 1, title: 'Introduction to IELTS Listening', duration: '45 min', completed: true },
          { id: 2, title: 'Listening Strategies', duration: '60 min', completed: true },
          { id: 3, title: 'Practice Test 1', duration: '30 min', completed: false, current: true },
          { id: 4, title: 'Common Topics', duration: '45 min', completed: false, locked: true },
        ],
      },
      {
        id: 2,
        title: 'Module 2: Reading Skills',
        lessons: [
          { id: 5, title: 'Reading Techniques', duration: '50 min', completed: false, locked: true },
          { id: 6, title: 'Skimming & Scanning', duration: '40 min', completed: false, locked: true },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-6">
          <h1 className="text-2xl md:text-3xl mb-4">{course.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-indigo-200 mb-1">Tiến độ học tập</div>
              <div className="text-2xl mb-2">{course.progress}%</div>
              <Progress value={course.progress} className="h-2 bg-indigo-400" />
            </div>
            <div>
              <div className="text-sm text-indigo-200 mb-1">Buổi học tiếp theo</div>
              <div className="text-lg">{course.nextClass.date}</div>
              <div className="text-sm text-indigo-200">{course.nextClass.time}</div>
            </div>
            <div>
              <Button variant="outline" className="bg-white text-indigo-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Lịch Học Đầy Đủ
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <h2 className="text-xl mb-4">Nội Dung Khóa Học</h2>
            <div className="space-y-4">
              {course.modules.map((module) => (
                <Card key={module.id}>
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-4">{module.title}</h3>
                    <div className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            lesson.current
                              ? 'border-indigo-600 bg-indigo-50'
                              : lesson.locked
                              ? 'bg-gray-50'
                              : 'hover:bg-gray-50 cursor-pointer'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {lesson.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : lesson.locked ? (
                              <Lock className="w-5 h-5 text-gray-400" />
                            ) : (
                              <PlayCircle className="w-5 h-5 text-indigo-600" />
                            )}
                            <div>
                              <div className={lesson.locked ? 'text-gray-400' : ''}>
                                {lesson.title}
                              </div>
                              <div className="text-sm text-gray-500">{lesson.duration}</div>
                            </div>
                          </div>
                          {lesson.current && (
                            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                              Tiếp Tục
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Tài Liệu Học Tập</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-5 h-5 mr-2" />
                      Sách giáo trình
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-5 h-5 mr-2" />
                      Đề thi mẫu
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-5 h-5 mr-2" />
                      Từ vựng
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Giảng Viên</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
                      alt="Teacher"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">Ms. Sarah Johnson</div>
                      <div className="text-sm text-gray-600">IELTS Expert</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Liên Hệ
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Nhóm Học Tập</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Users className="w-5 h-5" />
                    <span>12 học viên</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Tham Gia Nhóm
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
