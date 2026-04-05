import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CreditCard, Building2, Wallet, QrCode, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const orderSummary = {
    courseName: 'IELTS Intensive 6.5+',
    className: 'Thứ 2, 4, 6 - 19:00-21:00',
    price: 6500000,
    discount: 0,
    tax: 0,
  };

  const total = orderSummary.price - orderSummary.discount + orderSummary.tax;

  const paymentMethods = [
    { id: 'card', icon: CreditCard, name: 'Thẻ tín dụng / Ghi nợ' },
    { id: 'bank', icon: Building2, name: 'Chuyển khoản ngân hàng' },
    { id: 'momo', icon: Wallet, name: 'Ví MoMo' },
    { id: 'qr', icon: QrCode, name: 'QR Code' },
  ];

  const handlePayment = () => {
    navigate('/enrollment/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-gray-500">Chọn lớp</span>
            </div>
            <div className="w-12 h-0.5 bg-green-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-gray-500">Thông tin</span>
            </div>
            <div className="w-12 h-0.5 bg-indigo-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                3
              </div>
              <span className="font-semibold">Thanh toán</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl mb-6">Thanh Toán</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Chọn Phương Thức Thanh Toán</h3>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <div
                          key={method.id}
                          className={`border rounded-lg p-4 cursor-pointer transition ${
                            paymentMethod === method.id ? 'border-indigo-600 bg-indigo-50' : ''
                          }`}
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={method.id} id={method.id} />
                            <Icon className="w-6 h-6 text-gray-600" />
                            <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                              {method.name}
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>

                {/* Card Payment Form (shown when card is selected) */}
                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4 pt-6 border-t">
                    <div>
                      <Label htmlFor="cardNumber">Số thẻ</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Ngày hết hạn</Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Tên trên thẻ</Label>
                      <Input id="cardName" placeholder="NGUYEN VAN A" className="mt-1" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Tóm Tắt Đơn Hàng</h3>

                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <div className="font-semibold mb-1">{orderSummary.courseName}</div>
                    <div className="text-gray-600">{orderSummary.className}</div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Học phí</span>
                    <span>{orderSummary.price.toLocaleString('vi-VN')}đ</span>
                  </div>

                  {orderSummary.discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Giảm giá</span>
                      <span>-{orderSummary.discount.toLocaleString('vi-VN')}đ</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <Label htmlFor="promoCode" className="text-sm">Mã giảm giá</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="promoCode"
                      placeholder="Nhập mã"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline">Áp dụng</Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Tổng cộng</span>
                    <span className="text-2xl text-indigo-600">
                      {total.toLocaleString('vi-VN')}đ
                    </span>
                  </div>

                  <Button
                    onClick={handlePayment}
                    disabled={!paymentMethod}
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    size="lg"
                  >
                    Thanh Toán Ngay
                  </Button>

                  <div className="mt-4 text-xs text-center text-gray-500">
                    Bằng việc thanh toán, bạn đồng ý với{' '}
                    <a href="#" className="text-indigo-600 hover:underline">
                      Điều khoản dịch vụ
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Quay Lại
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
