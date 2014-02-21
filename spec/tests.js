var chai = require("chai");
chai.should();
var expect = chai.expect

var moment = require('moment')

describe("moment and Date", function(){
  it("can get the current date and time", function(){
    var m = moment()
    var d = new Date()
    m.year().should.equal(d.getFullYear())
    m.hour().should.equal(d.getHours())
  })
  it("can set to a future date", function(){
    var m = moment("April 20, 2014")
    var d = new Date("April 20, 2014")
    m.date().should.equal(20)
    m.month().should.equal(3)
    m.month().should.not.equal(4)
    d.getMonth().should.equal(3)
    d.getMonth().should.not.equal(4)
  })
  it("can compare dates", function(){
    var m  = moment(),
        d  = new Date(),
        mf = moment('Jan 1, 2100'),
        df = new Date('Jan 1, 2100')
    
    m.isBefore(mf).should.be.ok
    expect(df > d).to.be.ok
    mf.isBefore(m).should.not.be.ok
    expect(df < d).to.not.be.ok
  });
  it("can find the difference between dates", function(){
    var m = moment("February 19, 2014")
    var d = new Date("February 19, 2014")
    var m420 = moment("April 20, 2014")
    var d420 = new Date("April 20, 2014")

    m.diff(m420, "days").should.equal(-60)
    m420.diff(m, "days").should.equal(60)

    Math.floor((d420-d) / (1000*60*60*24)).should.equal(59)
  })
  it("can be used to calculate days, hours, minutes, and seconds", function(){
    var m = new moment(),
        m420 = moment("April 20, 2014")

    var days = m420.diff(m, 'days'),
        hours = m420.diff(m, 'hours'),
        minutes = m420.diff(m, 'minutes'),
        seconds = m420.diff(m, 'seconds')

    console.log(days + ' ' + hours % 24 + ' ' + minutes % 60 + ' ' + seconds % 60)

    var d = new Date(),
        d420 = new Date('April 20, 2014'),
        diff = d420 - d,
        second = 1000,
        minute = 1000 * 60,
        hour   = 1000 * 60 * 60,
        day = 1000 * 60 * 60 * 24

    var ddays = Math.floor(diff / day),
        dhours = Math.floor( (diff / hour) % 24),
        dminutes = Math.floor( (diff / minute) % 60),
        dseconds = Math.floor( (diff / second) % 60)

    console.log(ddays + ' ' + dhours + ' ' + dminutes  + ' ' + dseconds)
    console.log(d.toLocaleTimeString())
  })
})

describe('setTimeout & setInterval',  function(){
  it('setTimeout runs a function after X milliseconds', function(done){
    var then = new Date(),
        now

    setTimeout(function(){
      now = new Date()
      expect(then<now).to.be.ok
      expect(now<then).to.not.be.ok
      done()
    }, 250)
  })

  it('setInterval runs a function every X milliseconds', function(done){
    var count = 0,
        interval

    interval = setInterval(function(){
      count += 1
    }, 75)
    
    setTimeout(function(){
      clearInterval(interval)
      expect(count).not.to.equal(0)
      expect(count).to.be.gt(2)
      done()
    }, 250)
  })
})
