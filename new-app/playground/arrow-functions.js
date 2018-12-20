    function square(x) {
    console.log(x * x);
    return x * x;
    }

    square(3);

    let square1 = function (x) {
        console.log(x * x);
        return x * x;
    };

    square1(9);

    let triple = x => console.log(x * x * x);

    triple(5);

    let c  = (a, b) => {
        console.log(a,b);
    };

    c(2,3);

    function person(fname, lname){
        this.fname = fname;
        this.lname =  lname;
        console.log(fname, lname);
    }
    let p = new person('Rajeev', 'Lochan');
    console.log(p.fname);
    console.log(p.lname);

    let user =  {
        name: 'Rajeev',
        add: function () {
            console.log(this.name);
            console.log(arguments);
        }
    };

    let user1 = {
        name: 'Lochan',
        add: () => {
            console.log(this.name);
            console.log(arguments);
        }
    };

  console.log(user1.add(1,2,3));
  console.log(user.add(1,2,3));

  let array = [1,2,3,4];
  [a,b,c,d] = array;

  console.log(a);
