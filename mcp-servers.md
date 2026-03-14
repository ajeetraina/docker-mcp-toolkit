# Core MCP Reference Servers

A curated list of reference Model Context Protocol (MCP) servers and implementations.

## Data & Files Servers

| Server | Description |
|--------|-------------|
| Filesystem | Secure file operations with configurable access controls |
| PostgreSQL | Read-only database access with schema inspection |
| SQLite | Database interaction and business intelligence features |
| Google Drive | File access and search capabilities |
| [MySQL Server](https://github.com/designcomputer/mysql_mcp_server) | A MCP server that enables secure interaction with MySQL databases |
| [Supabase](https://github.com/alexander-zuev/supabase-mcp-server) | End-to-end management of Supabase via chat interface with query executions, management API, migration versioning, and logs access |
| [Notion](https://github.com/makenotion/notion-mcp-server) | Official Notion MCP Server for interacting with Notion workspaces |
| [MCP Toolbox for Databases](https://github.com/googleapis/genai-toolbox) | Open source MCP server for databases by Google — supports BigQuery, Postgres, MySQL, Spanner, and more |
| [DBHub](https://github.com/bytebase/dbhub) | Zero-dependency, token-efficient database MCP server supporting Postgres, MySQL, SQL Server, and SQLite |
| [MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server) | Official MCP server to connect to MongoDB databases and MongoDB Atlas |
| [Redis MCP](https://github.com/redis/mcp-redis) | Official Redis MCP server providing a natural language interface for agents to manage and search Redis data |
| [Chroma MCP](https://github.com/chroma-core/chroma-mcp) | MCP server for the Chroma vector database — enables embeddings storage and semantic search |
| [DuckDB MCP](https://github.com/ktanaka101/mcp-server-duckdb) | MCP server implementation for DuckDB, providing database interaction capabilities |
| [MSSQL MCP](https://github.com/RichardHan/mssql_mcp_server) | MCP server for Microsoft SQL Server enabling secure read/write operations |
| [Excel MCP Server](https://github.com/haris-musa/excel-mcp-server) | MCP server for Excel file manipulation — read, write, and analyse spreadsheets |
| [Office Word MCP](https://github.com/GongRzhe/Office-Word-MCP-Server) | MCP server for creating, reading, and manipulating Microsoft Word documents |
| [Office PowerPoint MCP](https://github.com/GongRzhe/Office-PowerPoint-MCP-Server) | MCP server for PowerPoint manipulation — create and modify presentations |

## Dev Tools Servers

| Server | Description |
|--------|-------------|
| Git | Tools to read, search, and manipulate Git repositories |
| GitHub | Repository management and GitHub API integration |
| GitLab | GitLab API integration for project management |
| Sentry | Error tracking and analysis from Sentry.io |
| [AWS](https://github.com/awslabs/mcp) | Specialized MCP servers bringing AWS best practices to your development workflow |
| [IDA Pro](https://github.com/mrexodia/ida-pro-mcp) | MCP Server for IDA Pro reverse engineering tool |
| [Atlassian](https://github.com/sooperset/mcp-atlassian) | MCP server for Atlassian tools (Confluence, Jira) |
| [Cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) | Cloudflare MCP server for interacting with Cloudflare services |
| [XcodeBuildMCP](https://github.com/getsentry/XcodeBuildMCP) | MCP server providing Xcode build, test, and simulator tools for AI coding agents |
| [Microsoft MCP](https://github.com/microsoft/mcp) | Official catalog of Microsoft MCP server implementations (Azure, Office 365, and more) |
| [n8n MCP Server](https://github.com/leonardsellem/n8n-mcp-server) | MCP server for interacting with the n8n workflow automation API |
| [MCP Language Server](https://github.com/isaacphi/mcp-language-server) | Gives MCP clients access to semantic code tools — go-to-definition, references, diagnostics |
| [Godot MCP](https://github.com/Coding-Solo/godot-mcp) | MCP server for interfacing with the Godot game engine — launch, edit scenes, and run scripts |
| [Apify MCP Server](https://github.com/apify/apify-mcp-server) | MCP server for Apify — web scraping, data extraction from social media and e-commerce sites |
| [Pulumi MCP](https://github.com/pulumi/mcp-server) | Official Pulumi MCP server for infrastructure as code management |
| [Heroku MCP](https://github.com/heroku/heroku-mcp-server) | Official Heroku MCP server for managing apps, dynos, and add-ons |

## Web & Browser Servers

| Server | Description |
|--------|-------------|
| Brave Search | Web search using Brave's Search API |
| Fetch | Web content fetching optimized for LLM usage |
| Puppeteer | Browser automation and web scraping |
| [Playwright](https://github.com/microsoft/playwright-mcp) | Official Microsoft Playwright MCP server for browser automation and testing |
| [Firecrawl](https://github.com/mendableai/firecrawl-mcp-server) | Powerful web scraping capabilities for LLM clients |
| [Exa](https://github.com/exa-labs/exa-mcp-server) | Web search capabilities for LLMs using Exa |
| [Browser MCP](https://github.com/BrowserMCP/mcp) | Allows AI applications to control your browser |
| [Browserbase](https://github.com/browserbase/mcp-server-browserbase) | Enables LLMs to control a browser with Browserbase and Stagehand |
| [Execute Automation Playwright](https://github.com/executeautomation/mcp-playwright) | Tool to automate browsers and APIs in various LLM clients |
| [Figma Context](https://github.com/GLips/Figma-Context-MCP) | Provides Figma layout information to AI coding agents |
| [Baidu Maps](https://github.com/baidu-maps/mcp) | Baidu Maps MCP Server for mapping and location services |
| [Chrome MCP](https://github.com/hangwin/mcp-chrome) | Chrome extension-based MCP server — exposes browser tab state and DOM to AI agents |
| [Mobile MCP](https://github.com/mobile-next/mobile-mcp) | MCP server for mobile automation and scraping on iOS and Android |
| [Markdownify MCP](https://github.com/zcaceres/markdownify-mcp) | MCP server for converting almost anything (URLs, PDFs, images) to Markdown |

## Communication Servers

| Server | Description |
|--------|-------------|
| Slack | Channel management and messaging capabilities |
| Google Maps | Location services and place details |
| Memory | Knowledge graph-based persistent memory system |
| [ElevenLabs](https://github.com/elevenlabs/elevenlabs-mcp) | Official ElevenLabs MCP server for voice and audio capabilities |
| [ChatSum](https://github.com/chatmcp/mcp-server-chatsum) | Query and summarize chat messages |
| [Google Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp) | Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, and Search via MCP |

## Utility Servers

| Server | Description |
|--------|-------------|
| [MCP Proxy](https://github.com/sparfenyuk/mcp-proxy) | Connect to MCP servers that run on SSE transport, or expose stdio servers as an SSE server |
| [MCP to OpenAPI Proxy](https://github.com/open-webui/mcpo) | A simple, secure MCP-to-OpenAPI proxy server |
| [MCP Installer](https://github.com/anaisbetts/mcp-installer) | An MCP server that installs other MCP servers |
| [MCP-Use](https://github.com/mcp-use/mcp-use) | The easiest way to interact with MCP servers with custom agents |
| [FastMCP](https://github.com/jlowin/fastmcp) | Fast, Pythonic way to build MCP servers and clients |
| [Markdownify MCP](https://github.com/zcaceres/markdownify-mcp) | A MCP server for converting almost anything to Markdown |
| [Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) | Gives LLMs terminal control, file system search and diff file editing capabilities |
| [ArXiv MCP](https://github.com/blazickjp/arxiv-mcp-server) | A MCP server for searching and analyzing arXiv papers |
| [Create Python Server](https://github.com/modelcontextprotocol/create-python-server) | Tool to create a Python MCP server |
| [Spec Workflow MCP](https://github.com/Pimzino/spec-workflow-mcp) | MCP server that provides structured spec-driven development workflows for AI coding agents |
| [ToolHive](https://github.com/stacklok/toolhive) | Makes deploying MCP servers easy, secure, and fun — container-based MCP server manager |
| [Central Mind Gateway](https://github.com/centralmind/gateway) | Universal MCP server for databases, optimised for LLMs and AI agents |

## MCP Development Tools

| Server | Description |
|--------|-------------|
| [MCP Inspector](https://github.com/modelcontextprotocol/inspector) | Visual testing tool for MCP servers |
| [Damn Vulnerable MCP Server](https://github.com/harishsg993010/damn-vulnerable-MCP-server) | A deliberately vulnerable MCP server for security testing and education |
| [MCPBench](https://github.com/modelscope/MCPBench) | Evaluation benchmark for measuring the quality and performance of MCP servers |

## AI/ML Tools Servers

| Server | Description |
|--------|-------------|
| [Gemini MCP](https://github.com/jamubc/gemini-mcp-tool) | MCP server that enables AI assistants to interact with Google Gemini CLI |
| [Ollama MCP Bridge](https://github.com/patruff/ollama-mcp-bridge) | Bridge between Ollama and MCP servers, enabling local LLMs to use MCP tools |
| [Code Graph Context](https://github.com/CodeGraphContext/CodeGraphContext) | MCP server that indexes local code into a graph database for semantic code search |
| [PubMed MCP](https://github.com/andybrandt/mcp-simple-pubmed) | MCP server for searching and querying PubMed medical research papers |

## Security Servers

| Server | Description |
|--------|-------------|
| [MCP for Security](https://github.com/cyproxio/mcp-for-security) | A collection of MCP servers for popular security tools (Nmap, Burp Suite, and more) |
| [HexStrike AI](https://github.com/0x4m4/hexstrike-ai) | Advanced MCP server for AI-assisted penetration testing and security assessments |

## Open Source MCP Servers

- [Hugging Face Hub](https://github.com/huggingface/huggingface_hub) - Popular platform for sharing and documenting ML models
- [MLflow Model Registry](https://github.com/mlflow/mlflow) - Open source platform for the ML lifecycle, including model documentation
- [ModelCard Toolkit](https://github.com/tensorflow/model-card-toolkit) - Google's open source toolkit for creating model cards
- [OSML Model Metadata Repository](https://github.com/osml-dev/metadata-repository) - Repository designed for ML model metadata management

## Commercial MCP Solutions

- [Weights & Biases](https://wandb.ai/site) - MLOps platform with model registry and documentation features
- [Determined AI](https://www.determined.ai/) - Comprehensive MLOps platform with model documentation
- [Verta.ai](https://www.verta.ai/) - ML model management platform with versioning and documentation
- [Neptune.ai](https://neptune.ai/) - Metadata store for MLOps, supporting model documentation

## Self-Hosted Solutions

- [DVC](https://dvc.org/) - Open-source version control system for ML projects
- [ClearML](https://github.com/allegroai/clearml) - Open source MLOps and data management solution
- [Pachyderm](https://github.com/pachyderm/pachyderm) - Data versioning and pipelines for MLOps

## Emerging Projects

- [Modelbit](https://www.modelbit.com/) - Deploy ML models with documentation
- [Giskard](https://github.com/Giskard-AI/giskard) - Open source governance for AI systems
- [MCP Server Directory](https://github.com/chatmcp/mcpso) - Directory for Awesome MCP Servers

---

**Want to contribute to this list? Submit a pull request!**