from kivy.app import App
from kivy.uix.widget import Widget

from pong_ball import PongBall
from pong_game import PongGame


class PongApp(App):
    def build(self):
        return PongGame()


if __name__ == '__main__':
    PongApp().run()
