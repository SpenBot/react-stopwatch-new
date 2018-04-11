
# TO ADD
- header title?
- ability to name stopwatches (ie. "dad", "mom", "billy", "sarah")



- this took about 3 hours.
  - although I did play with the dog outside, eat dinner, and screw around and shit.
  - should have taken like 2 hours then
  - getting stuck is part of the process so I'm including it, as well as styling decisions.





- for some reason I had a lot of problems with setState
  - I got confused with the different ways of doing it, but also that they are functions you actually have to call.
  - oh! So if you're in a component its a call not a reference to a props.function


- also the actual timer shit is hard.
- for some reason I couldn't just do setInterval to a method.
  - I think setInterval doesn't work in general in this case.

- setting it to a state works.
    - I guess its because

- this is not the right way to go about this if I wanted 00:00:00
  - well, it could work acutally.
  - I think there was some module which would change a number to format at it to time for you.
  - I think do the logic, and instead of each increment be a state, just a number is the state, then when you display it, use the module to display it as a time.

- also, each increment should really be its own component really.






```js
this.setState(prevState => ({
  sec: prevState.sec + 1
}))

let secCopy = this.state.sec
secCopy += 1
this.setState({
  sec: this.state.sec + 1
})



setInterval(
  this.setState(prevState => ({
    sec: prevState.sec + 1
  }))
  ,1000)

```
