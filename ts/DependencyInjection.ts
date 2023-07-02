class Inject {
  private _container = new Map();
  constructor(private _provider: any[] = []) {
    _provider.map((service) => this._container.set(service, new service()));
  }
  get(serviceKey: any) {
    const resultService = this._container.get(serviceKey);
    if (!resultService) {
      throw Error("no service");
    }
    return resultService;
  }
}

class UserService {
  hello() {
    console.log("hello");
  }
}

class HahaService {
  haha() {
    console.log("haha");
  }
}
const inject = new Inject([UserService, HahaService]);

const userData = inject.get(UserService);
const hahaData = inject.get(HahaService);
userData.hello();
hahaData.haha();
