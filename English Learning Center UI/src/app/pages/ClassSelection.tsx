import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Clock, Users, MapPin, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';

export default function ClassSelection() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedClass, setSelectedClass] = useState('');

  const classes = [
    {
      id: 'class-1',
      schedule: 'Thứ 2, 4, 6 - 19:00-21:00',
      startDate: '15/05/2026',
      seats: 3,
      maxSeats: 15,
      location: 'EngCenter - Quận 1',
      teacher: 'Ms. Sarah Johnson',
    },
    {
      id: 'class-2',
      schedule: 'Thứ 3, 5, 7 - 18:00-20:00',
      startDate: '18/05/2026',
      seats: 7,
      maxSeats: 15,
      location: 'EngCenter - Quận 3',
      teacher: 'Mr. David Lee',
    },
    {
      id: 'class-3',
      schedule: 'Cuối tuần - 14:00-17:00',
      startDate: '20/05/2026',
      seats: 5,
      maxSeats: 15,
      location: 'EngCenter - Quận 1',
      teacher: 'Ms. Emily Chen',
    },
  ];

  const handleContinue = () => {
    if (selectedClass) {
      navigate('/enrollment/student-info');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <span className="font-semibold">Chọn lớp</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                2
              </div>
              <span className="text-gray-500">Thông tin</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                3
              </div>
              <span className="text-gray-500">Thanh toán</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl mb-6">Chọn Lớp Học</h1>

        <RadioGroup value={selectedClass} onValueChange={setSelectedClass}>
          <div className="space-y-4 mb-6">
            {classes.map((classItem) => (
              <Card
                key={classItem.id}
                className={`cursor-pointer transition ${
                  selectedClass === classItem.id ? 'ring-2 ring-indigo-600' : ''
                }`}
                onClick={() => setSelectedClass(classItem.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <RadioGroupItem value={classItem.id} id={classItem.id} className="mt-1" />
                    <Label htmlFor={classItem.id} className="flex-1 cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-gray-400" />
                            <span>{classItem.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <span>{classItem.location}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="text-sm text-gray-600">
                            Giảng viên: <span className="font-semibold text-gray-900">{classItem.teacher}</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Khai giảng: <span className="font-semibold text-gray-900">{classItem.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-gray-400" />
                            <span className="text-sm">
                              Còn {classItem.seats}/{classItem.maxSeats} chỗ
                            </span>
                            {classItem.seats <= 5 && (
                              <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                                Sắp đầy
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </RadioGroup>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => navigate(`/courses/${id}`)}>
            Quay Lại
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!selectedClass}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Tiếp Tục
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}