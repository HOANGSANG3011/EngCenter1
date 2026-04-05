import { useState } from 'react';
import { useNavigate } from 'react-router';
import { X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Slider } from '../components/ui/slider';

export default function CourseFilter() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    levels: [] as string[],
    types: [] as string[],
    schedules: [] as string[],
    duration: [] as string[],
  });

  const handleApplyFilters = () => {
    navigate('/courses');
  };

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    const currentFilters = filters[category] as string[];
    if (currentFilters.includes(value)) {
      setFilters({
        ...filters,
        [category]: currentFilters.filter((item) => item !== value),
      });
    } else {
      setFilters({
        ...filters,
        [category]: [...currentFilters, value],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl">Bộ Lọc Nâng Cao</h1>
          <Button variant="ghost" onClick={() => navigate('/courses')}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price Range */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg mb-4">Khoảng Giá</h3>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                max={10000000}
                step={100000}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{filters.priceRange[0].toLocaleString('vi-VN')}đ</span>
                <span>{filters.priceRange[1].toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            {/* Levels */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg mb-4">Trình Độ</h3>
              <div className="space-y-3">
                {['beginner', 'intermediate', 'advanced', 'all-levels'].map((level) => (
                  <div key={level} className="flex items-center gap-2">
                    <Checkbox
                      id={level}
                      checked={filters.levels.includes(level)}
                      onCheckedChange={() => toggleFilter('levels', level)}
                    />
                    <Label htmlFor={level} className="cursor-pointer">
                      {level === 'beginner' && 'Sơ cấp'}
                      {level === 'intermediate' && 'Trung cấp'}
                      {level === 'advanced' && 'Cao cấp'}
                      {level === 'all-levels' && 'Tất cả trình độ'}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Types */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg mb-4">Loại Khóa Học</h3>
              <div className="space-y-3">
                {['ielts', 'toeic', 'conversation', 'business', 'kids', 'pronunciation'].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <Checkbox
                      id={type}
                      checked={filters.types.includes(type)}
                      onCheckedChange={() => toggleFilter('types', type)}
                    />
                    <Label htmlFor={type} className="cursor-pointer">
                      {type === 'ielts' && 'IELTS'}
                      {type === 'toeic' && 'TOEIC'}
                      {type === 'conversation' && 'Giao tiếp'}
                      {type === 'business' && 'Business English'}
                      {type === 'kids' && 'Tiếng Anh thiếu nhi'}
                      {type === 'pronunciation' && 'Luyện phát âm'}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedules */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg mb-4">Lịch Học</h3>
              <div className="space-y-3">
                {['morning', 'afternoon', 'evening', 'weekend'].map((schedule) => (
                  <div key={schedule} className="flex items-center gap-2">
                    <Checkbox
                      id={schedule}
                      checked={filters.schedules.includes(schedule)}
                      onCheckedChange={() => toggleFilter('schedules', schedule)}
                    />
                    <Label htmlFor={schedule} className="cursor-pointer">
                      {schedule === 'morning' && 'Sáng (8h-12h)'}
                      {schedule === 'afternoon' && 'Chiều (14h-18h)'}
                      {schedule === 'evening' && 'Tối (18h-21h)'}
                      {schedule === 'weekend' && 'Cuối tuần'}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg mb-4">Thời Lượng</h3>
              <div className="space-y-3">
                {['1-month', '2-3-months', '4-6-months', '6-plus-months'].map((duration) => (
                  <div key={duration} className="flex items-center gap-2">
                    <Checkbox
                      id={duration}
                      checked={filters.duration.includes(duration)}
                      onCheckedChange={() => toggleFilter('duration', duration)}
                    />
                    <Label htmlFor={duration} className="cursor-pointer">
                      {duration === '1-month' && '1 tháng'}
                      {duration === '2-3-months' && '2-3 tháng'}
                      {duration === '4-6-months' && '4-6 tháng'}
                      {duration === '6-plus-months' && 'Trên 6 tháng'}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary & Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h3 className="text-lg mb-4">Bộ Lọc Đã Chọn</h3>
              <div className="space-y-3 mb-6">
                <div className="text-sm">
                  <span className="text-gray-600">Giá:</span>{' '}
                  <span className="font-semibold">
                    {filters.priceRange[0].toLocaleString('vi-VN')}đ - {filters.priceRange[1].toLocaleString('vi-VN')}đ
                  </span>
                </div>
                {filters.levels.length > 0 && (
                  <div className="text-sm">
                    <span className="text-gray-600">Trình độ:</span>{' '}
                    <span className="font-semibold">{filters.levels.length} đã chọn</span>
                  </div>
                )}
                {filters.types.length > 0 && (
                  <div className="text-sm">
                    <span className="text-gray-600">Loại:</span>{' '}
                    <span className="font-semibold">{filters.types.length} đã chọn</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleApplyFilters}
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  size="lg"
                >
                  Áp Dụng Bộ Lọc
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    setFilters({
                      priceRange: [0, 10000000],
                      levels: [],
                      types: [],
                      schedules: [],
                      duration: [],
                    })
                  }
                  className="w-full"
                >
                  Xóa Tất Cả
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
