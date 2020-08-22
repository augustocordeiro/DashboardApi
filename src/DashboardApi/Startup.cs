using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NLog.Extensions.Logging;

namespace DashboardApi
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            ConfigureLog(services);

            services.AddControllers();
        }

        private static void ConfigureLog(IServiceCollection services)
        {
            services.AddLogging(builder =>
                                {
                                    builder.SetMinimumLevel(LogLevel.Trace);
                                    builder.AddNLog(new NLogProviderOptions
                                                    {
                                                        CaptureMessageTemplates = true,
                                                        CaptureMessageProperties = true
                                                    });
                                })
                    .BuildServiceProvider();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors(builder =>
                        {
                            builder
                               .AllowAnyOrigin()
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                        });

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}