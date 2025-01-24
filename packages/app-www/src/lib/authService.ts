export class AuthService {
  private static authUrl: string | null = null;
    private static credentials: { username: string; password: string } | null = null;
    private static token: string | null = null;
  
    static configure(apiToken: string, authUrl?: string, credentials?: { username: string; password: string }): void {
      if (!apiToken && !authUrl && !credentials) {
        throw new Error("You must provide either an API token or authentication credentials.");
      }
      this.token = apiToken || null;
      this.authUrl = authUrl || null;
      this.credentials = credentials || null;
    }
  
    static getAuthHeaders(): Record<string, string> {
      if (!this.token) {
        throw new Error("No API token available. Ensure `configure()` has been called.");
      }
      return {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      };
    }
  
    static getToken(): string | null {
      return this.token;
    }
  
    static async login(): Promise<void> {
      if (!this.authUrl || !this.credentials) {
        throw new Error("Login is not properly configured. Set `authUrl` and `credentials`.");
      }
  
      try {
        const response = await fetch(this.authUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.credentials),
        });
  
        if (!response.ok) {
          throw new Error(`Login failed with status ${response.status}`);
        }
  
        const data = await response.json();
        if (data.jwt) {
          this.token = data.jwt;
          console.log("Login successful");
          console.log(this.token);
          
          
        } else {
          throw new Error("JWT not found in response");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        throw error;
      }
    }
  }
  