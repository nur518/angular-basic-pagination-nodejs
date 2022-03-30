  getAllUser(pageNo:number): Observable<User[]> {
    let URL = (`http://localhost:4000/api/v1/user?page=${pageNo}&limit=${1}`);
    return this.http.get<User[]>(URL)
      .pipe(
        tap(res => {console.log(res)}),
        catchError(this.handleError)
      );
  }
