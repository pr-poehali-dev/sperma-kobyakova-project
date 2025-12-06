import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const reviews = [
    {
      name: "Александр М.",
      rating: 5,
      text: "Невероятный вкус! Пью каждое утро, заряжает энергией на весь день.",
      avatar: "🧔"
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Лучший напиток, который я пробовала. Рекомендую всем друзьям!",
      avatar: "👩"
    },
    {
      name: "Дмитрий С.",
      rating: 5,
      text: "Качество на высоте. Заказываю регулярно, всегда быстрая доставка.",
      avatar: "👨"
    }
  ];

  const features = [
    {
      icon: "Sparkles",
      title: "Премиум качество",
      description: "Только натуральные ингредиенты высшего качества"
    },
    {
      icon: "Zap",
      title: "Энергия на весь день",
      description: "Уникальная формула для максимальной бодрости"
    },
    {
      icon: "Heart",
      title: "Польза для здоровья",
      description: "Обогащен витаминами и минералами"
    },
    {
      icon: "Award",
      title: "№1 в России",
      description: "Выбор миллионов покупателей"
    }
  ];

  const stores = [
    { name: "Магазин на Ленина, 15", city: "Москва", phone: "+7 (495) 123-45-67" },
    { name: "Магазин на Невском, 88", city: "Санкт-Петербург", phone: "+7 (812) 987-65-43" },
    { name: "Магазин на Красном проспекте, 42", city: "Новосибирск", phone: "+7 (383) 555-12-34" }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="http://yadaynebanyi.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              yadaynebanyi.com
            </a>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("product")} className="hover:text-primary transition-colors">
                О продукте
              </button>
              <button onClick={() => scrollToSection("reviews")} className="hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection("stores")} className="hover:text-primary transition-colors">
                Где купить
              </button>
            </div>
            <Button className="gradient-primary text-white hover:opacity-90">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 gradient-primary">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Сперма Кобякова
              <br />
              <span className="text-6xl md:text-8xl">ТОП 1 НАПИТОК</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Легендарный вкус, который покорил миллионы сердец
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Icon name="ShoppingCart" className="mr-2" size={24} />
                Купить сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={24} />
                Смотреть видео
              </Button>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="w-64 h-64 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center text-9xl animate-slide-up">
              🥤
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О продукте</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальная формула, созданная для настоящих ценителей качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300 border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-muted-foreground">Натуральные ингредиенты</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">5M+</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">#1</div>
              <p className="text-muted-foreground">В рейтинге продаж</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы покупателей</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{review.avatar}</div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <div className="flex text-yellow-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stores" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Где купить</h2>
            <p className="text-xl text-muted-foreground">Найдите ближайший магазин или закажите с доставкой</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Icon name="Store" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Наши магазины</h3>
                </div>
                <div className="space-y-4">
                  {stores.map((store, index) => (
                    <div key={index} className="pb-4 border-b last:border-0">
                      <h4 className="font-bold text-lg">{store.name}</h4>
                      <p className="text-muted-foreground">{store.city}</p>
                      <p className="text-sm text-primary mt-1">{store.phone}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Доставка</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Быстрая доставка</p>
                      <p className="text-sm text-muted-foreground">По всей России за 1-3 дня</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Бесплатная доставка</p>
                      <p className="text-sm text-muted-foreground">При заказе от 2000 рублей</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Пункты самовывоза</p>
                      <p className="text-sm text-muted-foreground">Более 5000 по всей стране</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon name="CreditCard" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Способы оплаты</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} />
                  <span>Банковские карты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} />
                  <span>СБП</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} />
                  <span>Наличные</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} />
                  <span>Рассрочка</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto text-center">
          <a href="http://yadaynebanyi.com/" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-4 gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-block">
            yadaynebanyi.com
          </a>
          <p className="text-white/70 mb-6">Сперма Кобякова - ТОП 1 напиток России</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
          </div>
          <p className="text-sm text-white/50">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}