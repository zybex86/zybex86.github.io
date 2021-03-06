from random import randint

from kivy.app import App
from kivy.properties import ObjectProperty
from kivy.uix.widget import Widget

WIN_CONDITION = 5


class PongGame(Widget):
    ball = ObjectProperty(None)
    player1 = ObjectProperty(None)
    player2 = ObjectProperty(None)

    def serve_ball(self, vel=(5, 6)):
        self.ball.center = self.center
        self.ball.velocity = vel

    def update(self, dt):
        self.ball.move()

        # bounce of paddles
        self.player1.bounce_ball(self.ball)
        self.player2.bounce_ball(self.ball)

        # went of to a side to score point?
        if self.ball.y < self.y:
            self.player2.score += 1
            if self.player2.score == WIN_CONDITION:
                App.get_running_app().stop()
            self.serve_ball(vel=(randint(-20, 20), 6))
        if self.ball.y > self.height:
            self.player1.score += 1
            if self.player1.score == WIN_CONDITION:
                App.get_running_app().stop()
            self.serve_ball(vel=(randint(-20, 20), -6))

        # bounce off left and right
        if (self.ball.x < 0) or (self.ball.right > self.width):
            self.ball.velocity_x *= -1

    def on_touch_move(self, touch):
        if touch.y < self.height/3:
            self.player1.center_x = touch.x
        if touch.y > self.height - self.height/3:
            self.player2.center_x = touch.x
