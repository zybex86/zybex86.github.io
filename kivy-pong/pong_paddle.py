from kivy.properties import NumericProperty
from kivy.uix.widget import Widget
from kivy.vector import Vector


class PongPaddle(Widget):

    score = NumericProperty(0)
    
    def bounce_ball(self, ball):
        if self.collide_widget(ball):
            vx, vy = ball.velocity
            offset = ball.center_x - (self.x + self.width / 2)
            bounced = Vector(vx, -vy)
            ball.velocity = offset * 0.35, bounced.y
            