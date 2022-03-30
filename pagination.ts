  ngOnInit(): void {
    // this.userService.getAllUser().subscribe({
    //   next: (res: any) => {
    //     this.allUser = res.data.map((user: any) => user);
    //   },
    //   error: (err) => {
    //     console.log(err.error.message);
    //   },
    // });
    
    this.store.dispatch(userActions.ShowAllUsersAction({payload: 1}));   
    this.users$ = this.store.select(userReducer.getUsers);
  } 

  paginateHandler(pageNo:number):void {
    this.store.dispatch(userActions.ShowAllUsersAction({payload: pageNo}));   
    this.users$ = this.store.select(userReducer.getUsers);
  }
